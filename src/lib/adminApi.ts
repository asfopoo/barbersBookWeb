const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
export const CUSTOMER_APP_URL = 'https://app.thebarbersbook.com';

export function barberBookingUrl(slug: string | null | undefined): string | null {
  return slug ? `${CUSTOMER_APP_URL}/book/${slug}` : null;
}

export function shopBookingUrl(slug: string | null | undefined): string | null {
  return slug ? `${CUSTOMER_APP_URL}/book/shop/${slug}` : null;
}

// Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  subscriptionTier: 'free' | 'pro' | 'premium';
  subscriptionStatus: 'active' | 'expired' | 'cancelled' | 'trialing' | 'none';
  subscriptionExpiresAt: string | null;
  isAdmin: boolean;
  exportCount: number;
  lastExportDate: string | null;
  bookingSlug: string | null;
  bookingEnabled: boolean;
  createdAt: string;
  updatedAt: string;
  /** Set when the user is soft-deleted (admin delete or self-delete). */
  deletedAt: string | null;
}

export interface Shop {
  id: string;
  userId: string;
  ownerId: string;
  name: string;
  code: string;
  address: string | null;
  phone: string | null;
  isActive: boolean;
  estimatedWaitMinutes: number;
  logoUrl: string | null;
  primaryColor: string | null;
  welcomeMessage: string | null;
  bookingSlug: string | null;
  shopBookingEnabled: boolean;
  lastActivityAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface PayoutUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  payoutFrequency: 'rolling' | 'daily' | 'weekly' | 'biweekly' | 'semimonthly';
  payoutDayOfWeek: number | null;
  lastScheduledPayoutAt: string | null;
  nextPayoutDate: string | null;
  scheduledPayoutError: string | null;
  stripePayoutsEnabled: boolean;
  taxHoldEnabled: boolean;
  taxHoldAmount: number;
}

export interface PayoutCronStatus {
  cronSchedule: string;
  nextCronRunAt: string;
  summary: {
    totalOnScheduled: number;
    withErrors: number;
    stripeEnabled: number;
  };
  users: PayoutUser[];
}

export interface PayoutRunResult {
  processedAt: string;
  usersEvaluated: number;
  payoutsInitiated: number;
  payoutsSkipped: number;
  payoutsFailed: number;
  totalAmountPaid: number;
  errors: Array<{ userId: string; email: string; error: string }>;
}

export interface FeedbackItem {
  id: string;
  userId: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  language: string | null;
  category: string;
  message: string;
  appVersion: string | null;
  os: string | null;
  deviceModel: string | null;
  createdAt: string;
  repliedAt: string | null;
}

export interface AffiliateTotals {
  signups: number;
  payingBarbers: number;
  earnedUsd: number;
  paidUsd: number;
  owedUsd: number;
}

export interface AffiliateSummary {
  id: string;
  name: string;
  code: string;
  email: string | null;
  commissionPercent: number;
  commissionMonths: number;
  payoutMethod: string | null;
  payoutHandle: string | null;
  notes: string | null;
  active: boolean;
  createdAt: string;
  link: string;
  statsUrl: string;
  totals: AffiliateTotals;
}

export interface AffiliateDetail extends AffiliateSummary {
  barbers: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    createdAt: string;
    subscriptionTier: string;
    subscriptionStatus: string;
    earnedUsd: number;
    firstChargeAt: string | null;
  }[];
  commissions: {
    id: string;
    userId: string | null;
    eventType: string;
    store: string | null;
    grossUsd: number;
    commissionUsd: number;
    occurredAt: string;
    paid: boolean;
  }[];
  payouts: { id: string; amountUsd: number; method: string | null; reference: string | null; note: string | null; paidAt: string }[];
}

export interface AffiliateInput {
  name?: string;
  code?: string;
  email?: string | null;
  commissionPercent?: number;
  commissionMonths?: number;
  payoutMethod?: string | null;
  payoutHandle?: string | null;
  notes?: string | null;
  active?: boolean;
}

export interface HeldReferral {
  referee: { id: string; email: string; firstName: string | null; lastName: string | null; createdAt: string; signupIp: string | null };
  referrer: { id: string; email: string; firstName: string | null; lastName: string | null; signupIp: string | null };
  refereeRewarded: boolean;
  referrerRewarded: boolean;
  reason: 'same_ip_as_referrer' | 'same_ip_as_other_referee';
}

