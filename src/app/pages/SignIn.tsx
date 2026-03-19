import { useState } from "react";
import { useNavigate } from "react-router";
import { Heart, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import logoImage from "figma:asset/402617bbcf95896cb7bccd79e2ebca2544a06ac1.png";
import { createClient } from "@supabase/supabase-js";
import { projectId, publicAnonKey } from "/utils/supabase/info";

// Create Supabase client singleton using lazy initialization
let supabaseInstance: ReturnType<typeof createClient> | null = null;

const getSupabase = () => {
  if (!supabaseInstance) {
    supabaseInstance = createClient(
      `https://${projectId}.supabase.co`,
      publicAnonKey
    );
  }
  return supabaseInstance;
};

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      const supabase = getSupabase();
      // Do not forget to complete setup at https://supabase.com/docs/guides/auth/social-login/auth-google
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/client-portal`,
        }
      });
      
      if (error) {
        console.error('Google sign-in error:', error);
        setErrors({ google: 'Failed to sign in with Google. Please try again.' });
      }
    } catch (err) {
      console.error('Google sign-in error:', err);
      setErrors({ google: 'Failed to sign in with Google. Please try again.' });
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Mock authentication - in real app, this would call an API
      const firstName = formData.email.split("@")[0];
      navigate("/client-portal", {
        state: {
          userName: firstName.charAt(0).toUpperCase() + firstName.slice(1)
        }
      });
    }
  };

  const handleInputChange = (field: "email" | "password", value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-5 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <img src={logoImage} alt="Care Solace" className="h-6 md:h-8" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-5 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 -ml-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <Card>
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <p className="text-sm text-gray-600">
              Sign in to your CareMatch account to access your saved providers and continue your care journey
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Google SSO Button */}
              <div className="space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGoogleSignIn}
                  disabled={isGoogleLoading}
                  className="w-full h-11 text-sm font-medium border-2 hover:bg-gray-50 transition-all"
                >
                  {isGoogleLoading ? (
                    <span className="animate-pulse">Connecting...</span>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Continue with Google
                    </>
                  )}
                </Button>
                {errors.google && <p className="text-xs text-red-500 text-center">{errors.google}</p>}
                
                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={errors.email ? "border-red-500 mt-1.5" : "mt-1.5"}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <button
                    type="button"
                    onClick={() => {/* Handle forgot password */}}
                    className="text-xs text-purple-700 hover:text-purple-800 font-medium"
                  >
                    Forgot password?
                  </button>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className={errors.password ? "border-red-500 mt-1.5" : "mt-1.5"}
                  placeholder="Enter your password"
                />
                {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-purple-700 hover:bg-purple-800 text-white shadow-md hover:shadow-lg transition-all"
              >
                Sign in
              </Button>

              <div className="text-center pt-4 border-t">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="text-purple-700 font-semibold hover:text-purple-800 hover:underline transition-colors"
                  >
                    Create account
                  </button>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Additional Help Section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-2">Need help signing in?</p>
          <Button variant="outline" className="rounded-full" onClick={() => navigate("/")}>
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}