import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router";
import { 
  Heart, 
  MapPin, 
  Star, 
  Phone, 
  Calendar, 
  Video, 
  ChevronDown, 
  User, 
  PhoneCall, 
  UserCheck, 
  Check, 
  Clock, 
  X, 
  MessageCircle, 
  FileText,
  Search,
  Bookmark,
  ChevronRight,
  Plus,
  Filter,
  ArrowLeft,
  Info
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { ConnectionModal } from "../components/ConnectionModal";
import { GroupedProviders } from "../components/GroupedProviders";
import { FloatingCallbackCart } from "../components/FloatingCallbackCart";
import { mockProviders, Provider } from "../data/providers";
import logoImage from "figma:asset/402617bbcf95896cb7bccd79e2ebca2544a06ac1.png";

// Declare Genesys type for TypeScript
declare global {
  interface Window {
    Genesys: any;
  }
}

interface Case {
  id: string;
  name: string;
  type: "Mental Health" | "Physical Health" | "Social Services";
  status: string;
  statusColor: string;
  progress: number;
}

interface SavedProvider {
  id: string;
  name: string;
  credentials: string;
  specialty: string[];
  bio: string;
  location: string;
  rating: number;
  nextAvailable: string;
  telehealth: boolean;
  acceptingNew: boolean;
  category: "Mental Health" | "Physical Health" | "Social Services";
}

interface Event {
  id: string;
  month: string;
  day: string;
  title: string;
  time: string;
}

export default function ClientPortal() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"cases" | "resources" | "account">("cases");
  const [requestedCallbacks, setRequestedCallbacks] = useState<Set<string>>(new Set());
  const [expandedProvider, setExpandedProvider] = useState<string | null>(null);
  const [expandedCallbackCard, setExpandedCallbackCard] = useState<string | null>(null);
  const [selectedConnectionMethod, setSelectedConnectionMethod] = useState<{ [key: string]: string | null }>({});
  const [callbackCartProviders, setCallbackCartProviders] = useState<Array<{
    id: string;
    name: string;
    category: "Mental Health" | "Physical Health" | "Social Services";
  }>>([]);
  const [pendingCallbackRequests, setPendingCallbackRequests] = useState<Array<{
    id: string;
    name: string;
    category: "Mental Health" | "Physical Health" | "Social Services";
  }>>([]);
  const [showBanner, setShowBanner] = useState(() => {
    // Check localStorage to see if banner was dismissed
    const dismissed = localStorage.getItem('careMatchBannerDismissed');
    return !dismissed;
  });
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    provider: SavedProvider | null;
    connectionType: "call-myself" | "provider-call" | "cc-help" | null;
  }>({
    isOpen: false,
    provider: null,
    connectionType: null
  });

  // Provider search state - embedded in portal
  const [showProviderSearch, setShowProviderSearch] = useState(false);
  const [searchType, setSearchType] = useState<"all" | "mental-health" | "physical-health" | "social-services">("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [telehealthOnly, setTelehealthOnly] = useState(false);
  const [acceptingNewOnly, setAcceptingNewOnly] = useState(false);

  // Case detail view state
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);

  // Genesys chat state
  const [genesysReady, setGenesysReady] = useState(false);

  // Load Genesys chat script
  useEffect(() => {
    // Define Genesys function
    (function (g: any, e: string, n: string, es: any, ys: HTMLScriptElement | null) {
      g['_genesysJs'] = e;
      g[e] = g[e] || function () {
        (g[e].q = g[e].q || []).push(arguments);
      };
      g[e].t = 1 * new Date().getTime();
      g[e].c = es;
      ys = document.createElement('script');
      ys.async = true;
      ys.src = n;
      ys.charset = 'utf-8';
      document.head.appendChild(ys);
    })(window, 'Genesys', 'https://apps.usw2.pure.cloud/genesys-bootstrap/genesys.min.js', {
      environment: 'prod-usw2',
      deploymentId: '8a9384ce-d2eb-4dd1-a6a0-a1f52cfc4f5e'
    }, null);

    // Listen for Genesys ready event
    const checkGenesysReady = setInterval(() => {
      if (window.Genesys) {
        console.log('Genesys widget loaded and ready');
        setGenesysReady(true);
        clearInterval(checkGenesysReady);
      }
    }, 500);

    // Cleanup
    return () => clearInterval(checkGenesysReady);
  }, []);

  // Function to open Genesys chat
  const openChat = () => {
    console.log('Opening chat, Genesys ready:', genesysReady);
    if (window.Genesys) {
      try {
        window.Genesys('command', 'Messenger.open');
        console.log('Chat window opened successfully');
      } catch (error) {
        console.error('Error opening chat:', error);
        alert('Unable to open chat at this time. Please try again in a moment.');
      }
    } else {
      console.log('Genesys widget not loaded yet, retrying...');
      // Try to reinitialize if not loaded
      setTimeout(() => {
        if (window.Genesys) {
          try {
            window.Genesys('command', 'Messenger.open');
            console.log('Chat window opened successfully on retry');
          } catch (error) {
            console.error('Error opening chat on retry:', error);
            alert('Unable to open chat at this time. Please refresh the page and try again.');
          }
        } else {
          console.error('Genesys still not loaded after retry');
          alert('Chat is still loading. Please wait a moment and try again.');
        }
      }, 1000);
    }
  };

  // Check if user just submitted callback requests
  useEffect(() => {
    // Clear old localStorage data if no callback was submitted
    if (!(location.state as any)?.callbackSubmitted) {
      localStorage.removeItem('careMatchPendingCallbacks');
    }
    
    console.log('=== CLIENT PORTAL MOUNTED/UPDATED ===');
    console.log('Full location object:', location);
    console.log('Location pathname:', location.pathname);
    console.log('Location state:', location.state);
    console.log('Has callbackSubmitted?', (location.state as any)?.callbackSubmitted);
    console.log('Has providers?', (location.state as any)?.providers);
    
    if ((location.state as any)?.callbackSubmitted && (location.state as any)?.providers) {
      const providers = (location.state as any).providers;
      console.log('✅ CALLBACK FLOW DETECTED!');
      console.log('Providers to save:', providers);
      
      setPendingCallbackRequests(providers);
      localStorage.setItem('careMatchPendingCallbacks', JSON.stringify(providers));
      setShowSuccessBanner(true);
      
      // Clear the cart
      setCallbackCartProviders([]);
      
      // Don't clear state immediately - wait for React to finish rendering
      setTimeout(() => {
        console.log('Clearing location state now');
        window.history.replaceState({}, document.title);
      }, 500);
      
      // Auto-hide success banner after 10 seconds
      setTimeout(() => setShowSuccessBanner(false), 10000);
    } else {
      console.log('❌ No callback submission detected in location state');
    }
  }, [location, location.state, location.pathname]);

  // Debug log
  useEffect(() => {
    console.log('Pending callback requests updated:', pendingCallbackRequests);
  }, [pendingCallbackRequests]);

  const handleDismissBanner = () => {
    setShowBanner(false);
    localStorage.setItem('careMatchBannerDismissed', 'true');
  };

  const handleConnectionMethodSelect = (providerId: string, method: "call-myself" | "provider-call" | "cc-help") => {
    const provider = savedProviders.find(p => p.id === providerId);
    if (!provider) return;

    // For "call-myself", open the modal as before
    if (method === "call-myself") {
      setModalState({
        isOpen: true,
        provider,
        connectionType: method
      });
      setSelectedConnectionMethod(prev => ({
        ...prev,
        [providerId]: method
      }));
    } else {
      // For "provider-call" and "cc-help", add to floating cart
      setCallbackCartProviders(prev => {
        // Check if provider is already in cart
        if (prev.some(p => p.id === providerId)) {
          return prev;
        }
        return [...prev, {
          id: provider.id,
          name: provider.name,
          category: provider.category
        }];
      });
      
      // Mark as selected
      setSelectedConnectionMethod(prev => ({
        ...prev,
        [providerId]: method
      }));
    }
  };

  const handleRemoveFromCart = (providerId: string) => {
    setCallbackCartProviders(prev => prev.filter(p => p.id !== providerId));
    setSelectedConnectionMethod(prev => ({
      ...prev,
      [providerId]: null
    }));
  };

  const handleProceedToCallback = () => {
    console.log('=== PROCEED TO CALLBACK CLICKED ===');
    console.log('callbackCartProviders:', callbackCartProviders);
    console.log('callbackCartProviders count:', callbackCartProviders.length);
    console.log('Full provider objects:', JSON.stringify(callbackCartProviders, null, 2));
    
    navigate("/callback-details", {
      state: {
        providers: callbackCartProviders
      }
    });
  };

  const handleCloseCart = () => {
    // Optional: You could ask for confirmation here
    setCallbackCartProviders([]);
  };

  const handleModalClose = () => {
    setModalState({
      isOpen: false,
      provider: null,
      connectionType: null
    });
  };

  const handleModalComplete = () => {
    if (modalState.provider) {
      // Mark as completed
      setSelectedConnectionMethod(prev => ({
        ...prev,
        [modalState.provider!.id]: modalState.connectionType
      }));
      
      // Add to requested callbacks
      setRequestedCallbacks(prev => new Set([...prev, modalState.provider!.id]));
    }
  };

  const handleChangeConnectionMethod = (providerId: string) => {
    // Remove from callback cart if it was there
    setCallbackCartProviders(prev => prev.filter(p => p.id !== providerId));
    
    // Reset connection method
    setSelectedConnectionMethod(prev => ({
      ...prev,
      [providerId]: null
    }));
    
    // Remove from requested callbacks
    setRequestedCallbacks(prev => {
      const newSet = new Set(prev);
      newSet.delete(providerId);
      return newSet;
    });
  };

  // Get user name from location state or localStorage
  const getStoredUserName = (): string => {
    // First check if passed via navigation state
    const stateUserName = (location.state as any)?.userName;
    if (stateUserName) {
      // Store in localStorage for persistence
      localStorage.setItem('careMatchUserName', stateUserName);
      return stateUserName;
    }
    
    // Otherwise check localStorage
    const storedName = localStorage.getItem('careMatchUserName');
    return storedName || 'User';
  };

  const userName = getStoredUserName();
  const newResourcesCount = 3;
  
  // Extract first name only
  const firstName = userName.split(' ')[0];

  // Helper function to get colors based on case type
  const getColorClasses = (caseType: Case["type"]) => {
    switch (caseType) {
      case "Mental Health":
        return {
          bg50: "bg-purple-50",
          bg100: "bg-purple-100",
          bg700: "bg-purple-700",
          border700: "border-purple-700",
          text700: "text-purple-700"
        };
      case "Physical Health":
        return {
          bg50: "bg-green-50",
          bg100: "bg-green-100",
          bg700: "bg-green-700",
          border700: "border-green-700",
          text700: "text-green-700"
        };
      case "Social Services":
        return {
          bg50: "bg-blue-50",
          bg100: "bg-blue-100",
          bg700: "bg-blue-700",
          border700: "border-blue-700",
          text700: "text-blue-700"
        };
    }
  };

  const handleRequestCallback = (providerId: string, category: string) => {
    const provider = savedProviders.find(p => p.id === providerId);
    if (!provider) return;

    // Navigate to callback request flow
    navigate("/callback-request", {
      state: {
        provider: {
          id: provider.id,
          name: provider.name,
          specialty: provider.specialty,
          category: provider.category
        },
        callbackType: category
      }
    });
  };

  const cases: Case[] = [
    {
      id: "1",
      name: userName,
      type: "Mental Health",
      status: "Resources Found",
      statusColor: "bg-purple-100 text-purple-700",
      progress: 75
    },
    {
      id: "2",
      name: userName,
      type: "Physical Health",
      status: "Appointment Scheduled",
      statusColor: "bg-green-100 text-green-700",
      progress: 100
    },
    {
      id: "3",
      name: userName,
      type: "Social Services",
      status: "Finding Resources",
      statusColor: "bg-blue-100 text-blue-700",
      progress: 50
    }
  ];

  const savedProviders: SavedProvider[] = [
    // Mental Health Providers (5)
    {
      id: "1",
      name: "Dr. Sarah Martinez",
      credentials: "PhD, LMFT",
      specialty: ["Anxiety", "Depression", "Trauma & Stress", "PTSD"],
      bio: "Specializing in evidence-based treatments for anxiety and depression with over 15 years of experience.",
      location: "San Francisco, CA",
      rating: 4.9,
      nextAvailable: "March 12, 2026",
      telehealth: true,
      acceptingNew: true,
      category: "Mental Health"
    },
    {
      id: "2",
      name: "Dr. James Thompson",
      credentials: "PsyD",
      specialty: ["Depression", "Bipolar Disorder", "Life Transitions"],
      bio: "Compassionate psychologist helping clients navigate major life changes and mood disorders.",
      location: "Denver, CO",
      rating: 4.8,
      nextAvailable: "March 15, 2026",
      telehealth: true,
      acceptingNew: true,
      category: "Mental Health"
    },
    {
      id: "3",
      name: "Lisa Chen",
      credentials: "LCSW",
      specialty: ["Anxiety", "Family Therapy", "Relationship Issues"],
      bio: "Licensed clinical social worker specializing in family dynamics and relationship counseling.",
      location: "Austin, TX",
      rating: 4.7,
      nextAvailable: "March 18, 2026",
      telehealth: true,
      acceptingNew: true,
      category: "Mental Health"
    },
    {
      id: "4",
      name: "Dr. Michael Rodriguez",
      credentials: "MD, Psychiatrist",
      specialty: ["ADHD", "Anxiety", "Medication Management"],
      bio: "Board-certified psychiatrist with expertise in medication management and ADHD treatment.",
      location: "Seattle, WA",
      rating: 4.9,
      nextAvailable: "March 20, 2026",
      telehealth: true,
      acceptingNew: true,
      category: "Mental Health"
    },
    {
      id: "5",
      name: "Dr. Emily Williams",
      credentials: "PhD, Licensed Psychologist",
      specialty: ["Trauma & Stress", "PTSD", "Grief & Loss"],
      bio: "Trauma-informed therapist specializing in EMDR and cognitive behavioral therapy for PTSD.",
      location: "Portland, OR",
      rating: 4.8,
      nextAvailable: "March 22, 2026",
      telehealth: true,
      acceptingNew: true,
      category: "Mental Health"
    },
    // Physical Health Providers (5)
    {
      id: "6",
      name: "Dr. Robert Johnson",
      credentials: "MD",
      specialty: ["Primary Care"],
      bio: "Family medicine physician providing comprehensive primary care services for all ages.",
      location: "Denver, CO",
      rating: 4.9,
      nextAvailable: "March 14, 2026",
      telehealth: false,
      acceptingNew: true,
      category: "Physical Health"
    },
    {
      id: "7",
      name: "Dr. Maria Garcia",
      credentials: "DDS",
      specialty: ["Dental"],
      bio: "General dentist offering preventive care, restorative procedures, and cosmetic dentistry.",
      location: "Phoenix, AZ",
      rating: 4.8,
      nextAvailable: "March 16, 2026",
      telehealth: false,
      acceptingNew: true,
      category: "Physical Health"
    },
    {
      id: "8",
      name: "Dr. Jennifer Lee",
      credentials: "MD, OB-GYN",
      specialty: ["Maternal"],
      bio: "Board-certified OB-GYN providing comprehensive maternal and women's health services.",
      location: "Los Angeles, CA",
      rating: 4.9,
      nextAvailable: "March 17, 2026",
      telehealth: true,
      acceptingNew: true,
      category: "Physical Health"
    },
    {
      id: "9",
      name: "Dr. David Park",
      credentials: "MD, Pediatrician",
      specialty: ["Pediatrics"],
      bio: "Pediatrician specializing in child health, development, and preventive care for infants through adolescents.",
      location: "San Diego, CA",
      rating: 4.8,
      nextAvailable: "March 19, 2026",
      telehealth: true,
      acceptingNew: true,
      category: "Physical Health"
    },
    {
      id: "10",
      name: "Dr. Amanda Foster",
      credentials: "MD",
      specialty: ["Primary Care"],
      bio: "Primary care physician focused on preventive medicine and chronic disease management.",
      location: "Chicago, IL",
      rating: 4.7,
      nextAvailable: "March 21, 2026",
      telehealth: true,
      acceptingNew: true,
      category: "Physical Health"
    },
    // Social Services (3)
    {
      id: "11",
      name: "Community Food Bank",
      credentials: "N/A",
      specialty: ["Food Assistance"],
      bio: "Providing emergency food assistance and nutrition programs to families in need.",
      location: "Denver, CO",
      rating: 4.7,
      nextAvailable: "Walk-in available",
      telehealth: false,
      acceptingNew: true,
      category: "Social Services"
    },
    {
      id: "12",
      name: "Housing Support Services",
      credentials: "N/A",
      specialty: ["Housing Assistance"],
      bio: "Helping individuals and families find stable housing and rental assistance programs.",
      location: "Seattle, WA",
      rating: 4.6,
      nextAvailable: "March 15, 2026",
      telehealth: true,
      acceptingNew: true,
      category: "Social Services"
    },
    {
      id: "13",
      name: "Transportation Access Network",
      credentials: "N/A",
      specialty: ["Transportation"],
      bio: "Free and low-cost transportation services for medical appointments and essential errands.",
      location: "Portland, OR",
      rating: 4.8,
      nextAvailable: "Call for scheduling",
      telehealth: false,
      acceptingNew: true,
      category: "Social Services"
    }
  ];

  const upcomingEvents: Event[] = [
    {
      id: "1",
      month: "OCT",
      day: "10",
      title: "Call with Gabriella",
      time: "2:00 PM"
    },
    {
      id: "2",
      month: "OCT",
      day: "12",
      title: "Appointment at Fusion Health",
      time: "6:30 PM"
    }
  ];

  const careCoordinator = {
    name: "Gabriella Perkins",
    role: "Care Coordinator",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  };

  // Filter providers based on search criteria
  const filteredProviders = mockProviders.filter(provider => {
    // Filter by search type
    if (searchType !== "all") {
      const typeMap = {
        "mental-health": "Mental Health",
        "physical-health": "Physical Health",
        "social-services": "Social Service"
      };
      if (provider.providerType !== typeMap[searchType]) return false;
    }

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const matchesName = provider.name.toLowerCase().includes(searchLower);
      const matchesSpecialty = provider.specialty.some(s => s.toLowerCase().includes(searchLower));
      if (!matchesName && !matchesSpecialty) return false;
    }

    // Filter by location
    if (locationSearch) {
      if (!provider.location.toLowerCase().includes(locationSearch.toLowerCase())) return false;
    }

    // Filter by specialties
    if (selectedSpecialties.length > 0) {
      if (!selectedSpecialties.some(spec => provider.specialty.includes(spec))) return false;
    }

    // Filter by telehealth
    if (telehealthOnly && !provider.telehealth) return false;

    // Filter by accepting new patients
    if (acceptingNewOnly && !provider.acceptingNewPatients) return false;

    return true;
  });

  const handleStartSearch = (type: "all" | "mental-health" | "physical-health" | "social-services") => {
    setSearchType(type);
    setShowProviderSearch(true);
  };

  const handleBackToResources = () => {
    setShowProviderSearch(false);
    setSearchTerm("");
    setLocationSearch("");
    setSelectedSpecialties([]);
    setTelehealthOnly(false);
    setAcceptingNewOnly(false);
  };

  const handleViewCase = (caseItem: Case) => {
    setSelectedCase(caseItem);
  };

  const handleBackToCases = () => {
    setSelectedCase(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Desktop Sidebar Navigation - Hidden on mobile */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white border-r border-gray-200">
        {/* Logo */}
        <div className="px-6 py-5 border-b border-gray-200">
          <img src={logoImage} alt="Care Solace" className="h-8" />
        </div>
        
        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          <button
            onClick={() => setActiveTab("cases")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "cases" 
                ? "bg-purple-50 text-purple-700 font-semibold" 
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <FileText className="h-5 w-5" />
            <span>My Cases</span>
            {pendingCallbackRequests.length > 0 && (
              <span className="ml-auto bg-purple-700 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {pendingCallbackRequests.length}
              </span>
            )}
          </button>
          
          <button
            onClick={() => {
              setActiveTab("resources");
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "resources" 
                ? "bg-purple-50 text-purple-700 font-semibold" 
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Heart className="h-5 w-5" />
            <span>Find Resources</span>
          </button>
          
          <button
            onClick={() => setActiveTab("account")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "account" 
                ? "bg-purple-50 text-purple-700 font-semibold" 
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <User className="h-5 w-5" />
            <span>My Account</span>
          </button>
        </nav>
        
        {/* Help Button at Bottom */}
        <div className="p-4 border-t border-gray-200">
          <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white rounded-lg">
            Need Help?
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64">
        {/* Mobile Header - Hidden on desktop */}
        <div className="lg:hidden bg-white border-b border-gray-200 px-5 py-4">
          <div className="flex items-center justify-between max-w-lg mx-auto">
            <div className="flex items-center gap-2">
              <img src={logoImage} alt="Care Solace" className="h-6 md:h-8" />
            </div>
            <Button 
              size="sm" 
              className="bg-purple-700 hover:bg-purple-800 text-white rounded-full px-4"
            >
              Need Help?
            </Button>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, {firstName}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <div className="flex items-center gap-4">
              {pendingCallbackRequests.length > 0 && (
                null
              )}
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">{userName}</p>
                  <p className="text-xs text-gray-500">Patient</p>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-purple-700" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid: Main + Sidebar */}
        <div className="lg:flex lg:gap-6 lg:p-8">
          {/* Main Content Column */}
          <div className="flex-1 px-5 py-6 lg:px-0 lg:py-0 pb-24 lg:pb-0">
            {/* Mobile Welcome - Hidden on desktop */}
            <div className="lg:hidden mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {firstName}
              </h1>
            </div>

            {/* CASES TAB */}
            {activeTab === "cases" && (
              <>
                {!selectedCase ? (
                  // Main Cases View
                  <>
                    {/* Success Banner - shows after completing callback request */}
                    {showSuccessBanner && pendingCallbackRequests.length > 0 && (
                  <div className="mb-4 bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-700 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-green-900 mb-1">
                        Callback request submitted successfully!
                      </h3>
                      <p className="text-sm text-green-700">
                        Your request for {pendingCallbackRequests.length} provider{pendingCallbackRequests.length !== 1 ? 's' : ''} has been received. 
                        You'll receive a call within 24-48 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => setShowSuccessBanner(false)}
                      className="flex-shrink-0 text-green-700 hover:text-green-900 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}

                {/* Pending Callbacks Stats Card */}
                {pendingCallbackRequests.length > 0 && (
                  <Card className="mb-4 border-purple-200 bg-purple-50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center">
                            <PhoneCall className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-bold text-purple-900">Callback Requests Submitted</h3>
                            <p className="text-sm text-purple-700">
                              {pendingCallbackRequests.length} provider{pendingCallbackRequests.length !== 1 ? 's' : ''} will contact you
                            </p>
                          </div>
                        </div>
                        <div className="bg-purple-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                          {pendingCallbackRequests.length}
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-purple-200">
                        <h4 className="text-xs font-semibold text-purple-900 uppercase mb-2">Providers Who Will Call You:</h4>
                        <div className="space-y-3">
                          {pendingCallbackRequests.map((provider) => {
                            const fullProvider = savedProviders.find(p => p.id === provider.id);
                            if (!fullProvider) return null;
                            
                            const isExpanded = expandedCallbackCard === provider.id;
                            
                            return (
                              <div 
                                key={provider.id} 
                                className="bg-white rounded-lg p-4 border border-purple-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                                onClick={() => setExpandedCallbackCard(isExpanded ? null : provider.id)}
                              >
                                <div className="flex items-start gap-3">
                                  {/* Provider Avatar */}
                                  <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                                      <span className="text-sm font-bold text-purple-700">
                                        {fullProvider.name.split(' ').map(n => n[0]).join('')}
                                      </span>
                                    </div>
                                  </div>
                                  
                                  {/* Provider Info */}
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                      <div className="flex-1">
                                        <h4 className="text-sm font-bold text-gray-900">{fullProvider.name}</h4>
                                        <p className="text-xs text-gray-600">
                                          {fullProvider.category === "Social Services" ? fullProvider.specialty.join(', ') : fullProvider.credentials}
                                        </p>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        {provider.category === "Mental Health" ? (
                                          <div className="flex items-center gap-1 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full whitespace-nowrap">
                                            <PhoneCall className="h-3 w-3" />
                                            <span>Provider calls</span>
                                          </div>
                                        ) : (
                                          <div className="flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full whitespace-nowrap">
                                            <UserCheck className="h-3 w-3" />
                                            <span>CC helps</span>
                                          </div>
                                        )}
                                        <ChevronDown 
                                          className={`h-4 w-4 text-purple-700 transition-transform duration-200 flex-shrink-0 ${
                                            isExpanded ? 'rotate-180' : ''
                                          }`}
                                        />
                                      </div>
                                    </div>
                                    
                                    {/* Expanded Details */}
                                    {isExpanded && (
                                      <>
                                        {/* Specialty Tags */}
                                        {fullProvider.category !== "Social Services" && (
                                          <div className="flex flex-wrap gap-1 mb-2 mt-2">
                                            {fullProvider.specialty.slice(0, 2).map(spec => (
                                              <span key={spec} className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">
                                                {spec}
                                              </span>
                                            ))}
                                            {fullProvider.specialty.length > 2 && (
                                              <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">
                                                +{fullProvider.specialty.length - 2}
                                              </span>
                                            )}
                                          </div>
                                        )}
                                        
                                        {/* Provider Details */}
                                        <div className={`space-y-1.5 text-xs ${fullProvider.category !== "Social Services" ? "" : "mt-2"}`}>
                                          <div className="flex items-center gap-1.5 text-gray-600">
                                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                                            <span className="font-semibold text-gray-900">{fullProvider.rating}</span>
                                            <span className="text-gray-400">•</span>
                                            <MapPin className="h-3 w-3 flex-shrink-0" />
                                            <span className="truncate">{fullProvider.location}</span>
                                          </div>
                                          <div className="flex items-center gap-1.5 text-gray-600">
                                            <Calendar className="h-3 w-3 flex-shrink-0" />
                                            <span>Next available: {fullProvider.nextAvailable}</span>
                                          </div>
                                          {fullProvider.telehealth && (
                                            <div className="flex items-center gap-1.5 text-purple-600">
                                              <Video className="h-3 w-3 flex-shrink-0" />
                                              <span className="font-medium">Telehealth available</span>
                                            </div>
                                          )}
                                        </div>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-3 flex items-center gap-2 text-xs text-purple-700 bg-purple-100 p-2 rounded-lg">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">Expected response: Within 24-48 hours</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {/* Clear Instructions */}
                {pendingCallbackRequests.length === 0 && savedProviders.length > 0 && (
                  <div className="bg-purple-50 border-l-4 border-purple-700 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold text-purple-900 mb-2">Next Steps:</h3>
                    <ol className="space-y-1 text-sm text-purple-800">
                      <li>1. Click on a provider below to see details and connection options</li>
                      <li>2. Choose how you'd like to connect - call yourself, have them call you, or get help from your Care Companion</li>
                      <li>3. For callback requests, providers will be added to your cart and you can proceed when ready</li>
                    </ol>
                  </div>
                )}

                {/* Saved Providers Section */}
                {pendingCallbackRequests.length === 0 && savedProviders.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Your Saved Providers</h3>
                    <GroupedProviders
                      providers={savedProviders}
                      expandedProvider={expandedProvider}
                      selectedConnectionMethod={selectedConnectionMethod}
                      pendingCallbackProviders={callbackCartProviders}
                      onToggleExpand={(providerId) => {
                        setExpandedProvider(expandedProvider === providerId ? null : providerId);
                      }}
                      onConnectionMethodSelect={handleConnectionMethodSelect}
                      onChangeConnectionMethod={(providerId) => {
                        setSelectedConnectionMethod(prev => ({
                          ...prev,
                          [providerId]: null
                        }));
                        setCallbackCartProviders(prev => prev.filter(p => p.id !== providerId));
                      }}
                    />
                  </div>
                )}
                
                {/* Empty State - when there are no saved providers */}
                {pendingCallbackRequests.length === 0 && savedProviders.length === 0 && (
                  <div className="bg-purple-50 border-l-4 border-purple-700 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold text-purple-900 mb-2">Get Started:</h3>
                    <p className="text-sm text-purple-800 mb-3">
                      You don't have any saved providers yet. Start by browsing our provider network.
                    </p>
                    <Button 
                      onClick={() => setActiveTab("resources")}
                      className="bg-purple-700 hover:bg-purple-800 text-white"
                    >
                      Find Providers
                    </Button>
                  </div>
                )}

                {/* My Cases Section */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">My Cases</h2>
                  
                  {/* DEBUG: Show current state */}
                  
                  
                  {/* Info Banner */}
                  {showBanner && (
                    <div className="mb-4 bg-pink-50 border border-pink-200 rounded-xl p-4 flex items-start gap-3">
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">
                          Browse providers and connect to them directly at your own pace
                        </p>
                      </div>
                      <button
                        onClick={handleDismissBanner}
                        className="flex-shrink-0 text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    {/* Case Timeline Cards */}
                    {cases.map((caseItem) => {
                      const colors = getColorClasses(caseItem.type);
                      return (
                        <div 
                          key={caseItem.id}
                          className="bg-white border border-gray-200 rounded-2xl p-5 cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => {
                            console.log("Viewing case details:", caseItem);
                            handleViewCase(caseItem);
                          }}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`${caseItem.statusColor} text-xs font-medium px-3 py-1 rounded-full`}>
                                  {caseItem.status}
                                </span>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                {caseItem.name}
                              </h3>
                              <p className={`text-base ${colors.text700} font-semibold`}>
                                {caseItem.type}
                              </p>
                            </div>
                            <ChevronRight className={`h-6 w-6 ${colors.text700} flex-shrink-0`} />
                          </div>

                          {/* Timeline */}
                          <div className="mt-6">
                            <div className="flex items-center justify-between relative px-2">
                              {/* Step 1: Resources Found */}
                              <div className="flex flex-col items-center flex-1 relative">
                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center z-10 bg-white ${
                                  caseItem.progress >= 25 
                                    ? `${colors.border700}` 
                                    : "border-gray-300"
                                }`}>
                                  <Bookmark className={`h-5 w-5 md:h-6 md:w-6 ${
                                    caseItem.progress >= 25 
                                      ? colors.text700
                                      : "text-gray-400"
                                  }`} />
                                </div>
                                {/* Connector Line */}
                                {caseItem.progress >= 25 && (
                                  <div className={`absolute top-6 left-1/2 w-full h-0.5 ${colors.bg700}`} style={{ marginLeft: '24px' }} />
                                )}
                                {caseItem.progress < 25 && (
                                  <div className="absolute top-6 left-1/2 w-full h-0.5 bg-gray-300" style={{ marginLeft: '24px' }} />
                                )}
                              </div>

                              {/* Step 2: Search/Review */}
                              <div className="flex flex-col items-center flex-1 relative">
                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center z-10 bg-white ${
                                  caseItem.progress >= 50 
                                    ? `${colors.border700}` 
                                    : "border-gray-300"
                                }`}>
                                  <Search className={`h-5 w-5 md:h-6 md:w-6 ${
                                    caseItem.progress >= 50 
                                      ? colors.text700
                                      : "text-gray-400"
                                  }`} />
                                </div>
                                {/* Connector Line */}
                                {caseItem.progress >= 50 && (
                                  <div className={`absolute top-6 left-1/2 w-full h-0.5 ${colors.bg700}`} style={{ marginLeft: '24px' }} />
                                )}
                                {caseItem.progress < 50 && (
                                  <div className="absolute top-6 left-1/2 w-full h-0.5 bg-gray-300" style={{ marginLeft: '24px' }} />
                                )}
                              </div>

                              {/* Step 3: Schedule Appointment (Current) */}
                              <div className="flex flex-col items-center flex-1 relative">
                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center z-10 ${
                                  caseItem.progress >= 75 
                                    ? `${colors.bg700}` 
                                    : "bg-gray-300"
                                }`}>
                                  <Calendar className={`h-5 w-5 md:h-6 md:w-6 ${
                                    caseItem.progress >= 75 
                                      ? "text-white"
                                      : "text-gray-400"
                                  }`} />
                                </div>
                                {/* Connector Line */}
                                {caseItem.progress >= 75 && (
                                  <div className={`absolute top-6 left-1/2 w-full h-0.5 ${colors.bg700}`} style={{ marginLeft: '24px' }} />
                                )}
                                {caseItem.progress < 75 && (
                                  <div className="absolute top-6 left-1/2 w-full h-0.5 bg-gray-300" style={{ marginLeft: '24px' }} />
                                )}
                              </div>

                              {/* Step 4: Complete */}
                              <div className="flex flex-col items-center flex-1 relative">
                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center z-10 ${
                                  caseItem.progress >= 100 
                                    ? "bg-gray-400" 
                                    : "bg-gray-200"
                                }`}>
                                  <Heart className={`h-5 w-5 md:h-6 md:w-6 ${
                                    caseItem.progress >= 100 
                                      ? "text-white"
                                      : "text-gray-400"
                                  }`} />
                                </div>
                              </div>
                            </div>
                            
                            {/* Progress Description */}
                            <p className={`text-center text-sm md:text-base ${colors.text700} font-medium mt-6`}>
                              {caseItem.status === "Resources Found" 
                                ? "Review Resources to Schedule Appointment"
                                : caseItem.status === "Appointment Scheduled"
                                  ? "Appointment confirmed!"
                                  : "Finding Resources"
                              }
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Upcoming Events Section - Hidden in initial view */}
                {/* <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div 
                        key={event.id}
                        className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="bg-purple-100 rounded-lg w-16 h-16 flex flex-col items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium text-purple-700">{event.month}</span>
                          <span className="text-3xl font-bold text-purple-700 leading-none">{event.day}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                          <p className="text-gray-600">{event.time}</p>
                        </div>
                      </div>
                    ))}

                    <div className="bg-purple-700 text-white rounded-2xl p-5 flex items-start gap-4 cursor-pointer hover:bg-purple-800 transition-colors">
                      <div className="bg-purple-200 rounded-lg w-16 h-16 flex items-center justify-center flex-shrink-0">
                        <Plus className="h-8 w-8 text-purple-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1">Add Booked Appointment</h3>
                        <p className="text-sm text-purple-100">
                          If you already booked an appointment add it here to keep track of it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Your Care Companion Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-xl font-bold text-gray-900">Your Care Companion</h2>
                    <div className="group relative">
                      <Info className="h-5 w-5 text-purple-600 cursor-help" />
                      <div className="hidden group-hover:block absolute z-10 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-lg -left-28 top-6">
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                        Chat with a real human Care Companion who can help you find providers and schedule appointments
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-purple-700 mb-4 flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Real human support available
                  </p>
                  <div className="bg-white border border-gray-200 rounded-2xl p-5">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={careCoordinator.image}
                        alt={careCoordinator.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{careCoordinator.name}</h3>
                        <p className="text-gray-600">{careCoordinator.role}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Button className="bg-purple-700 hover:bg-purple-800 text-white rounded-full">
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </Button>
                      <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50 rounded-full">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
                  </>
                ) : (
                  // Case Detail View
                  <>
                    {/* Back Button */}
                    <div className="mb-6">
                      <Button 
                        variant="ghost" 
                        onClick={handleBackToCases}
                        className="mb-4 -ml-2 text-gray-700 hover:text-purple-700"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to My Cases
                      </Button>
                      
                      {/* Case Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className={`${selectedCase.statusColor} text-xs font-medium px-3 py-1 rounded-full inline-block mb-3`}>
                            {selectedCase.status}
                          </span>
                          <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {selectedCase.name}
                          </h1>
                          <p className={`text-xl font-semibold ${
                            selectedCase.type === "Mental Health" ? "text-purple-700" :
                            selectedCase.type === "Physical Health" ? "text-green-700" :
                            "text-blue-700"
                          }`}>
                            {selectedCase.type}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Case Timeline */}
                    <Card className="mb-6">
                      <CardContent className="p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Your Journey</h2>
                        
                        {/* Timeline Steps */}
                        <div className="space-y-8">
                          {/* Step 1: Resources Found */}
                          <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                selectedCase.progress >= 25 
                                  ? selectedCase.type === "Mental Health" ? "bg-purple-700" :
                                    selectedCase.type === "Physical Health" ? "bg-green-700" :
                                    "bg-blue-700"
                                  : "bg-gray-300"
                              }`}>
                                <Bookmark className="h-6 w-6 text-white" />
                              </div>
                              {selectedCase.progress > 25 && (
                                <div className={`w-0.5 h-16 ${
                                  selectedCase.type === "Mental Health" ? "bg-purple-700" :
                                  selectedCase.type === "Physical Health" ? "bg-green-700" :
                                  "bg-blue-700"
                                }`} />
                              )}
                            </div>
                            <div className="flex-1 pb-8">
                              <p className="text-sm text-gray-500 mb-1">October 22, 2024</p>
                              <h3 className="text-lg font-bold text-gray-900 mb-2">Resources Found</h3>
                              <p className="text-gray-600">
                                We've identified {selectedCase.type.toLowerCase()} providers that match your needs and preferences.
                              </p>
                            </div>
                          </div>

                          {/* Step 2: Review Providers */}
                          <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                selectedCase.progress >= 50 
                                  ? selectedCase.type === "Mental Health" ? "bg-purple-700" :
                                    selectedCase.type === "Physical Health" ? "bg-green-700" :
                                    "bg-blue-700"
                                  : "bg-gray-300"
                              }`}>
                                <Search className="h-6 w-6 text-white" />
                              </div>
                              {selectedCase.progress > 50 && (
                                <div className={`w-0.5 h-16 ${
                                  selectedCase.type === "Mental Health" ? "bg-purple-700" :
                                  selectedCase.type === "Physical Health" ? "bg-green-700" :
                                  "bg-blue-700"
                                }`} />
                              )}
                            </div>
                            <div className="flex-1 pb-8">
                              <p className="text-sm text-gray-500 mb-1">
                                {selectedCase.progress >= 50 ? "October 23, 2024" : "Next step"}
                              </p>
                              <h3 className="text-lg font-bold text-gray-900 mb-2">Review & Select Providers</h3>
                              <p className="text-gray-600">
                                Browse through your personalized provider matches and select the ones you'd like to connect with.
                              </p>
                            </div>
                          </div>

                          {/* Step 3: Schedule Appointment */}
                          <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                selectedCase.progress >= 75 
                                  ? selectedCase.type === "Mental Health" ? "bg-purple-700" :
                                    selectedCase.type === "Physical Health" ? "bg-green-700" :
                                    "bg-blue-700"
                                  : "bg-gray-300"
                              }`}>
                                <Calendar className="h-6 w-6 text-white" />
                              </div>
                              {selectedCase.progress > 75 && (
                                <div className={`w-0.5 h-16 ${
                                  selectedCase.type === "Mental Health" ? "bg-purple-700" :
                                  selectedCase.type === "Physical Health" ? "bg-green-700" :
                                  "bg-blue-700"
                                }`} />
                              )}
                            </div>
                            <div className="flex-1 pb-8">
                              <p className="text-sm text-gray-500 mb-1">
                                {selectedCase.progress >= 75 ? "October 25, 2024" : "Coming soon"}
                              </p>
                              <h3 className="text-lg font-bold text-gray-900 mb-2">Schedule Appointment</h3>
                              <p className="text-gray-600">
                                {selectedCase.progress >= 75 
                                  ? "Your appointment has been scheduled. You'll receive a confirmation email with all the details."
                                  : "Once you select a provider, you can schedule your first appointment."}
                              </p>
                            </div>
                          </div>

                          {/* Step 4: Complete */}
                          <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                selectedCase.progress >= 100 
                                  ? selectedCase.type === "Mental Health" ? "bg-purple-700" :
                                    selectedCase.type === "Physical Health" ? "bg-green-700" :
                                    "bg-blue-700"
                                  : "bg-gray-300"
                              }`}>
                                <Heart className="h-6 w-6 text-white" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-500 mb-1">
                                {selectedCase.progress >= 100 ? "Completed" : "Final step"}
                              </p>
                              <h3 className="text-lg font-bold text-gray-900 mb-2">Connection Complete</h3>
                              <p className="text-gray-600">
                                {selectedCase.progress >= 100 
                                  ? "You're all set! We'll continue to support you throughout your care journey."
                                  : "Your journey to better health starts here. We're here to help every step of the way."}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Next Steps Card */}
                    <Card className={`border-2 ${
                      selectedCase.type === "Mental Health" ? "border-purple-200 bg-purple-50" :
                      selectedCase.type === "Physical Health" ? "border-green-200 bg-green-50" :
                      "border-blue-200 bg-blue-50"
                    }`}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">What's Next?</h3>
                        {selectedCase.progress < 75 ? (
                          <div>
                            <p className="text-gray-700 mb-4">
                              Review your saved providers and choose how you'd like to connect with them.
                            </p>
                            <Button 
                              onClick={() => {
                                handleBackToCases();
                                // Scroll to saved providers section would go here
                              }}
                              className={`${
                                selectedCase.type === "Mental Health" ? "bg-purple-700 hover:bg-purple-800" :
                                selectedCase.type === "Physical Health" ? "bg-green-700 hover:bg-green-800" :
                                "bg-blue-700 hover:bg-blue-800"
                              } text-white`}
                            >
                              View Saved Providers
                            </Button>
                          </div>
                        ) : (
                          <div>
                            <p className="text-gray-700">
                              Your appointment is confirmed! Check your email for appointment details and any preparation instructions.
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </>
                )}
              </>
            )}

            {/* RESOURCES TAB */}
            {activeTab === "resources" && (
              <>
                {!showProviderSearch ? (
                  // Main Resources View
                  <>
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Resources</h2>
                      <p className="text-gray-600">Search for mental health, physical health, and social service providers</p>
                    </div>

                    {/* Quick Search Categories */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <button
                        onClick={() => handleStartSearch("mental-health")}
                        className="bg-purple-700 hover:bg-purple-800 text-white rounded-2xl p-6 text-left transition-all transform hover:scale-105"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <Heart className="h-8 w-8" />
                          <ChevronRight className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-1">Mental Health</h3>
                        <p className="text-sm text-purple-100">Therapists, psychiatrists, counselors</p>
                      </button>

                      <button
                        onClick={() => handleStartSearch("physical-health")}
                        className="bg-green-700 hover:bg-green-800 text-white rounded-2xl p-6 text-left transition-all transform hover:scale-105"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <User className="h-8 w-8" />
                          <ChevronRight className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-1">Physical Health</h3>
                        <p className="text-sm text-green-100">Primary care, dental, maternal, pediatrics</p>
                      </button>

                      <button
                        onClick={() => handleStartSearch("social-services")}
                        className="bg-blue-700 hover:bg-blue-800 text-white rounded-2xl p-6 text-left transition-all transform hover:scale-105"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <Heart className="h-8 w-8" />
                          <ChevronRight className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-1">Social Services</h3>
                        <p className="text-sm text-blue-100">Housing, food, transportation, employment</p>
                      </button>
                    </div>

                    {/* Search All Providers */}
                    <Card className="mb-6">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Search All Providers</h3>
                        <Button 
                          onClick={() => handleStartSearch("all")}
                          className="w-full bg-purple-700 hover:bg-purple-800 text-white rounded-lg h-12 text-base font-semibold"
                        >
                          <Search className="h-5 w-5 mr-2" />
                          Open Advanced Search
                        </Button>
                        <p className="text-sm text-gray-600 mt-3 text-center">
                          Filter by specialty, location, insurance, and more
                        </p>
                      </CardContent>
                    </Card>

                    {/* Recent Searches or Saved Providers */}
                    {savedProviders.length > 0 && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Your Saved Providers</h3>
                        <div className="space-y-3">
                          {savedProviders.slice(0, 5).map((provider) => (
                            <div 
                              key={provider.id}
                              className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                              onClick={() => {
                                setSearchTerm(provider.name);
                                handleStartSearch("all");
                              }}
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                  <span className="text-sm font-bold text-purple-700">
                                    {provider.name.split(' ').map(n => n[0]).join('')}
                                  </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-bold text-gray-900">{provider.name}</h4>
                                  <p className="text-sm text-gray-600">
                                    {provider.category === "Social Services" ? provider.specialty.join(', ') : provider.credentials}
                                  </p>
                                  <div className="flex items-center gap-2 mt-2 text-xs">
                                    <div className="flex items-center gap-1 text-gray-600">
                                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                      <span>{provider.rating}</span>
                                    </div>
                                    <span className="text-gray-400">•</span>
                                    <span className="text-gray-600">{provider.location}</span>
                                    {provider.telehealth && (
                                      <>
                                        <span className="text-gray-400">•</span>
                                        <span className="text-purple-600 font-medium">Telehealth</span>
                                      </>
                                    )}
                                  </div>
                                </div>
                                <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  // Provider Search View (Embedded)
                  <>
                    {/* Search Header with Back Button */}
                    <div className="mb-6">
                      <Button 
                        variant="ghost" 
                        onClick={handleBackToResources}
                        className="mb-4 -ml-2 text-gray-700 hover:text-purple-700"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Resources
                      </Button>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {searchType === "all" ? "All Providers" : 
                         searchType === "mental-health" ? "Mental Health Providers" :
                         searchType === "physical-health" ? "Physical Health Providers" :
                         "Social Services"}
                      </h2>
                      <p className="text-gray-600">{filteredProviders.length} providers found</p>
                    </div>

                    {/* Search Filters */}
                    <Card className="mb-6">
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          {/* Search Inputs */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <Input 
                                placeholder="Search by name or specialty..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full"
                              />
                            </div>
                            <div>
                              <Input 
                                placeholder="Location (city, state, or zip)"
                                value={locationSearch}
                                onChange={(e) => setLocationSearch(e.target.value)}
                                className="w-full"
                              />
                            </div>
                          </div>

                          {/* Filter Toggles */}
                          <div className="flex flex-wrap gap-3">
                            <Button
                              variant={telehealthOnly ? "default" : "outline"}
                              onClick={() => setTelehealthOnly(!telehealthOnly)}
                              className={telehealthOnly ? "bg-purple-700 hover:bg-purple-800" : ""}
                            >
                              <Video className="h-4 w-4 mr-2" />
                              Telehealth Only
                            </Button>
                            <Button
                              variant={acceptingNewOnly ? "default" : "outline"}
                              onClick={() => setAcceptingNewOnly(!acceptingNewOnly)}
                              className={acceptingNewOnly ? "bg-purple-700 hover:bg-purple-800" : ""}
                            >
                              <UserCheck className="h-4 w-4 mr-2" />
                              Accepting New Patients
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => setShowFilters(!showFilters)}
                            >
                              <Filter className="h-4 w-4 mr-2" />
                              More Filters
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Provider Results */}
                    <div className="space-y-4">
                      {filteredProviders.length === 0 ? (
                        <Card>
                          <CardContent className="p-12 text-center">
                            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">No providers found</h3>
                            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
                          </CardContent>
                        </Card>
                      ) : (
                        filteredProviders.map((provider) => (
                          <Card key={provider.id} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex flex-col lg:flex-row gap-4">
                                {/* Provider Avatar */}
                                <div className="flex-shrink-0">
                                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                                    <span className="text-xl font-bold text-purple-700">
                                      {provider.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                  </div>
                                </div>

                                {/* Provider Info */}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-start justify-between gap-4 mb-3">
                                    <div className="flex-1">
                                      <h3 className="text-xl font-bold text-gray-900 mb-1">{provider.name}</h3>
                                      <p className="text-sm text-gray-600 mb-2">{provider.credentials}</p>
                                      <div className="flex flex-wrap gap-2">
                                        {provider.specialty.slice(0, 3).map(spec => (
                                          <Badge key={spec} variant="secondary" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                                            {spec}
                                          </Badge>
                                        ))}
                                        {provider.specialty.length > 3 && (
                                          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                                            +{provider.specialty.length - 3} more
                                          </Badge>
                                        )}
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm font-semibold">
                                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                      <span>{provider.rating}</span>
                                    </div>
                                  </div>

                                  {/* Provider Details */}
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 text-sm">
                                    <div className="flex items-center gap-2 text-gray-600">
                                      <MapPin className="h-4 w-4 flex-shrink-0" />
                                      <span>{provider.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                      <Calendar className="h-4 w-4 flex-shrink-0" />
                                      <span>Next available: {provider.nextAvailable}</span>
                                    </div>
                                    {provider.telehealth && (
                                      <div className="flex items-center gap-2 text-purple-600 font-medium">
                                        <Video className="h-4 w-4 flex-shrink-0" />
                                        <span>Telehealth available</span>
                                      </div>
                                    )}
                                    {provider.acceptingNewPatients && (
                                      <div className="flex items-center gap-2 text-green-600 font-medium">
                                        <UserCheck className="h-4 w-4 flex-shrink-0" />
                                        <span>Accepting new patients</span>
                                      </div>
                                    )}
                                  </div>

                                  {/* Actions */}
                                  <div className="flex flex-wrap gap-3">
                                    <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                                      <PhoneCall className="h-4 w-4 mr-2" />
                                      Request Callback
                                    </Button>
                                    <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
                                      <Bookmark className="h-4 w-4 mr-2" />
                                      Save Provider
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))
                      )}
                    </div>
                  </>
                )}
              </>
            )}

            {/* ACCOUNT TAB */}
            {activeTab === "account" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-600">Account settings coming soon...</p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Sidebar Column - Hidden on mobile */}
          <div className="hidden lg:block w-80 space-y-6">
            {/* Care Companion Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-gray-900">Your Care Companion</h3>
                  <div className="group relative">
                    <Info className="h-5 w-5 text-purple-600 cursor-help" />
                    <div className="hidden group-hover:block absolute z-10 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-lg -left-28 top-6">
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                      Chat with a real human Care Companion who can help you find providers and schedule appointments
                    </div>
                  </div>
                </div>
                <p className="text-sm text-purple-700 mb-4 flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Real human support available
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={careCoordinator.image}
                    alt={careCoordinator.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{careCoordinator.name}</h4>
                    <p className="text-sm text-gray-600">{careCoordinator.role}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button className="bg-purple-700 hover:bg-purple-800 text-white rounded-lg">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-purple-700 text-purple-700 hover:bg-purple-50 rounded-lg"
                    onClick={openChat}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe">
        <div className="max-w-lg mx-auto flex items-center justify-around px-5 py-3">
          <button
            onClick={() => setActiveTab("cases")}
            className={`flex flex-col items-center gap-1 ${
              activeTab === "cases" ? "text-purple-700" : "text-gray-500"
            }`}
          >
            <FileText className="h-6 w-6" />
            <span className="text-xs font-medium">My Cases</span>
            {activeTab === "cases" && (
              <div className="w-12 h-1 bg-purple-700 rounded-full mt-1" />
            )}
          </button>
          <button
            onClick={() => {
              setActiveTab("resources");
            }}
            className={`flex flex-col items-center gap-1 ${
              activeTab === "resources" ? "text-purple-700" : "text-gray-500"
            }`}
          >
            <Heart className="h-6 w-6" />
            <span className="text-xs font-medium">Resources</span>
            {activeTab === "resources" && (
              <div className="w-12 h-1 bg-purple-700 rounded-full mt-1" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("account")}
            className={`flex flex-col items-center gap-1 ${
              activeTab === "account" ? "text-purple-700" : "text-gray-500"
            }`}
          >
            <div className="w-6 h-6 bg-gray-300 rounded-full" />
            <span className="text-xs font-medium">Account</span>
            {activeTab === "account" && (
              <div className="w-12 h-1 bg-purple-700 rounded-full mt-1" />
            )}
          </button>
        </div>
      </div>

      {/* Connection Modal */}
      <ConnectionModal
        isOpen={modalState.isOpen}
        provider={modalState.provider}
        connectionType={modalState.connectionType}
        onClose={handleModalClose}
        onComplete={handleModalComplete}
      />

      {/* Floating Callback Cart */}
      <FloatingCallbackCart
        providers={callbackCartProviders}
        onRemove={handleRemoveFromCart}
        onProceed={handleProceedToCallback}
        onClose={handleCloseCart}
      />
    </div>
  );
}