// src/types/auth.ts
export interface UserProfile {
    id: string;
    email?: string;
    username?: string;
    full_name?: string;
    avatar_url?: string;
    company?: string;
    role?: string;
    onboarding_completed?: boolean;
    updated_at?: string;
  }