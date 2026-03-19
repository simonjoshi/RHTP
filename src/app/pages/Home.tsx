import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { Search, MapPin, Users, Home as HomeIcon, Utensils, Bus, Briefcase, GraduationCap, Shield, MessageCircle, Phone, ChevronDown, ChevronUp, Shirt, Baby, Building2, Loader2, Navigation, Sparkles, Heart, UserCheck, TrendingUp, Clock, Network, Mic, Activity, Scale, Sofa, BookOpen, HeartHandshake, Info } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import logoImage from "figma:asset/402617bbcf95896cb7bccd79e2ebca2544a06ac1.png";
import heroBackground from "figma:asset/ab40fdb7f66b9fc56ec11bba6643c040ad1b753e.png";
import { projectId, publicAnonKey } from "/utils/supabase/info";

// Declare Genesys type for TypeScript
declare global {
  interface Window {
    Genesys: any;
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const categories = [
  { icon: Users, label: "Mental Health", color: "bg-purple-100 text-purple-600" },
  { icon: HomeIcon, label: "Physical Health", color: "bg-purple-100 text-purple-600" },
  { icon: Utensils, label: "Food", color: "bg-purple-100 text-purple-600" },
  { icon: HomeIcon, label: "Housing", color: "bg-purple-100 text-purple-600" },
  { icon: Baby, label: "Child Care", color: "bg-purple-100 text-purple-600" },
  { icon: Bus, label: "Transportation", color: "bg-purple-100 text-purple-600" },
  { icon: Scale, label: "Legal", color: "bg-purple-100 text-purple-600" },
  { icon: Shirt, label: "Clothing", color: "bg-purple-100 text-purple-600" },
  { icon: Sofa, label: "Furniture", color: "bg-purple-100 text-purple-600" },
  { icon: BookOpen, label: "School Supplies", color: "bg-purple-100 text-purple-600" },
  { icon: HeartHandshake, label: "Adult Day Care", color: "bg-purple-100 text-purple-600" },
];

// Search suggestions with keywords
const searchSuggestions = [
  { text: "Mental Health Therapist", category: "Mental Health", keywords: ["therapist", "therapy", "counseling", "mental", "psychologist", "psychiatrist"] },
  { text: "Primary Care Doctor", category: "Physical Health", keywords: ["doctor", "primary care", "physician", "physical health", "medical", "general practice"] },
  { text: "Physical Health Specialist", category: "Physical Health", keywords: ["specialist", "cardiologist", "dermatologist", "orthopedic", "physical health"] },
  { text: "Food Bank / Food Assistance", category: "Food", keywords: ["food", "food bank", "meals", "nutrition", "hungry", "groceries"] },
  { text: "Housing Assistance", category: "Housing", keywords: ["housing", "shelter", "rent", "homeless", "apartment", "home"] },
  { text: "Child Care Services", category: "Child Care", keywords: ["child care", "childcare", "daycare", "preschool", "children", "kids"] },
  { text: "Transportation Services", category: "Transportation", keywords: ["transportation", "bus", "ride", "transit", "car", "travel"] },
  { text: "Legal Aid", category: "Legal", keywords: ["legal", "lawyer", "attorney", "law", "legal aid", "legal help"] },
  { text: "Clothing Assistance", category: "Clothing", keywords: ["clothing", "clothes", "apparel", "wardrobe", "dress"] },
  { text: "Furniture Assistance", category: "Furniture", keywords: ["furniture", "furnishings", "bed", "couch", "table", "chair"] },
  { text: "School Supplies", category: "School Supplies", keywords: ["school supplies", "backpack", "notebooks", "pencils", "school", "education supplies"] },
  { text: "Adult Day Care", category: "Adult Day Care", keywords: ["adult day care", "senior care", "elderly care", "adult daycare", "senior services"] },
];

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [errors, setErrors] = useState<{ location?: string; service?: string }>({});
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [detectingLocation, setDetectingLocation] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState("");
  const [genesysReady, setGenesysReady] = useState(false);
  const [locationSuggestions, setLocationSuggestions] = useState<Array<{ display: string; city: string; state: string; zip?: string }>>([]);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  const [loadingLocationSuggestions, setLoadingLocationSuggestions] = useState(false);

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

  // Location autocomplete with debouncing
  useEffect(() => {
    const fetchLocationSuggestions = async () => {
      if (locationQuery.trim().length < 2) {
        setLocationSuggestions([]);
        setShowLocationSuggestions(false);
        return;
      }

      setLoadingLocationSuggestions(true);

      try {
        // Use backend proxy to avoid CORS issues
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-f6cfc78b/geocode?q=${encodeURIComponent(locationQuery)}`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`
            }
          }
        );
        
        if (!response.ok) {
          throw new Error('Geocoding failed');
        }

        const data = await response.json();
        
        if (data.suggestions && data.suggestions.length > 0) {
          setLocationSuggestions(data.suggestions);
          setShowLocationSuggestions(true);
        } else {
          setLocationSuggestions([]);
          setShowLocationSuggestions(false);
        }
      } catch (error) {
        console.error('Error fetching location suggestions:', error);
        setLocationSuggestions([]);
        setShowLocationSuggestions(false);
      } finally {
        setLoadingLocationSuggestions(false);
      }
    };

    // Debounce the API call
    const timeoutId = setTimeout(() => {
      fetchLocationSuggestions();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [locationQuery]);

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
      }, 1500);
    }
  };

  const toggleCategory = (label: string) => {
    const isCurrentlySelected = selectedCategories.includes(label);
    const newCategories = isCurrentlySelected 
      ? selectedCategories.filter(cat => cat !== label)
      : [...selectedCategories, label];
    
    // Update selected categories
    setSelectedCategories(newCategories);
    
    // Auto-populate search field with selected categories
    if (newCategories.length > 0) {
      setSearchQuery(newCategories.join(", "));
    } else {
      setSearchQuery("");
    }
    
    // Clear service error when user selects a category
    if (errors.service) {
      setErrors(prev => ({ ...prev, service: undefined }));
    }
  };

  // Geolocation handler - completely rewritten with debugging
  const handleUseMyLocation = () => {
    console.log('🎯 Geolocation button clicked');
    
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      console.log('ℹ️ Geolocation not supported by browser');
      setErrors(prev => ({ ...prev, location: "Geolocation is not supported by your browser" }));
      return;
    }
    
    console.log('✅ Geolocation API is available');
    setDetectingLocation(true);
    setErrors(prev => ({ ...prev, location: undefined }));

    console.log('🔍 Requesting current position...');
    
    navigator.geolocation.getCurrentPosition(
      // Success callback
      async (position) => {
        console.log('✅ Position obtained!', position);
        const { latitude, longitude } = position.coords;
        console.log(`📍 Coordinates: ${latitude}, ${longitude}`);
        
        try {
          // Try geocoding with BigDataCloud (no API key needed, no rate limits)
          console.log('🌐 Attempting reverse geocoding...');
          const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
          console.log('📡 Fetching from:', url);
          
          const response = await fetch(url);
          console.log('📡 Response status:', response.status);
          
          if (!response.ok) {
            throw new Error(`Geocoding failed with status: ${response.status}`);
          }

          const data = await response.json();
          console.log('📦 Geocoding data received:', data);
          
          // Extract location info
          const city = data.city || data.locality || data.principalSubdivision;
          const postalCode = data.postcode;
          const state = data.principalSubdivisionCode?.replace('US-', '') || data.principalSubdivision;
          
          console.log('📍 Extracted location:', { city, postalCode, state });
          
          // Set location query
          let locationString = '';
          if (postalCode) {
            locationString = postalCode;
            console.log('✅ Using postal code:', locationString);
          } else if (city && state) {
            locationString = `${city}, ${state}`;
            console.log('✅ Using city and state:', locationString);
          } else if (city) {
            locationString = city;
            console.log('✅ Using city only:', locationString);
          } else {
            // Fallback - just use coordinates in a readable format
            locationString = `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
            console.log('⚠️ Using coordinates as fallback:', locationString);
          }
          
          setLocationQuery(locationString);
          setDetectingLocation(false);
          console.log('🎉 Location set successfully!');
          
        } catch (error) {
          console.log('ℹ️ Reverse geocoding failed, using coordinates:', error);
          
          // Fallback: just use the coordinates as location
          const fallbackLocation = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
          console.log('🔄 Using fallback location:', fallbackLocation);
          setLocationQuery(fallbackLocation);
          setDetectingLocation(false);
          console.log('✅ Fallback location set (you can still search with coordinates)');
        }
      },
      // Error callback
      (error) => {
        let errorMessage = "Unable to detect your location.";
        
        if (error?.code === 1) {
          // PERMISSION_DENIED - This is expected when geolocation is disabled
          errorMessage = "Location access is disabled. Please enable location permissions or enter your location manually.";
          console.log('ℹ️ Geolocation permission denied or disabled by policy');
        } else if (error?.code === 2) {
          errorMessage = "Location unavailable. Please check your device settings.";
          console.log('ℹ️ Position unavailable');
        } else if (error?.code === 3) {
          errorMessage = "Location request timed out. Please try again.";
          console.log('ℹ️ Request timeout');
        } else {
          console.log('ℹ️ Geolocation error:', error?.message || 'Unknown error');
        }
        
        setErrors(prev => ({ ...prev, location: errorMessage }));
        setDetectingLocation(false);
      },
      // Options
      {
        enableHighAccuracy: false,
        timeout: 15000, // Increased to 15 seconds
        maximumAge: 300000 // 5 minutes cache
      }
    );
    
    console.log('⏳ Waiting for geolocation response...');
  };

  // Parse voice transcript to extract service and location
  const parseVoiceTranscript = (transcript: string): { service: string; location: string } => {
    let service = '';
    let location = '';
    
    // Common location patterns
    const zipCodeRegex = /\b\d{5}\b/;
    const inRegex = /\b(in|near|at)\s+([a-zA-Z\s]+?)(?:\s+\d{5}|$)/i;
    const cityStateRegex = /([a-zA-Z\s]+),\s*([A-Z]{2})\b/;
    
    // Check for ZIP code
    const zipMatch = transcript.match(zipCodeRegex);
    if (zipMatch) {
      location = zipMatch[0];
      // Remove ZIP from service description
      service = transcript.replace(zipMatch[0], '').trim();
    }
    
    // Check for "in [city]" or "near [city]" pattern
    if (!location) {
      const inMatch = transcript.match(inRegex);
      if (inMatch) {
        location = inMatch[2].trim();
        // Remove location phrase from service
        service = transcript.replace(inMatch[0], '').trim();
      }
    }
    
    // Check for "City, ST" pattern
    if (!location) {
      const cityStateMatch = transcript.match(cityStateRegex);
      if (cityStateMatch) {
        location = `${cityStateMatch[1].trim()}, ${cityStateMatch[2]}`;
        // Remove from service
        service = transcript.replace(cityStateMatch[0], '').trim();
      }
    }
    
    // If no location found, entire transcript is the service
    if (!location) {
      service = transcript;
    }
    
    // Clean up service text - remove common filler words at beginning
    service = service.replace(/^(i need|i want|looking for|find me|help me find|search for)\s+/i, '').trim();
    
    return { service, location };
  };

  // Voice dictation handler
  const handleVoiceDictation = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in your browser. Please try Chrome, Edge, or Safari.');
      return;
    }

    // Check if we're on a secure context (HTTPS or localhost)
    if (!window.isSecureContext) {
      alert('Microphone access requires a secure connection (HTTPS). Please check your connection or contact support.');
      return;
    }

    if (isRecording) {
      // Stop recording and save the transcript
      const { service, location } = parseVoiceTranscript(voiceTranscript);
      setSearchQuery(service);
      setLocationQuery(location);
      setIsRecording(false);
      setVoiceTranscript("");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    setIsRecording(true);
    setVoiceTranscript("");

    recognition.onresult = (event: any) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' ';
        } else {
          interimTranscript += transcript;
        }
      }

      // Update voice transcript state with both final and interim results
      setVoiceTranscript((prev) => {
        const baseText = prev + finalTranscript;
        return interimTranscript ? baseText + interimTranscript : baseText.trim();
      });
      
      // Clear service error when voice input is captured
      if (errors.service) {
        setErrors(prev => ({ ...prev, service: undefined }));
      }
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsRecording(false);
      setVoiceTranscript("");
      
      if (event.error === 'no-speech') {
        alert('No speech detected. Please try again and speak clearly.');
      } else if (event.error === 'not-allowed') {
        alert('Microphone access was denied.\n\nTo enable:\n1. Click the camera/microphone icon in your browser address bar\n2. Allow microphone access\n3. Refresh the page and try again\n\nNote: This feature requires HTTPS or localhost.');
      } else if (event.error === 'aborted') {
        // User stopped recording, no need to alert
        console.log('Recording aborted by user');
      } else if (event.error === 'audio-capture') {
        alert('No microphone was found. Please check that a microphone is connected to your device.');
      } else if (event.error === 'network') {
        alert('Network error occurred. Please check your internet connection and try again.');
      } else {
        alert(`Speech recognition error: ${event.error}\n\nPlease try again or use the keyboard to type your search.`);
      }
    };

    recognition.onend = () => {
      if (isRecording) {
        // If still recording, save the transcript
        const { service, location } = parseVoiceTranscript(voiceTranscript);
        setSearchQuery(service);
        setLocationQuery(location);
        setIsRecording(false);
        setVoiceTranscript("");
      }
    };

    try {
      recognition.start();
    } catch (error) {
      console.error('Failed to start speech recognition:', error);
      setIsRecording(false);
      setVoiceTranscript("");
      alert('Could not start voice input. Please check your microphone permissions and try again.');
    }
  };

  // Filter suggestions based on search query
  const filteredSuggestions = searchQuery.trim().length > 0
    ? searchSuggestions.filter(suggestion =>
        suggestion.keywords.some(keyword =>
          keyword.toLowerCase().includes(searchQuery.toLowerCase())
        )
      ).slice(0, 5) // Limit to 5 suggestions
    : [];

  const handleSuggestionClick = (suggestionText: string, category: string) => {
    setSearchQuery(suggestionText);
    setShowSuggestions(false);
    
    // Auto-select the category
    if (!selectedCategories.includes(category)) {
      setSelectedCategories(prev => [...prev, category]);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({});
    
    // Validation
    const newErrors: { location?: string; service?: string } = {};
    
    if (!locationQuery.trim()) {
      newErrors.location = "Please enter a city or ZIP code";
    }
    
    if (!searchQuery.trim() && selectedCategories.length === 0) {
      newErrors.service = "Please select a service category or enter what you're looking for";
    }
    
    // If there are errors, display them and don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    const params = new URLSearchParams();
    
    if (searchQuery.trim()) {
      params.append("q", searchQuery);
    }
    
    if (locationQuery.trim()) {
      params.append("location", locationQuery);
    }
    
    if (selectedCategories.length > 0) {
      params.append("categories", selectedCategories.join(","));
    }

    // Console log to verify data being sent
    console.log("🏠 Homepage Search - Sending data:", {
      query: searchQuery,
      location: locationQuery,
      categories: selectedCategories
    });
    
    // Always navigate to refinement page to gather more details
    navigate(`/search-refinement${params.toString() ? `?${params.toString()}` : ''}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Voice Recording Modal Overlay */}
      {isRecording && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center animate-pulse">
                  <Mic className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Listening...</h2>
                  <p className="text-sm text-gray-500">Speak clearly to describe what you need help with</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleVoiceDictation}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Stop recording"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Sound Wave Visualization */}
            <div className="flex items-center justify-center gap-1.5 mb-6 h-16">
              <div className="w-2 bg-purple-500 rounded-full animate-pulse" style={{ height: '20%', animationDelay: '0ms', animationDuration: '800ms' }}></div>
              <div className="w-2 bg-purple-500 rounded-full animate-pulse" style={{ height: '40%', animationDelay: '100ms', animationDuration: '800ms' }}></div>
              <div className="w-2 bg-purple-500 rounded-full animate-pulse" style={{ height: '70%', animationDelay: '200ms', animationDuration: '800ms' }}></div>
              <div className="w-2 bg-purple-600 rounded-full animate-pulse" style={{ height: '90%', animationDelay: '300ms', animationDuration: '800ms' }}></div>
              <div className="w-2 bg-purple-600 rounded-full animate-pulse" style={{ height: '100%', animationDelay: '400ms', animationDuration: '800ms' }}></div>
              <div className="w-2 bg-purple-600 rounded-full animate-pulse" style={{ height: '90%', animationDelay: '500ms', animationDuration: '800ms' }}></div>
              <div className="w-2 bg-purple-500 rounded-full animate-pulse" style={{ height: '70%', animationDelay: '600ms', animationDuration: '800ms' }}></div>
              <div className="w-2 bg-purple-500 rounded-full animate-pulse" style={{ height: '40%', animationDelay: '700ms', animationDuration: '800ms' }}></div>
              <div className="w-2 bg-purple-500 rounded-full animate-pulse" style={{ height: '20%', animationDelay: '800ms', animationDuration: '800ms' }}></div>
            </div>

            {/* Transcript Display */}
            <div className="bg-purple-50 rounded-xl p-6 min-h-[200px] max-h-[400px] overflow-y-auto border-2 border-purple-200">
              {voiceTranscript ? (
                <p className="text-xl md:text-2xl text-gray-900 leading-relaxed">
                  {voiceTranscript}
                </p>
              ) : (
                <p className="text-xl md:text-2xl text-gray-400 italic text-center mt-16">
                  Start speaking...
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <Button
                type="button"
                onClick={handleVoiceDictation}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg font-semibold"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Done
                </span>
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsRecording(false);
                  setVoiceTranscript("");
                }}
                className="px-8 py-6 text-lg border-2"
              >
                Cancel
              </Button>
            </div>

            {/* Hint */}
            <p className="text-center text-xs text-gray-500 mt-4">
              Click "Done" when finished or press the microphone button to save your input
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoImage} alt="Care Solace" className="h-6 md:h-8" />
            </Link>
            <nav className="flex items-center gap-3 md:gap-6">
              {/* Arkansas Partnership Badge */}
              <div className="flex items-center gap-2 px-2 md:px-3 py-1 md:py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200">
                <Shield className="h-3 w-3 md:h-4 md:w-4 text-blue-600 flex-shrink-0" />
                <span className="text-[10px] md:text-xs font-medium text-blue-700">
                  <span className="hidden sm:inline">Arkansas Partnership</span>
                  <span className="sm:hidden">AR Partner</span>
                </span>
              </div>
              <a href="tel:8885150595" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">
                  <span className="hidden sm:inline">Call (888) 515-0595 For Help</span>
                  <span className="sm:hidden">(888) 515-0595</span>
                </span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Search */}
      <section 
        className="text-white py-4 md:py-6 rounded-[5px] relative overflow-hidden" 
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Very light overlay for text readability while preserving the background image */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/25 to-white/30 rounded-[5px]"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <p className="mb-4 md:mb-6 text-center text-xl md:text-[32px] font-bold px-4 text-[#010d20]">When care is miles away, we help bring it closer.</p>
          
          <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row gap-2">
            <div className={`flex-1 flex items-center gap-3 px-4 relative min-w-0 transition-all duration-300`}>
              <Search className="h-5 w-5 text-gray-400 flex-shrink-0" />
              <Input
                type="text"
                placeholder="What can I help you with"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  // Clear service error when user starts typing
                  if (errors.service) {
                    setErrors(prev => ({ ...prev, service: undefined }));
                  }
                }}
                className="border-0 focus-visible:ring-0 text-gray-900 text-base md:text-lg"
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              />
              <button
                type="button"
                onClick={handleVoiceDictation}
                className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 text-purple-600 hover:text-purple-700 transition-all"
                title="Voice input"
              >
                <Mic className="h-5 w-5" />
              </button>
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden z-50 max-h-[300px] overflow-y-auto">
                  <ul>
                    {filteredSuggestions.map((suggestion, index) => {
                      const category = categories.find(cat => cat.label === suggestion.category);
                      return (
                        <li
                          key={suggestion.text}
                          className={`px-4 py-3 cursor-pointer hover:bg-blue-50 transition-colors ${
                            index !== filteredSuggestions.length - 1 ? 'border-b border-gray-100' : ''
                          }`}
                          onClick={() => handleSuggestionClick(suggestion.text, suggestion.category)}
                        >
                          <div className="flex items-center gap-3">
                            {category && <category.icon className="h-4 w-4 text-gray-400 flex-shrink-0" />}
                            <div className="min-w-0">
                              <div className="text-gray-900 font-medium text-sm md:text-base">{suggestion.text}</div>
                              <div className="text-xs text-gray-500 mt-0.5">{suggestion.category}</div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3 px-4 border-t md:border-t-0 md:border-l pt-2 md:pt-0 relative">
              <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
              <div className="flex-1 flex items-center gap-2 relative">
                <Input
                  type="text"
                  placeholder="City or ZIP code"
                  value={locationQuery}
                  onChange={(e) => {
                    setLocationQuery(e.target.value);
                    // Clear location error when user starts typing
                    if (errors.location) {
                      setErrors(prev => ({ ...prev, location: undefined }));
                    }
                  }}
                  onFocus={() => {
                    if (locationSuggestions.length > 0) {
                      setShowLocationSuggestions(true);
                    }
                  }}
                  onBlur={() => setTimeout(() => setShowLocationSuggestions(false), 200)}
                  className="border-0 focus-visible:ring-0 text-gray-900 text-base md:text-lg flex-1"
                />
                {loadingLocationSuggestions && (
                  <Loader2 className="h-4 w-4 animate-spin text-gray-400 absolute right-12" />
                )}
                <button
                  type="button"
                  onClick={handleUseMyLocation}
                  disabled={detectingLocation}
                  className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 transition-colors text-purple-600 hover:text-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Use my current location"
                >
                  {detectingLocation ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Navigation className="h-5 w-5" />
                  )}
                </button>
                {showLocationSuggestions && locationSuggestions.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden z-50 max-h-[300px] overflow-y-auto">
                    <ul>
                      {locationSuggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          className={`px-4 py-3 cursor-pointer hover:bg-purple-50 transition-colors ${
                            index !== locationSuggestions.length - 1 ? 'border-b border-gray-100' : ''
                          }`}
                          onMouseDown={(e) => {
                            e.preventDefault(); // Prevent input blur
                            setLocationQuery(suggestion.display);
                            setShowLocationSuggestions(false);
                            if (errors.location) {
                              setErrors(prev => ({ ...prev, location: undefined }));
                            }
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-purple-600 flex-shrink-0" />
                            <div className="min-w-0">
                              <div className="text-gray-900 font-medium text-sm md:text-base truncate">
                                {suggestion.display}
                              </div>
                              {(suggestion.city || suggestion.state) && (
                                <div className="text-xs text-gray-500 mt-0.5">
                                  {suggestion.zip ? `ZIP ${suggestion.zip}` : `${suggestion.city}, ${suggestion.state}`}
                                </div>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full md:w-auto">
              Search
            </Button>
          </form>

          {/* Error Messages */}
          {(errors.location || errors.service) && (
            <div className="mt-3 bg-red-50 border border-red-200 rounded-lg p-4">
              {errors.location && (
                <p className="text-red-700 text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {errors.location}
                </p>
              )}
              {errors.service && (
                <p className="text-red-700 text-sm font-medium flex items-center gap-2 mt-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {errors.service}
                </p>
              )}
            </div>
          )}

          {/* Category Chips */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {(showMoreCategories ? categories : categories.slice(0, 3)).map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategories.includes(category.label);
              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => toggleCategory(category.label)}
                  className={`${
                    isSelected 
                      ? 'bg-purple-600 text-white ring-2 ring-purple-600 ring-offset-2 shadow-lg' 
                      : category.color
                  } px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:shadow-md transition-all font-medium text-xs`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {category.label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setShowMoreCategories(!showMoreCategories)}
              className="px-3 py-1.5 rounded-full flex items-center gap-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all font-medium text-xs"
            >
              {showMoreCategories ? (
                <>
                  <ChevronUp className="h-3.5 w-3.5" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-3.5 w-3.5" />
                  Show More
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Subheader */}
      <div className="py-2">
        <div className="container mx-auto px-4 max-w-6xl">
          
        </div>
      </div>

      {/* Info Cards */}
      <section className="pb-8 md:pb-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-4 md:gap-6">
            
            {/* Need Help Making a Decision Card - Redesigned */}
            <Card className="relative overflow-hidden shadow-xl border-0 bg-gradient-to-br from-purple-50 via-white to-purple-50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full opacity-10 -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-300 rounded-full opacity-10 -ml-24 -mb-24"></div>
              
              <CardContent className="p-6 md:p-8 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      Need help making a decision?
                    </h3>
                    <p className="text-sm text-purple-700 font-medium mt-0.5">
                      Let us do the work
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6 ml-1">
                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 group-hover:bg-purple-600 text-purple-600 group-hover:text-white flex items-center justify-center text-sm font-bold transition-all duration-200 shadow-sm">
                        1
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-sm md:text-base text-gray-800 font-medium">Share about yourself</p>
                      <p className="text-xs text-gray-500 mt-0.5">Tell us your needs and preferences</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 group-hover:bg-purple-600 text-purple-600 group-hover:text-white flex items-center justify-center text-sm font-bold transition-all duration-200 shadow-sm">
                        2
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-sm md:text-base text-gray-800 font-medium">What are you looking for</p>
                      <p className="text-xs text-gray-500 mt-0.5">Describe the care or services you need</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 group-hover:bg-purple-600 text-purple-600 group-hover:text-white flex items-center justify-center text-sm font-bold transition-all duration-200 shadow-sm">
                        3
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-sm md:text-base text-gray-800 font-medium">We'll find the best match</p>
                      <p className="text-xs text-gray-500 mt-0.5">Our team works on your behalf to connect you</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="button"
                  variant="outline"
                  className="w-full border border-purple-600 text-purple-700 hover:bg-purple-50 bg-white shadow-sm hover:shadow-md transition-all px-2 py-1.5 text-xs font-semibold group"
                  onClick={openChat}
                >
                  <span className="flex items-center justify-center gap-1.5">
                    <MessageCircle className="h-4 w-4" />
                    Chat with Care Companion
                    <div className="group/tooltip relative ml-1">
                      <Info className="h-4 w-4 text-purple-600 cursor-help" />
                      <div className="hidden group-hover/tooltip:block absolute z-10 w-48 p-2 bg-gray-900 text-white text-[10px] rounded-lg shadow-lg -left-20 bottom-6">
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                        Chat with a real human who can help
                      </div>
                    </div>
                  </span>
                </Button>
              </CardContent>
            </Card>

            {/* Why Choose Care Solace Card - Redesigned */}
            <Card className="relative overflow-hidden shadow-xl border-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200 rounded-full opacity-10 -mr-20 -mt-20"></div>
              
              <CardContent className="p-6 md:p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  
                  <h3 className="text-base md:text-lg font-bold text-gray-900">Why Choose Care Solace?</h3>
                </div>
                
                <div className="space-y-5">
                  <div className="group hover:bg-blue-50 -mx-2 px-2 py-2 rounded-lg transition-all duration-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        24M
                      </div>
                    </div>
                    <div className="text-xs md:text-sm text-gray-700 font-semibold ml-13">people served</div>
                    <p className="text-xs text-gray-500 mt-1 ml-13">Supporting equitable access to care for millions nationwide.</p>
                  </div>
                  
                  <div className="group hover:bg-blue-50 -mx-2 px-2 py-2 rounded-lg transition-all duration-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-sm">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        1M
                      </div>
                    </div>
                    <div className="text-xs md:text-sm text-gray-700 font-semibold ml-13">hours saved</div>
                    <p className="text-xs text-gray-500 mt-1 ml-13">Helping mental health staff regain valuable time.</p>
                  </div>
                  
                  <div className="group hover:bg-blue-50 -mx-2 px-2 py-2 rounded-lg transition-all duration-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-sm">
                        <Network className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        700K+
                      </div>
                    </div>
                    <div className="text-xs md:text-sm text-gray-700 font-semibold ml-13">verified providers</div>
                    <p className="text-xs text-gray-500 mt-1 ml-13">Nationwide network including Medicaid and telehealth.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600 text-xs md:text-sm">
            <p>© 2026 Care Match. Connecting people to health and social services.</p>
            <p className="mt-2">Free, confidential, and secure.</p>
            {/* Arkansas Partnership Trust Badge */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
              <Shield className="h-3 w-3 text-blue-600" />
              <span>Proudly serving Arkansas communities in partnership with local health organizations</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}