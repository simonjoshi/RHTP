import { useState } from "react";
import { useNavigate } from "react-router";
import { X, Heart, Phone, Clock, Star, Calendar, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (userData: UserData) => void;
  actionType: "save" | "appointment" | "save-multiple";
  providerName?: string;
}

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export function AuthModal({ isOpen, onClose, onSuccess, actionType, providerName }: AuthModalProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      const supabase = getSupabase();
      // Do not forget to complete setup at https://supabase.com/docs/guides/auth/social-login/auth-google
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/account-creation`,
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

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSuccess(formData);
      onClose();
      // Navigate to account creation loading page
      navigate("/account-creation", {
        state: {
          userName: formData.firstName
        }
      });
    }
  };

  const handleInputChange = (field: keyof UserData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 md:p-4 overflow-y-auto">
      <Card className="w-full max-w-5xl my-4 md:my-8">
        <CardHeader className="border-b p-3 md:p-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg md:text-2xl">Create Your Account</CardTitle>
              <p className="text-xs md:text-sm text-gray-600 mt-0.5 md:mt-1">
                {actionType === "save" 
                  ? `Create an account to save ${providerName || "this provider"} to your favorites`
                  : actionType === "save-multiple"
                  ? "Create an account to save your selected providers and unlock all features"
                  : `Create an account to request an appointment with ${providerName || "this provider"}`
                }
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-auto p-1 flex-shrink-0"
            >
              <X className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-3 md:p-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
            {/* Left Column - Benefits Section */}
            {(actionType === "save" || actionType === "save-multiple") && (
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 md:p-5 border border-purple-100 h-fit">
                <div className="flex items-start gap-2.5 md:gap-3 mb-3 md:mb-4">
                  <div className="bg-[#6B21A8] rounded-full p-1.5 md:p-2 flex-shrink-0">
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-white fill-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-0.5 md:mb-1">
                      Save Providers & Unlock Features
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      Create a free account to access:
                    </p>
                  </div>
                </div>

                <div className="space-y-2 md:space-y-2.5">
                  <div className="flex items-start gap-2 md:gap-2.5 bg-white rounded-lg p-2.5 md:p-3 shadow-sm">
                    <div className="bg-purple-100 rounded-full p-1 md:p-1.5 flex-shrink-0">
                      <Heart className="h-3 w-3 md:h-3.5 md:w-3.5 text-[#6B21A8]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-xs md:text-sm text-gray-900">Save Favorite Providers</p>
                      <p className="text-[10px] md:text-xs text-gray-600">Build your personal list of trusted providers</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 md:gap-2.5 bg-white rounded-lg p-2.5 md:p-3 shadow-sm">
                    <div className="bg-blue-100 rounded-full p-1 md:p-1.5 flex-shrink-0">
                      <Calendar className="h-3 w-3 md:h-3.5 md:w-3.5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-xs md:text-sm text-gray-900">Schedule & Request Appointments</p>
                      <p className="text-[10px] md:text-xs text-gray-600">Book appointments and request callbacks at your preferred time</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 md:gap-2.5 bg-white rounded-lg p-2.5 md:p-3 shadow-sm">
                    <div className="bg-green-100 rounded-full p-1 md:p-1.5 flex-shrink-0">
                      <Clock className="h-3 w-3 md:h-3.5 md:w-3.5 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-xs md:text-sm text-gray-900">Timeline View</p>
                      <p className="text-[10px] md:text-xs text-gray-600">Track your provider search journey</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 md:mt-4 p-2 md:p-2.5 bg-purple-100 rounded-lg border border-purple-200">
                  <p className="text-[10px] md:text-xs text-[#6B21A8] text-center">
                    🎉 <span className="font-semibold">100% Free</span> – No credit card required. Create your account in under 2 minutes.
                  </p>
                </div>
              </div>
            )}

            {/* Right Column - Form */}
            <div className={(actionType === "save" || actionType === "save-multiple") ? "" : "lg:col-span-2"}>
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                {/* Google SSO Button */}
                <div className="space-y-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleGoogleSignIn}
                    disabled={isGoogleLoading}
                    className="w-full h-10 md:h-11 text-sm font-medium border-2 hover:bg-gray-50 transition-all"
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
                    <div className="relative flex justify-center text-xs md:text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 md:mb-2.5">Personal Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
                    <div>
                      <Label htmlFor="firstName" className="text-xs md:text-sm">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className={errors.firstName ? "border-red-500 h-9 md:h-9 text-sm" : "h-9 md:h-9 text-sm"}
                      />
                      {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-xs md:text-sm">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className={errors.lastName ? "border-red-500 h-9 md:h-9 text-sm" : "h-9 md:h-9 text-sm"}
                      />
                      {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 md:mb-2.5">Contact Information</h3>
                  <div className="space-y-2.5 md:space-y-3">
                    <div>
                      <Label htmlFor="email" className="text-xs md:text-sm">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={errors.email ? "border-red-500 h-9 md:h-9 text-sm" : "h-9 md:h-9 text-sm"}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-xs md:text-sm">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                        className={errors.phone ? "border-red-500 h-9 md:h-9 text-sm" : "h-9 md:h-9 text-sm"}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5 md:gap-3 pt-3 border-t">
                  <Button type="button" variant="outline" onClick={onClose} className="flex-1 h-9 md:h-10 text-sm">
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1 h-9 md:h-10 bg-[#6B21A8] hover:bg-[#7C3AED] text-white shadow-md hover:shadow-lg transition-all text-sm">
                    Create Account & Continue
                  </Button>
                </div>

                {/* Sign In Link */}
                <div className="text-center pt-1 md:pt-2">
                  <p className="text-xs md:text-sm text-gray-600">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        navigate("/sign-in");
                      }}
                      className="text-[#6B21A8] font-semibold hover:text-[#7C3AED] hover:underline transition-colors"
                    >
                      Sign in
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}