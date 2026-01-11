import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { adminAuth } from '../../lib/adminApi';

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = adminAuth.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}
