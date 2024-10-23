// src/contexts/AuthContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { 
  AuthChangeEvent, 
  Session, 
  User,
  AuthError 
} from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { UserProfile } from '../types/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ error: AuthError | null, session: Session | null }>;
  signup: (email: string, password: string) => Promise<{ error: AuthError | null, session: Session | null }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  useEffect(() => {
    const setupUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          setUser(session.user);
          setIsAuthenticated(true);
          const profile = await fetchProfile(session.user.id);
          setUserProfile(profile);
        }
      } catch (error) {
        console.error('Error setting up user:', error);
      } finally {
        setLoading(false);
      }
    };

    setupUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: AuthChangeEvent, session: Session | null) => {
        console.log('Auth state changed:', event, session);
        
        if (session?.user) {
          setUser(session.user);
          setIsAuthenticated(true);
          const profile = await fetchProfile(session.user.id);
          setUserProfile(profile);
        } else {
          setUser(null);
          setIsAuthenticated(false);
          setUserProfile(null);
        }
        
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Login error:', error);
        return { error, session: null };
      }

      if (data.session) {
        setUser(data.session.user);
        setIsAuthenticated(true);
        const profile = await fetchProfile(data.session.user.id);
        setUserProfile(profile);
      }

      return { error: null, session: data.session };
    } catch (error) {
      console.error('Error during login:', error);
      return { error: error as AuthError, session: null };
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin + '/auth/callback'
        }
      });

      if (error) {
        console.error('Signup error:', error);
        return { error, session: null };
      }

      return { error: null, session: data.session };
    } catch (error) {
      console.error('Error during signup:', error);
      return { error: error as AuthError, session: null };
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Logout error:', error);
      } else {
        setUser(null);
        setIsAuthenticated(false);
        setUserProfile(null);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        user,
        userProfile,
        loading,
        login,
        signup,
        logout
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};