export interface ReleaseResult {
  refereeRewards: number;
  referrerRewards: number;
  capped: number;
  errors: { userId: string; error: string }[];
}

export type AppPlatform = 'ios' | 'android';

export interface PlatformVersions {
  latestVersion: string;
  minVersion: string;
  storeUrl: string;
}

export const POSTHOG_MOBILE_PROJECT = 133308;

/** PostHog keys barbers by email, so the person page is addressable by it. */
export function posthogPersonUrl(email: string): string {
  return `https://us.posthog.com/project/${POSTHOG_MOBILE_PROJECT}/person/${encodeURIComponent(email)}`;
}

// Auth Service
class AdminAuthService {
  private tokenKey = 'admin_token';
  private userKey = 'admin_user';

  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Login failed');
    }

    const data = await response.json();

    // Check if user is admin
    if (!data.user.isAdmin) {
      throw new Error('Access denied: Admin privileges required');
    }

    // Store token and user
    localStorage.setItem(this.tokenKey, data.accessToken);
    localStorage.setItem(this.userKey, JSON.stringify(data.user));

    return { user: data.user, token: data.accessToken };
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUser(): User | null {
    const userStr = localStorage.getItem(this.userKey);
    return userStr ? JSON.parse(userStr) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

// API Client
class AdminApiClient {
  private authService = new AdminAuthService();

  private async request(endpoint: string, options: RequestInit = {}) {
    const token = this.authService.getToken();

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (response.status === 401) {
      this.authService.logout();
      window.location.href = '/admin/login';
      throw new Error('Unauthorized');
    }

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Request failed');
    }

    return response.json();
  }

  // Users
  async getUsers(params: {
    page?: number;
    limit?: number;
    search?: string;
    tier?: string;
    status?: string;
    includeDeleted?: boolean;
  }) {
    const queryString = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      }, {} as Record<string, string>)
    ).toString();

    return this.request(`/api/admin/users?${queryString}`);
  }

  async getUser(id: string) {
    return this.request(`/api/admin/users/${id}`);
  }

  async updateUser(
    id: string,
    data: {
      isAdmin?: boolean;
      exportCount?: number;
      bookingEnabled?: boolean;
    }
  ) {
    return this.request(`/api/admin/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async resetUserPassword(id: string): Promise<{ tempPassword: string }> {
    return this.request(`/api/admin/users/${id}/reset-password`, {
      method: 'POST',
    });
  }

  async generateUserBookingSlug(id: string): Promise<{ bookingSlug: string }> {
    return this.request(`/api/admin/users/${id}/booking-slug`, {
      method: 'POST',
    });
  }

  async deleteUser(id: string) {
    return this.request(`/api/admin/users/${id}`, {
      method: 'DELETE',
    });
  }

  async grantTrial(id: string, days: number | 'lifetime'): Promise<{
    message: string;
    subscriptionTier: string;
    subscriptionStatus: string;
    subscriptionExpiresAt: string;
  }> {
    return this.request(`/api/admin/users/${id}/grant-trial`, {
      method: 'POST',
      body: JSON.stringify(days === 'lifetime' ? { lifetime: true } : { days }),
    });
  }

  async restoreUser(id: string): Promise<{ message: string }> {
    return this.request(`/api/admin/users/${id}/restore`, {
      method: 'POST',
    });
  }

  // Shops
  async getShops(params: {
    page?: number;
    limit?: number;
    search?: string;
    active?: boolean;
  }) {
    const queryString = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      }, {} as Record<string, string>)
    ).toString();

    return this.request(`/api/admin/shops?${queryString}`);
  }

  // Analytics
  async getRevenueAnalytics(startDate?: string, endDate?: string) {
    const params = new URLSearchParams();
    if (startDate) params.set('startDate', startDate);
    if (endDate) params.set('endDate', endDate);

    return this.request(`/api/admin/analytics/revenue?${params.toString()}`);
  }

  async getUserAnalytics() {
    return this.request('/api/admin/analytics/users');
  }

  async getHaircuts(params: {
    startDate?: string;
    endDate?: string;
    userId?: string;
    limit?: number;
  }) {
    const queryString = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      }, {} as Record<string, string>)
    ).toString();

    return this.request(`/api/admin/haircuts?${queryString}`);
  }

  async getExpenses(params: {
    startDate?: string;
    endDate?: string;
    userId?: string;
    limit?: number;
  }) {
    const queryString = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      }, {} as Record<string, string>)
    ).toString();

    return this.request(`/api/admin/expenses?${queryString}`);
  }

  // Invitations
  async getInvitations(params: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    shopId?: string;
  }) {
    const queryString = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      }, {} as Record<string, string>)
    ).toString();

    return this.request(`/api/admin/invitations?${queryString}`);
  }

  async cancelInvitation(id: string) {
    return this.request(`/api/admin/invitations/${id}`, {
      method: 'DELETE',
    });
  }

  async blastTapToPayEmail(): Promise<{ sent: number; failed: number; total: number; errors?: string[] }> {
    return this.request('/api/admin/blast/tap-to-pay-email', { method: 'POST' });
  }

  async blastTapToPayPush(): Promise<{ sent: number; failed: number; total: number }> {
    return this.request('/api/admin/blast/tap-to-pay-push', { method: 'POST' });
  }

  // Feedback inbox
  async getFeedback(status: 'open' | 'all' = 'all'): Promise<{ feedback: FeedbackItem[]; openCount: number }> {
    return this.request(`/api/admin/feedback${status === 'open' ? '?status=open' : ''}`);
  }

  async setFeedbackReplied(id: string, replied: boolean): Promise<{ id: string; repliedAt: string | null }> {
    return this.request(`/api/admin/feedback/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ replied }),
    });
  }

  // Held referral rewards
  // Paid affiliates
  async getAffiliates(): Promise<{ affiliates: AffiliateSummary[] }> {
    return this.request('/api/admin/affiliates');
  }

  async getAffiliate(id: string): Promise<AffiliateDetail> {
    return this.request(`/api/admin/affiliates/${id}`);
  }

  async createAffiliate(input: AffiliateInput): Promise<AffiliateDetail> {
    return this.request('/api/admin/affiliates', { method: 'POST', body: JSON.stringify(input) });
  }

  async updateAffiliate(id: string, input: AffiliateInput): Promise<AffiliateDetail> {
    return this.request(`/api/admin/affiliates/${id}`, { method: 'PATCH', body: JSON.stringify(input) });
  }

  async recordAffiliatePayout(
    id: string,
    input: { method?: string; reference?: string; note?: string },
  ): Promise<{ id: string; amountUsd: number; commissions: number }> {
    return this.request(`/api/admin/affiliates/${id}/payouts`, { method: 'POST', body: JSON.stringify(input) });
  }

  async getHeldReferrals(): Promise<{ held: HeldReferral[] }> {
    return this.request('/api/admin/referrals/held');
  }

  async releaseReferral(refereeId: string): Promise<ReleaseResult> {
    return this.request(`/api/admin/referrals/${refereeId}/release`, { method: 'POST' });
  }

  // Store versions (what the app's update prompt compares against)
  async getAppConfig(): Promise<Record<AppPlatform, PlatformVersions>> {
    return this.request('/api/app-config', { cache: 'no-store' });
  }

  async setAppVersions(
    platform: AppPlatform,
    data: { latestVersion?: string; minVersion?: string },
  ): Promise<PlatformVersions> {
    return this.request(`/api/app-config/${platform}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  // Payout Cron
  async getPayoutCronStatus(): Promise<PayoutCronStatus> {
    return this.request('/api/admin/payouts/users');
  }

  async triggerPayoutRun(): Promise<PayoutRunResult> {
    return this.request('/api/admin/payouts/trigger', { method: 'POST' });
  }

  async recalculateTaxHolds(): Promise<{ updated: number; failed: number; total: number; errors: { email: string; error: string }[] }> {
    return this.request('/api/admin/payouts/recalculate-tax-holds', { method: 'POST' });
  }

  async getTaxBreakdown(userId: string): Promise<{
    taxRate: number;
    holdEnabled: boolean;
    taxHoldEnabledSince: string | null;
    holdEarnings: number;
    holdTips: number;
    holdTotal: number;
    calculatedHold: number;
    dbHold: number;
    transactionCount: number;
    periodStart: string | null;
    periodEnd: string | null;
  }> {
    return this.request(`/api/admin/payouts/tax-breakdown/${userId}`);
  }
}

export const adminAuth = new AdminAuthService();
export const adminApi = new AdminApiClient();
