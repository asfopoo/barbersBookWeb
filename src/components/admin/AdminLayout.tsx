import { type ReactNode, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { adminApi, adminAuth } from '../../lib/adminApi';

interface AdminLayoutProps {
  children: ReactNode;
}

type NavItem = { path: string; label: string; badge?: number };

// Collapsible group in the nav. Closes on route change and on outside click.
function NavGroup({ label, items, active }: { label: string; items: NavItem[]; active: boolean }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [location.pathname]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) ref.current.open = false;
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  return (
    <details ref={ref} className="relative">
      <summary
        className={`list-none cursor-pointer px-3 py-2 rounded-lg text-sm font-medium transition-colors select-none ${
          active ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        {label} <span className="text-xs opacity-60">▾</span>
      </summary>
      <div className="absolute right-0 md:left-0 md:right-auto mt-1 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-3 py-2 text-sm ${
              location.pathname === item.path ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const user = adminAuth.getUser();

  // Badge counts. Both are cheap and shared with the pages via the query key.
  const { data: feedback } = useQuery({
    queryKey: ['admin-feedback', 'all'],
    queryFn: () => adminApi.getFeedback('all'),
    staleTime: 60_000,
  });
  const { data: held } = useQuery({
    queryKey: ['admin-referrals-held'],
    queryFn: () => adminApi.getHeldReferrals(),
    staleTime: 5 * 60_000,
  });

  const handleLogout = () => {
    adminAuth.logout();
    navigate('/admin/login');
  };

  const primary: NavItem[] = [
    { path: '/admin/users', label: 'Users' },
    { path: '/admin/feedback', label: 'Feedback', badge: feedback?.openCount },
    { path: '/admin/referrals', label: 'Referrals', badge: held?.held.length },
    { path: '/admin/affiliates', label: 'Affiliates' },
    { path: '/admin/versions', label: 'Store versions' },
    { path: '/admin/shops', label: 'Shops' },
  ];
  const more: NavItem[] = [
    { path: '/admin/invitations', label: 'Invitations' },
    { path: '/admin/analytics', label: 'Analytics' },
  ];
  // Stripe-era pages. Kept read-only-ish until Stripe is removed (~Dec 2026).
  const archive: NavItem[] = [
    { path: '/admin/transactions', label: 'Transactions' },
    { path: '/admin/payouts', label: 'Payouts' },
    { path: '/admin/notifications', label: 'Tap to Pay blasts' },
  ];

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <Link to="/admin/users" className="text-base font-bold text-gray-900 whitespace-nowrap">
              Barber's Book <span className="font-normal text-gray-500">admin</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-sm text-gray-500">
                {user?.firstName} {user?.lastName}
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Log out
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1 pb-2">
            {primary.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive(item.path) ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.label}
                {!!item.badge && (
                  <span
                    className={`min-w-5 px-1.5 rounded-full text-xs leading-5 text-center ${
                      isActive(item.path) ? 'bg-white text-gray-900' : 'bg-red-600 text-white'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
            <span className="mx-1 h-5 w-px bg-gray-200" />
            <NavGroup label="More" items={more} active={more.some((i) => isActive(i.path))} />
            <NavGroup label="Archive" items={archive} active={archive.some((i) => isActive(i.path))} />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </div>
  );
}
