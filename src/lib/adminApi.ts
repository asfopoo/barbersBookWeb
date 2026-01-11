const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

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
  createdAt: string;
  updatedAt: string;
}

export interface Shop {
  id: string;
  userId: string;
  name: string;
  code: string;
  address: string | null;
  phone: string | null;
  isActive: boolean;
  estimatedWaitMinutes: number;
  logoUrl: string | null;
  primaryColor: string | null;
  welcomeMessage: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardStats {
  totalUsers: number;
  activeSubscriptions: number;
  subscriptionBreakdown: { tier: string; count: string }[];
  recentSignups: number;
  totalShops: number;
  activeShops: number;
  totalHaircuts: number;
  totalExpenses: number;
  totalRevenue: number;
  activeWaitlistEntries: number;
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

  // Dashboard Stats
  async getStats(): Promise<DashboardStats> {
    return this.request('/api/admin/stats');
  }

  // Users
  async getUsers(params: {
    page?: number;
    limit?: number;
    search?: string;
    tier?: string;
    status?: string;
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
      subscriptionTier?: string;
      subscriptionStatus?: string;
      subscriptionExpiresAt?: string | null;
      isAdmin?: boolean;
      exportCount?: number;
    }
  ) {
    return this.request(`/api/admin/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async deleteUser(id: string) {
    return this.request(`/api/admin/users/${id}`, {
      method: 'DELETE',
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
}

export const adminAuth = new AdminAuthService();
export const adminApi = new AdminApiClient();
