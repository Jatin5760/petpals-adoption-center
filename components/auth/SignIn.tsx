'use client';

import { useState } from 'react';
import { RecaptchaVerifier, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/lib/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

export function SignIn() {
  const { signInWithGoogle, signInWithPhone } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const setupRecaptcha = () => {
    const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      size: 'normal',
      callback: () => {
        // reCAPTCHA solved
      },
    });
    return recaptchaVerifier;
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      toast({
        title: "Success",
        description: "You have been successfully signed in with Google.",
      });
    } catch (error) {
      console.error('Google sign-in error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to sign in with Google",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneNumberSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const recaptchaVerifier = setupRecaptcha();
      const confirmationResult = await signInWithPhone(phoneNumber, recaptchaVerifier);
      setVerificationId(confirmationResult.verificationId);
    } catch (error) {
      console.error('Phone sign-in error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerificationCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!verificationId) return;

    try {
      setLoading(true);
      // Verify the code
      await signInWithCredential(
        auth,
        PhoneAuthProvider.credential(verificationId, verificationCode)
      );
    } catch (error) {
      console.error('Verification code error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-[400px] mx-auto mt-8">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Choose your preferred sign-in method</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="google">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="google">Google</TabsTrigger>
            <TabsTrigger value="phone">Phone</TabsTrigger>
          </TabsList>

          <TabsContent value="google">
            <Button
              className="w-full"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in with Google'}
            </Button>
          </TabsContent>

          <TabsContent value="phone">
            {!verificationId ? (
              <form onSubmit={handlePhoneNumberSubmit} className="space-y-4">
                <Input
                  type="tel"
                  placeholder="Phone number (e.g., +1234567890)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <div id="recaptcha-container"></div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Sending code...' : 'Send verification code'}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleVerificationCodeSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Enter verification code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Verifying...' : 'Verify code'}
                </Button>
              </form>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
} 