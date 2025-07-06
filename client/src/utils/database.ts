// MongoDB API integration for RoleSwap
// Update the API_URL if your server runs elsewhere
const API_URL = 'http://localhost:5000/api';

import { User, SimulationSession, Badge } from '../types';

export const database = {
  // User operations
  async createUser(user: Omit<User, 'id' | 'badges' | 'sessions' | 'streak' | 'totalSimulations'>) {
    try {
      const res = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to create user');
      }
      return res.json();
    } catch (error) {
      console.error('Create user error:', error);
      throw error;
    }
  },
  async getUserById(id: string) {
    try {
      const res = await fetch(`${API_URL}/users/${id}`);
      if (!res.ok) return null;
      return res.json();
    } catch (error) {
      console.error('Get user by ID error:', error);
      return null;
    }
  },
  async getUserByEmail(email: string) {
    try {
      const res = await fetch(`${API_URL}/users/email/${email}`);
      if (!res.ok) return null;
      return res.json();
    } catch (error) {
      console.error('Get user by email error:', error);
      return null;
    }
  },
  async updateUser(user: User) {
    try {
      const res = await fetch(`${API_URL}/users/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to update user');
      }
      return res.json();
    } catch (error) {
      console.error('Update user error:', error);
      throw error;
    }
  },
  // Session operations
  async createSession(session: SimulationSession) {
    try {
      const res = await fetch(`${API_URL}/sessions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(session),
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to create session');
      }
      return res.json();
    } catch (error) {
      console.error('Create session error:', error);
      throw error;
    }
  },
  async getSessionsByUser(userId: string) {
    try {
      const res = await fetch(`${API_URL}/sessions/user/${userId}`);
      if (!res.ok) throw new Error('Failed to fetch sessions');
      return res.json();
    } catch (error) {
      console.error('Get sessions error:', error);
      throw error;
    }
  },
  // Badge operations
  async awardBadge(badge: Badge) {
    try {
      const res = await fetch(`${API_URL}/badges`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(badge),
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to award badge');
      }
      return res.json();
    } catch (error) {
      console.error('Award badge error:', error);
      throw error;
    }
  },
  async createBadge(badge: Badge) {
    try {
      const res = await fetch(`${API_URL}/badges`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(badge),
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to create badge');
      }
      return res.json();
    } catch (error) {
      console.error('Create badge error:', error);
      throw error;
    }
  },
  async getBadgesByUser(userId: string) {
    try {
      const res = await fetch(`${API_URL}/badges/user/${userId}`);
      if (!res.ok) throw new Error('Failed to fetch badges');
      return res.json();
    } catch (error) {
      console.error('Get badges error:', error);
      throw error;
    }
  },
  // Auth
  async loginUser(email: string, password: string) {
    try {
      const res = await fetch(`${API_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error('Login failed:', errorData);
        return null;
      }
      return res.json();
    } catch (error) {
      console.error('Login error:', error);
      return null;
    }
  },
};