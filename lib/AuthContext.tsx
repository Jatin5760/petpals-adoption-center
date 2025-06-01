'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Auth,
  User,
  GoogleAuthProvider,
  PhoneAuthProvider,
  signInWithPopup,
  signInWithPhoneNumber,
  signOut,
  onAuthStateChanged,
  ApplicationVerifier,
} from 'firebase/auth';
import { auth } from './firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithPhone: (phoneNumber: string, appVerifier: ApplicationVerifier) => Promise<any>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Auth state changed:', user);
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      console.log('Starting Google sign-in...');
      const provider = new GoogleAuthProvider();
      // Add additional scopes if needed
      provider.addScope('https://www.googleapis.com/auth/userinfo.email');
      provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
      
      console.log('Provider created, attempting sign-in...');
      const result = await signInWithPopup(auth, provider);
      console.log('Google sign-in successful:', result.user);
      
      // Redirect to profile page after successful login
      router.push('/profile');
    } catch (error) {
      console.error('Error signing in with Google:', error);
      // Handle specific error cases
      if (error instanceof Error) {
        if (error.message.includes('popup-closed-by-user')) {
          console.log('Sign-in popup was closed by the user');
        } else if (error.message.includes('auth/popup-blocked')) {
          console.error('Popup was blocked by the browser. Please allow popups for this site.');
        } else if (error.message.includes('auth/cancelled-popup-request')) {
          console.error('Multiple popup requests were made. Please try again.');
        }
      }
      throw error;
    }
  };

  const signInWithPhone = async (phoneNumber: string, appVerifier: ApplicationVerifier) => {
    try {
      return await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    } catch (error) {
      console.error('Error signing in with phone:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    signInWithPhone,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 