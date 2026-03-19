import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router";
import { Search, MapPin, Calendar, Star, Video, X, Heart, User, Download, ChevronDown, Phone, Sparkles, ArrowRight, ArrowLeft, Info, Map as MapIcon, List, Mail, Globe, CheckCircle, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Slider } from "../components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { mockProviders, Provider } from "../data/providers";
import { AuthModal, UserData } from "../components/AuthModal";
import { Chip } from "../components/Chip";
import { FigmaButton } from "../components/FigmaButton";
import { FigmaTextField } from "../components/FigmaTextField";
import { FigmaTabSwitcher } from "../components/FigmaTabSwitcher";
import { AppointmentModal } from "../components/AppointmentModal";
import { ProvidersMap } from "../components/ProvidersMap";
import jsPDF from "jspdf";
import logoImage from "figma:asset/402617bbcf95896cb7bccd79e2ebca2544a06ac1.png";
import { searchProviders, extractState, mapProviderTypeToCategory, isSnowflakeTokenExpired } from "../services/providerApi";
import { TokenExpiredBanner } from "../components/TokenExpiredBanner";

// Helper function to translate credentials to consumer-friendly language
const translateCredentials = (credentials: string, providerType?: string): string => {
  // For Physical Health providers, handle MD/DO differently
  if (providerType === "Physical Health") {
    // Split by common delimiters (comma, semicolon)
    const parts = credentials.split(/[,;]/).map(c => c.trim());
    
    // For physical health, if we have MD/DO followed by a specialty, just show the specialty
    if (parts.length >= 2 && (parts[0] === 'MD' || parts[0] === 'DO')) {
      // Return everything after the MD/DO (e.g., "Family Medicine", "Cardiology")
      return parts.slice(1).join(', ');
    }
    
    // Otherwise return as-is for physical health
    return credentials;
  }
  
  // For Mental Health and Social Services, use the translation map
  const credentialMap: Record<string, string> = {
    // Psychologists
    'PhD': 'Psychologist',
    'PsyD': 'Psychologist',
    'LCP': 'Psychologist',
    'Psychologist': 'Psychologist',
    'Clinical Psychologist': 'Psychologist',
    
    // Psychiatrists (Medical Doctors)
    'MD': 'Psychiatrist',
    'DO': 'Psychiatrist',
    'Psychiatrist': 'Psychiatrist',
    'Child Psychiatrist': 'Child Psychiatrist',
    
    // Therapists & Counselors
    'LMFT': 'Marriage & Family Therapist',
    'LCSW': 'Clinical Social Worker',
    'LPC': 'Professional Counselor',
    'LPCC': 'Professional Counselor',
    'LMHC': 'Mental Health Counselor',
    'LCPC': 'Professional Counselor',
    'LICSW': 'Clinical Social Worker',
    'LCMHC': 'Mental Health Counselor',
    'LMSW': 'Social Worker',
    'MSW': 'Social Worker',
    
    // Nurse Practitioners
    'NP': 'Nurse Practitioner',
    'APRN': 'Nurse Practitioner',
    'PMHNP': 'Psychiatric Nurse Practitioner',
    'DNP': 'Nurse Practitioner',
    'RN': 'Registered Nurse',
    'CNS': 'Clinical Nurse Specialist',
    
    // Physician Assistants
    'PA': 'Physician Assistant',
    'PA-C': 'Physician Assistant',
    
    // Other Degrees
    'MA': 'Therapist',
    'MS': 'Therapist',
    'MEd': 'Counselor',
    'EdD': 'Counselor',
    'MFT': 'Marriage & Family Therapist',
    
    // Behavior Analysts
    'BCBA': 'Behavior Analyst',
    'BCaBA': 'Behavior Analyst',
    
    // Addiction Counselors
    'CAC': 'Addiction Counselor',
    'CADC': 'Addiction Counselor',
    'CAADC': 'Addiction Counselor',
    
    // Other
    'CRC': 'Rehabilitation Counselor',
    'Nonprofit Organization': 'Nonprofit Organization',
    'Community Service': 'Community Service',
    'Community Resource': 'Community Resource',
  };

  // Split by common delimiters (comma, semicolon)
  const parts = credentials.split(/[,;]/).map(c => c.trim());
  
  return parts.map(credential => {
    // Try exact match first
    if (credentialMap[credential]) {
      return credentialMap[credential];
    }
    
    // Try to find the credential in the map (case insensitive)
    const found = Object.keys(credentialMap).find(
      key => key.toLowerCase() === credential.toLowerCase()
    );
    
    if (found) {
      return credentialMap[found];
    }
    
    // If no match found, return original
    return credential;
  }).join(', ');
};

// Mental Health Categories - matches SearchRefinement.tsx
const mentalHealthConditions = [
  "Anxiety",
  "Depression",
  "Disruptive",
  "Suicidal Ideation and Self-Harm",
  "ADHD",
  "Bipolar",
  "Couple / Family Counseling",
  "Feeding & Eating",
  "Obsessive Compulsive",
  "Trauma & Stress",
  "Addictive Behaviors"
];

// Addictive Behaviors Subcategories
const addictiveBehaviorsSubcategories = [
  "Alcohol",
  "Cannabis",
  "Hallucinogen",
  "Inhalant",
  "Opioid",
  "Sedative or Hypnotic",
  "Stimulant"
];

// Mental Health Treatment Types - matches SearchRefinement.tsx
const mentalHealthTreatmentTypes = [
  "Psychological Assessment",
  "Applied Behavioral Analysis",
  "Individual Therapy",
  "Psychiatry",
  "Intervention Services",
  "Intensive Outpatient Program",
  "Partial Hospitalization Program",
  "Residential Inpatient Program",
  "Hospitalization & Stabilization",
  "Medical Detox"
];

// Social Service Categories
const socialServiceCategories = {
  "Housing": [
    "Housing Assistance",
    "Emergency Shelter",
    "Rental Assistance",
    "Family Support"
  ],
  "Food": [
    "Food Assistance",
    "Food Pantry",
    "Meal Programs",
    "Nutrition Support"
  ],
  "Transportation": [
    "Transportation Assistance",
    "Medical Transport",
    "Bus Pass Programs"
  ],
  "Employment": [
    "Job Training",
    "Resume Building",
    "Interview Preparation",
    "Career Counseling",
    "Job Placement"
  ],
  "Utilities": [
    "Utility Assistance",
    "Bill Payment Help",
    "Energy Efficiency"
  ],
  "Safety & Legal": [
    "Domestic Violence Support",
    "Crisis Intervention",
    "Safety Planning",
    "Legal Advocacy"
  ],
  "Dental": [
    "Dental Care",
    "Emergency Dental",
    "Dental Screening",
    "Preventive Dental"
  ]
};

// Physical Health Categories
const physicalHealthCategories = {
  "Dental": ["Dental"],
  "Maternal": ["Maternal"],
  "Pediatrics": ["Pediatrics"],
  "Primary Care": ["Primary Care"]
};

export default function ProviderSearch() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialQuery = searchParams.get("q") || "";
  const initialType = searchParams.get("type") || "all";
  const userName = searchParams.get("userName") || "";
  const categoriesFromHome = searchParams.get("categories")?.split(",").map(c => c.trim()) || [];
  const skippedRefinement = searchParams.get("skipped") === "true";

  console.log("🏥 ProviderSearch Component Loaded", {
    initialType,
    initialQuery,
    userName,
    categoriesFromHome,
    totalProvidersInDatabase: mockProviders.length,
    allSearchParams: Object.fromEntries(searchParams.entries())
  });

  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [locationSearch, setLocationSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showRefinementBanner, setShowRefinementBanner] = useState(skippedRefinement);
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  
  // Track active categories (can be removed by user)
  const [activeCategories, setActiveCategories] = useState<string[]>(categoriesFromHome);
  
  // Track which provider types were initially selected from homepage
  const [initiallySelectedTypes, setInitiallySelectedTypes] = useState<{
    mentalHealth: boolean;
    physicalHealth: boolean;
    socialService: boolean;
  }>({ mentalHealth: false, physicalHealth: false, socialService: false });
  
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authAction, setAuthAction] = useState<"save" | "appointment" | "save-multiple">("save");
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [savedProviders, setSavedProviders] = useState<string[]>([]);
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [selectionEmail, setSelectionEmail] = useState<string>("");
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  
  // Appointment modal state
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [appointmentProvider, setAppointmentProvider] = useState<Provider | null>(null);
  
  // Provider detail modal state
  const [showProviderDetail, setShowProviderDetail] = useState(false);
  const [detailProvider, setDetailProvider] = useState<Provider | null>(null);
  const [showAllCredentials, setShowAllCredentials] = useState(false);
  const [showAllSpecialties, setShowAllSpecialties] = useState(false);
  
  // Checkbox-based filters
  const [selectedProviderType, setSelectedProviderType] = useState<string>(initialType);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedInsurances, setSelectedInsurances] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedAgeGroups, setSelectedAgeGroups] = useState<string[]>([]);
  const [selectedEthnicities, setSelectedEthnicities] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedTreatmentTypes, setSelectedTreatmentTypes] = useState<string[]>([]);
  const [selectedPhysicalHealthCategories, setSelectedPhysicalHealthCategories] = useState<string[]>([]);
  const [selectedSocialServiceCategories, setSelectedSocialServiceCategories] = useState<string[]>([]);
  const [acceptingNewOnly, setAcceptingNewOnly] = useState(false);
  const [telehealthOnly, setTelehealthOnly] = useState(false);
  const [showInsuranceSelector, setShowInsuranceSelector] = useState(false);
  const [showOtherPreferencesSelector, setShowOtherPreferencesSelector] = useState(false);
  const [showDistanceSelector, setShowDistanceSelector] = useState(false);
  const [customInsurance, setCustomInsurance] = useState("");
  const [selectedDistance, setSelectedDistance] = useState<number>(50); // Default to 50 miles
  
  // Accordion state for filter sections
  const [openFilterSections, setOpenFilterSections] = useState<string[]>([]);
  
  // API state
  const [isLoadingApi, setIsLoadingApi] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  
  // Reference number for this search session
  const [searchReferenceNumber] = useState(() => {
    // Generate a random 8-digit reference number for this search session
    return Math.floor(10000000 + Math.random() * 90000000).toString();
  });
  const [apiProviders, setApiProviders] = useState<Provider[]>([]);
  const [showTokenExpiredBanner, setShowTokenExpiredBanner] = useState(false);

  const toggleFilterSection = (section: string) => {
    setOpenFilterSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  // Handle authentication success
  const handleAuthSuccess = (userData: UserData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
    
    // Handle the action that triggered auth
    if (authAction === "save" && selectedProvider) {
      setSavedProviders(prev => [...prev, selectedProvider.id]);
      // Show success message or notification
      alert(`${selectedProvider.name} has been saved to your account!`);
    } else if (authAction === "save-multiple") {
      // Save all selected providers
      const newSaved = [...new Set([...savedProviders, ...selectedProviders])];
      setSavedProviders(newSaved);
      alert(`${selectedProviders.length} provider${selectedProviders.length !== 1 ? 's' : ''} saved to your account!`);
    } else if (authAction === "appointment" && selectedProvider) {
      // Show appointment modal
      setAppointmentProvider(selectedProvider);
      setShowAppointmentModal(true);
    }
  };

  const handleSaveProvider = (provider: Provider) => {
    if (!isAuthenticated) {
      setSelectedProvider(provider);
      setAuthAction("save");
      setShowAuthModal(true);
    } else {
      if (savedProviders.includes(provider.id)) {
        setSavedProviders(prev => prev.filter(id => id !== provider.id));
      } else {
        setSavedProviders(prev => [...prev, provider.id]);
      }
    }
  };

  const handleRequestAppointment = (provider: Provider) => {
    if (!isAuthenticated) {
      setSelectedProvider(provider);
      setAuthAction("save");
      setShowAuthModal(true);
    } else {
      // Show appointment modal
      setAppointmentProvider(provider);
      setShowAppointmentModal(true);
    }
  };

  const handleViewDetails = (provider: Provider) => {
    setDetailProvider(provider);
    setShowProviderDetail(true);
    setShowAllCredentials(false);
    setShowAllSpecialties(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setSavedProviders([]);
  };

  const handleToggleProvider = (providerId: string) => {
    setSelectedProviders(prev => 
      prev.includes(providerId)
        ? prev.filter(id => id !== providerId)
        : [...prev, providerId]
    );
  };

  const handleSelectAll = () => {
    if (selectedProviders.length === filteredProviders.length) {
      setSelectedProviders([]);
    } else {
      setSelectedProviders(filteredProviders.map(p => p.id));
    }
  };

  const handleCompareSelected = () => {
    alert(`Comparing ${selectedProviders.length} providers...`);
  };

  const handleRequestMultipleAppointments = () => {
    if (!isAuthenticated) {
      alert("Please sign in to request multiple appointments");
      return;
    }
    alert(`Requesting appointments with ${selectedProviders.length} providers...`);
  };

  const handleSaveSelected = () => {
    if (!isAuthenticated) {
      setAuthAction("save-multiple");
      setShowAuthModal(true);
      return;
    }
    const newSaved = [...new Set([...savedProviders, ...selectedProviders])];
    setSavedProviders(newSaved);
    
    // Log email if provided
    if (selectionEmail) {
      console.log('Email provided for saved providers:', selectionEmail);
    }
    
    alert(`${selectedProviders.length} provider${selectedProviders.length !== 1 ? 's' : ''} saved to your account!`);
  };

  const handleDownloadSelected = () => {
    const selectedProvidersData = filteredProviders.filter(p => selectedProviders.includes(p.id));
    
    // Create PDF document
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(18);
    doc.text("Care Match - Selected Providers", 14, 20);
    
    // Add date
    doc.setFontSize(10);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 28);
    
    // Add email if provided
    let yPosition = 34;
    if (selectionEmail) {
      doc.text(`Email: ${selectionEmail}`, 14, yPosition);
      yPosition += 6;
      console.log('Email included in PDF download:', selectionEmail);
    }
    
    yPosition = yPosition < 40 ? 40 : yPosition;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 14;
    const maxWidth = 180;
    
    // Add each provider
    selectedProvidersData.forEach((provider, index) => {
      // Check if we need a new page
      if (yPosition > pageHeight - 60) {
        doc.addPage();
        yPosition = 20;
      }
      
      // Provider header
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.text(`${index + 1}. ${provider.name} ${provider.credentials}`, margin, yPosition);
      yPosition += 7;
      
      // Provider details
      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      
      doc.text(`Type: ${provider.providerType}`, margin + 5, yPosition);
      yPosition += 5;
      
      doc.text(`Specialty: ${provider.specialty.join(", ")}`, margin + 5, yPosition);
      yPosition += 5;
      
      doc.text(`Location: ${provider.location}`, margin + 5, yPosition);
      yPosition += 5;
      
      if (provider.phone) {
        doc.text(`Phone: ${provider.phone}`, margin + 5, yPosition);
        yPosition += 5;
      }
      
      if (provider.email) {
        doc.text(`Email: ${provider.email}`, margin + 5, yPosition);
        yPosition += 5;
      }
      
      doc.text(`Next Available: ${provider.nextAvailable}`, margin + 5, yPosition);
      yPosition += 5;
      
      doc.text(`Rating: ${provider.rating} stars`, margin + 5, yPosition);
      yPosition += 5;
      
      doc.text(`Accepting New Patients: ${provider.acceptingNewPatients ? "Yes" : "No"}`, margin + 5, yPosition);
      yPosition += 5;
      
      doc.text(`Telehealth Available: ${provider.telehealth ? "Yes" : "No"}`, margin + 5, yPosition);
      yPosition += 5;
      
      // Handle insurance list (wrap if needed)
      const insuranceText = `Insurance: ${provider.insurance.join(", ")}`;
      const insuranceLines = doc.splitTextToSize(insuranceText, maxWidth);
      doc.text(insuranceLines, margin + 5, yPosition);
      yPosition += insuranceLines.length * 5;
      
      // Add spacing between providers
      yPosition += 5;
    });
    
    // Save the PDF
    doc.save(`care-match-providers-${new Date().toISOString().split('T')[0]}.pdf`);
  };

  const handleSendEmail = async () => {
    if (!selectionEmail) {
      alert('Please enter an email address.');
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(selectionEmail)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    setIsSendingEmail(true);
    
    try {
      const selectedProvidersData = filteredProviders.filter(p => selectedProviders.includes(p.id));
      
      // Simulate API call to send email
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('📧 Email sent to:', selectionEmail);
      console.log('📋 Provider list:', selectedProvidersData.map(p => ({
        name: p.name,
        specialty: p.specialty,
        location: p.location,
        phone: p.phone,
        email: p.email
      })));
      
      // Close modal and show success
      setShowEmailModal(false);
      setIsSendingEmail(false);
      
      alert(`✅ Provider list successfully sent to ${selectionEmail}!\n\nYou should receive it shortly with details for ${selectedProvidersData.length} provider${selectedProvidersData.length !== 1 ? 's' : ''}.`);
      
    } catch (error) {
      setIsSendingEmail(false);
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  // Handle removing a category chip
  const handleRemoveCategory = (categoryToRemove: string) => {
    const newCategories = activeCategories.filter(cat => cat !== categoryToRemove);
    setActiveCategories(newCategories);
    
    // Check if the currently selected tab is still valid
    const hasMentalHealth = newCategories.includes("Mental Health");
    const hasPhysicalHealth = newCategories.includes("Physical Health");
    const hasSocialServices = newCategories.some(cat => 
      ["Housing", "Food", "Transportation", "Employment", "Education", "Safety", "Dental"].includes(cat)
    );
    
    // If the removed category was the selected provider type, switch to "all" or another available type
    if (categoryToRemove === "Mental Health" && selectedProviderType === "Mental Health") {
      setSelectedProviderType("all");
    } else if (categoryToRemove === "Physical Health" && selectedProviderType === "Physical Health") {
      setSelectedProviderType("all");
    } else if (["Housing", "Food", "Transportation", "Employment", "Education", "Safety", "Dental"].includes(categoryToRemove) && selectedProviderType === "Social Service") {
      // Check if any social service categories remain
      if (!hasSocialServices) {
        setSelectedProviderType("all");
      }
    }
  };

  // Set initial values from URL params
  useEffect(() => {
    // Console log to verify data flow from homepage
    console.log("🔍 Provider Search - URL Parameters:", {
      query: initialQuery,
      type: initialType,
      categories: categoriesFromHome,
      location: searchParams.get("location"),
      specialties: searchParams.get("specialties"),
      languages: searchParams.get("languages"),
      insurance: searchParams.get("insurance")
    });

    if (initialQuery) setSearchTerm(initialQuery);
    if (initialType !== "all") setSelectedProviderType(initialType);
    
    // Parse location
    const location = searchParams.get("location");
    if (location) setLocationSearch(location);
    
    // Parse categories from homepage/refinement and determine provider type
    const categoriesParam = searchParams.get("categories");
    if (categoriesParam) {
      const categories = categoriesParam.split(",").map(c => c.trim());
      
      // Map categories to provider types
      const hasMentalHealth = categories.includes("Mental Health");
      const hasPhysicalHealth = categories.includes("Physical Health");
      const hasSocialServices = categories.some(cat => 
        ["Housing", "Food", "Transportation", "Employment", "Education", "Safety", "Child Care", "Legal", "Clothing", "Furniture", "Supplies for School", "Adult Day Care"].includes(cat)
      );
      
      // Store which types were initially selected
      setInitiallySelectedTypes({
        mentalHealth: hasMentalHealth,
        physicalHealth: hasPhysicalHealth,
        socialService: hasSocialServices
      });
      
      console.log("📍 Initially Selected Provider Types:", {
        mentalHealth: hasMentalHealth,
        physicalHealth: hasPhysicalHealth,
        socialService: hasSocialServices,
        categories
      });
      
      // Set provider type based on what was selected (only if initialType is "all")
      // If only one type is selected, use that. If multiple, default to "all"
      if (initialType === "all") {
        const selectedTypes = [
          hasMentalHealth ? "Mental Health" : null,
          hasPhysicalHealth ? "Physical Health" : null,
          hasSocialServices ? "Social Service" : null
        ].filter(Boolean);
        
        if (selectedTypes.length === 1) {
          setSelectedProviderType(selectedTypes[0]!);
        } else if (selectedTypes.length > 1) {
          // Multiple types selected, keep as "all" but user can filter
          setSelectedProviderType("all");
        }
      }
    }
    
    // Parse treatment types (mental health subcategories)
    const treatmentsParam = searchParams.get("treatments");
    if (treatmentsParam) {
      const treatments = treatmentsParam.split(",").filter(Boolean);
      setSelectedTreatmentTypes(treatments);
      console.log("🧠 Parsed Mental Health Treatments:", treatments);
    }
    
    // Parse specialties into appropriate categories based on provider type
    const specialtiesParam = searchParams.get("specialties");
    if (specialtiesParam) {
      const specialtiesArray = specialtiesParam.split(",").filter(Boolean);
      
      // Determine where to map specialties based on the provider type
      if (initialType === "Physical Health") {
        setSelectedPhysicalHealthCategories(specialtiesArray);
        console.log("🏥 Parsed Physical Health Categories:", specialtiesArray);
      } else if (initialType === "Social Service") {
        setSelectedSocialServiceCategories(specialtiesArray);
        console.log("🤝 Parsed Social Service Categories:", specialtiesArray);
      } else {
        // For Mental Health or "all", keep as general specialties
        setSelectedSpecialties(specialtiesArray);
        console.log("📋 Parsed General Specialties:", specialtiesArray);
      }
    }
    
    // Parse social service subcategories
    const subcategoriesParam = searchParams.get("subcategories");
    if (subcategoriesParam) {
      const subcategoriesArray = subcategoriesParam.split(",").filter(Boolean);
      setSelectedSocialServiceCategories(prev => {
        // Merge with any existing selections from specialties, removing duplicates
        const merged = [...new Set([...prev, ...subcategoriesArray])];
        console.log("🤝 Merged Social Service Subcategories:", merged);
        return merged;
      });
    }
    
    // Parse age groups
    const ageGroupsParam = searchParams.get("ageGroups");
    if (ageGroupsParam) {
      setSelectedAgeGroups(ageGroupsParam.split(",").filter(Boolean));
    }
    
    // Parse languages
    const languagesParam = searchParams.get("languages");
    if (languagesParam) {
      setSelectedLanguages(languagesParam.split(",").filter(Boolean));
    }
    
    // Parse insurance
    const insuranceParam = searchParams.get("insurance");
    if (insuranceParam) {
      setSelectedInsurances(insuranceParam.split(",").filter(Boolean));
    }
    
    // Parse accepting new patients
    const acceptingNewParam = searchParams.get("acceptingNew");
    if (acceptingNewParam === "true") {
      setAcceptingNewOnly(true);
    }
    
    // Parse telehealth
    const telehealthParam = searchParams.get("telehealth");
    if (telehealthParam === "true") {
      setTelehealthOnly(true);
    }
  }, [initialQuery, initialType, searchParams]);

  // Lock body scroll when filters are open on mobile
  useEffect(() => {
    if (showFilters) {
      // Lock scroll on mobile only
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = '';
    };
  }, [showFilters]);

  // Fetch providers from Snowflake API via backend proxy
  useEffect(() => {
    const fetchProviders = async () => {
      // Build search query from current filters
      const queryParts: string[] = [];
      
      // Add search term
      if (searchTerm) {
        queryParts.push(searchTerm);
      }
      
      // Add specialties
      if (selectedSpecialties.length > 0) {
        queryParts.push(...selectedSpecialties);
      }
      
      // Add location
      if (locationSearch) {
        queryParts.push(locationSearch);
      }
      
      // Add insurance type
      if (selectedInsurances.length > 0) {
        if (selectedInsurances.includes('Medicaid')) {
          queryParts.push('accepting Medicaid');
        }
        if (selectedInsurances.includes('Medicare')) {
          queryParts.push('accepting Medicare');
        }
        if (selectedInsurances.some(ins => !['Medicaid', 'Medicare'].includes(ins))) {
          queryParts.push('accepting private insurance');
        }
      }
      
      const query = queryParts.join(' ') || 'healthcare providers';
      
      // Build filters
      const filters: any = {};
      
      // Provider category filter
      if (selectedProviderType !== 'all') {
        filters.providerCategory = mapProviderTypeToCategory(selectedProviderType);
      }
      
      // State filter from location
      const state = extractState(locationSearch);
      if (state) {
        filters.state = state;
      }
      
      // Insurance filters
      if (selectedInsurances.includes('Medicaid')) {
        filters.acceptsMedicaid = true;
      }
      if (selectedInsurances.includes('Medicare')) {
        filters.acceptsMedicare = true;
      }
      if (selectedInsurances.some(ins => !['Medicaid', 'Medicare'].includes(ins))) {
        filters.acceptsPrivateInsurance = true;
      }
      
      console.log('🔍 Fetching providers with query:', query, 'filters:', filters);
      
      setIsLoadingApi(true);
      setApiError(null);
      
      try {
        const providers = await searchProviders({ query, filters });
        setApiProviders(providers);
        setApiError(null);
        console.log('✅ Fetched providers from API:', providers.length);
        
        // Check if token is expired after the call
        if (isSnowflakeTokenExpired()) {
          setShowTokenExpiredBanner(true);
        }
      } catch (error: any) {
        // This catch block should rarely be reached since searchProviders returns [] on error
        // Fall back to mock data silently
        setApiError(null);
        setApiProviders([]);
        
        // Check if token is expired
        if (isSnowflakeTokenExpired()) {
          setShowTokenExpiredBanner(true);
        }
      } finally {
        setIsLoadingApi(false);
      }
    };
    
    fetchProviders();
  }, [searchTerm, locationSearch, selectedProviderType, selectedSpecialties, selectedInsurances]);

  // Extract unique values for filters
  const specialties = useMemo(() => {
    let filtered = selectedProviderType === "all" 
      ? mockProviders 
      : mockProviders.filter(p => p.providerType === selectedProviderType);
    
    // Also filter by active categories if set
    if (activeCategories.length > 0) {
      const hasMentalHealth = activeCategories.includes("Mental Health");
      const hasPhysicalHealth = activeCategories.includes("Physical Health");
      const hasSocialServices = activeCategories.some(cat => 
        ["Housing", "Food", "Transportation", "Employment", "Education", "Safety"].includes(cat)
      );
      
      const allowedTypes = [
        hasMentalHealth ? "Mental Health" : null,
        hasPhysicalHealth ? "Physical Health" : null,
        hasSocialServices ? "Social Service" : null
      ].filter(Boolean);
      
      filtered = filtered.filter(p => allowedTypes.includes(p.providerType));
    }
    
    const allSpecialties = filtered.flatMap(p => p.specialty);
    return Array.from(new Set(allSpecialties)).sort();
  }, [selectedProviderType, activeCategories]);

  const insuranceOptions = useMemo(() => {
    const allInsurance = mockProviders.flatMap(p => p.insurance);
    return Array.from(new Set(allInsurance)).sort();
  }, []);

  const genderOptions = useMemo(() => {
    const filtered = selectedProviderType === "all" 
      ? mockProviders 
      : mockProviders.filter(p => p.providerType === selectedProviderType);
    const allGenders = filtered.map(p => p.gender).filter(Boolean);
    return Array.from(new Set(allGenders)).sort();
  }, [selectedProviderType]);

  const ageGroupOptions = useMemo(() => {
    const filtered = selectedProviderType === "all" 
      ? mockProviders 
      : mockProviders.filter(p => p.providerType === selectedProviderType);
    const allAgeGroups = filtered.flatMap(p => p.ageGroups || []);
    return Array.from(new Set(allAgeGroups)).sort();
  }, [selectedProviderType]);

  const ethnicityOptions = useMemo(() => {
    const filtered = selectedProviderType === "all" 
      ? mockProviders 
      : mockProviders.filter(p => p.providerType === selectedProviderType);
    const allEthnicities = filtered.map(p => p.ethnicity).filter(Boolean) as string[];
    return Array.from(new Set(allEthnicities)).sort();
  }, [selectedProviderType]);

  const languageOptions = useMemo(() => {
    const filtered = selectedProviderType === "all" 
      ? mockProviders 
      : mockProviders.filter(p => p.providerType === selectedProviderType);
    const allLanguages = filtered.flatMap(p => p.languages);
    return Array.from(new Set(allLanguages)).sort();
  }, [selectedProviderType]);

  const treatmentTypeOptions = useMemo(() => {
    const filtered = selectedProviderType === "Mental Health"
      ? mockProviders.filter(p => p.providerType === "Mental Health")
      : [];
    const allTreatmentTypes = filtered.flatMap(p => p.treatmentTypes || []);
    return Array.from(new Set(allTreatmentTypes)).sort();
  }, [selectedProviderType]);

  // Filter providers
  const filteredProviders = useMemo(() => {
    // Use API providers if available, otherwise fall back to mock data
    const allProviders = apiProviders.length > 0 ? apiProviders : mockProviders;
    
    console.log("🔍 ProviderSearch - Filtering with:", {
      dataSource: apiProviders.length > 0 ? 'Snowflake API' : 'Mock Data',
      selectedProviderType,
      searchTerm,
      locationSearch,
      selectedSpecialties,
      selectedInsurances,
      selectedGenders,
      selectedAgeGroups,
      selectedEthnicities,
      selectedLanguages,
      selectedTreatmentTypes,
      selectedPhysicalHealthCategories,
      selectedSocialServiceCategories,
      acceptingNewOnly,
      telehealthOnly,
      activeCategories,
      totalProviders: allProviders.length,
      apiProvidersCount: apiProviders.length
    });

    const filtered = allProviders.filter(provider => {
      // Active categories filter - only show providers that match active categories
      if (activeCategories.length > 0) {
        const hasMentalHealth = activeCategories.includes("Mental Health");
        const hasPhysicalHealth = activeCategories.includes("Physical Health");
        const hasSocialServices = activeCategories.some(cat => 
          ["Housing", "Food", "Transportation", "Employment", "Education", "Safety"].includes(cat)
        );
        
        const allowedTypes = [
          hasMentalHealth ? "Mental Health" : null,
          hasPhysicalHealth ? "Physical Health" : null,
          hasSocialServices ? "Social Service" : null
        ].filter(Boolean);
        
        if (!allowedTypes.includes(provider.providerType)) {
          return false;
        }
      }
      
      // Provider type filter
      if (selectedProviderType !== "all" && provider.providerType !== selectedProviderType) {
        return false;
      }

      // Physical Health subcategory filter
      if (selectedPhysicalHealthCategories.length > 0 && provider.providerType === "Physical Health") {
        // Check if provider's specialty matches any selected physical health category
        const hasMatchingCategory = selectedPhysicalHealthCategories.some(category => 
          provider.specialty.some(s => s.toLowerCase().includes(category.toLowerCase()))
        );
        if (!hasMatchingCategory) {
          return false;
        }
      }

      // Social Service subcategory filter
      if (selectedSocialServiceCategories.length > 0 && provider.providerType === "Social Service") {
        // Check if provider's specialty matches any selected social service category
        const hasMatchingCategory = selectedSocialServiceCategories.some(category => 
          provider.specialty.some(s => s.toLowerCase().includes(category.toLowerCase()))
        );
        if (!hasMatchingCategory) {
          return false;
        }
      }

      // Search term filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
          provider.name.toLowerCase().includes(searchLower) ||
          provider.specialty.some(s => s.toLowerCase().includes(searchLower)) ||
          provider.credentials.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Location filter - Disabled to show all providers regardless of location
      // if (locationSearch) {
      //   const locationLower = locationSearch.toLowerCase();
      //   if (!provider.location.toLowerCase().includes(locationLower)) {
      //     return false;
      //   }
      // }

      // Specialty filter
      if (selectedSpecialties.length > 0 && !selectedSpecialties.some(s => provider.specialty.includes(s))) {
        return false;
      }

      // Insurance filter
      if (selectedInsurances.length > 0 && !selectedInsurances.some(i => provider.insurance.includes(i))) {
        return false;
      }

      // Gender filter
      if (selectedGenders.length > 0 && !selectedGenders.includes(provider.gender)) {
        return false;
      }

      // Age Group filter
      if (selectedAgeGroups.length > 0 && !selectedAgeGroups.some(a => provider.ageGroups?.includes(a))) {
        return false;
      }

      // Ethnicity filter
      if (selectedEthnicities.length > 0 && !selectedEthnicities.includes(provider.ethnicity)) {
        return false;
      }

      // Language filter
      if (selectedLanguages.length > 0 && !selectedLanguages.some(l => provider.languages.includes(l))) {
        return false;
      }

      // Treatment Type filter
      if (selectedTreatmentTypes.length > 0 && !selectedTreatmentTypes.some(t => provider.treatmentTypes?.includes(t))) {
        return false;
      }

      // Accepting new patients filter
      if (acceptingNewOnly && !provider.acceptingNewPatients) {
        return false;
      }

      // Telehealth filter
      if (telehealthOnly && !provider.telehealth) {
        return false;
      }

      return true;
    });

    console.log("✅ ProviderSearch - Filtered results:", filtered.length);
    
    // Add distance to providers that don't have it (for demo purposes)
    // In production, this would be calculated based on actual user location and provider coordinates
    const providersWithDistance = filtered.map((provider, index) => {
      if (provider.distance === undefined) {
        // Generate a realistic random distance between 0.5 and 45 miles
        const randomDistance = Math.random() * 44.5 + 0.5;
        return { ...provider, distance: randomDistance };
      }
      return provider;
    });
    
    return providersWithDistance;
  }, [apiProviders, searchTerm, locationSearch, selectedProviderType, selectedSpecialties, selectedInsurances, selectedGenders, selectedAgeGroups, selectedEthnicities, selectedLanguages, selectedTreatmentTypes, selectedPhysicalHealthCategories, selectedSocialServiceCategories, acceptingNewOnly, telehealthOnly, activeCategories]);

  const activeFiltersCount = [
    selectedProviderType !== "all",
    selectedSpecialties.length > 0,
    selectedInsurances.length > 0,
    selectedGenders.length > 0,
    selectedAgeGroups.length > 0,
    selectedEthnicities.length > 0,
    selectedLanguages.length > 0,
    selectedTreatmentTypes.length > 0,
    selectedPhysicalHealthCategories.length > 0,
    selectedSocialServiceCategories.length > 0,
    selectedDistance !== 50, // Count as active filter if not default
    telehealthOnly
  ].filter(Boolean).length;

  const resetFilters = () => {
    setSelectedProviderType("all");
    setSelectedSpecialties([]);
    setSelectedInsurances([]);
    setSelectedGenders([]);
    setSelectedAgeGroups([]);
    setSelectedEthnicities([]);
    setSelectedLanguages([]);
    setSelectedTreatmentTypes([]);
    setSelectedPhysicalHealthCategories([]);
    setSelectedSocialServiceCategories([]);
    setSelectedDistance(50); // Reset to default 50 miles
    setTelehealthOnly(false);
  };

  const clearAllFilters = () => {
    setSelectedSpecialties([]);
    setSelectedTreatmentTypes([]);
    setSelectedGenders([]);
    setSelectedEthnicities([]);
  };

  // Dynamic tabs based on active categories
  const availableTabs = useMemo(() => {
    const tabs = [{ label: "All Providers", value: "all" }];
    
    if (activeCategories.length > 0) {
      const hasMentalHealth = activeCategories.includes("Mental Health");
      const hasPhysicalHealth = activeCategories.includes("Physical Health");
      const hasSocialServices = activeCategories.some(cat => 
        ["Housing", "Food", "Transportation", "Employment", "Education", "Safety"].includes(cat)
      );
      
      if (hasMentalHealth) {
        tabs.push({ label: "Mental Health", value: "Mental Health" });
      }
      if (hasPhysicalHealth) {
        tabs.push({ label: "Physical Health", value: "Physical Health" });
      }
      if (hasSocialServices) {
        tabs.push({ label: "Social Services", value: "Social Service" });
      }
    } else {
      // No categories specified, show all tabs
      tabs.push(
        { label: "Mental Health", value: "Mental Health" },
        { label: "Physical Health", value: "Physical Health" },
        { label: "Social Services", value: "Social Service" }
      );
    }
    
    return tabs;
  }, [activeCategories]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-3 md:px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoImage} alt="Care Match" className="h-6 md:h-8" />
            </Link>
            <nav className="flex items-center gap-3 md:gap-6">
              {/* Help Phone Number */}
              <a 
                href="tel:8885150595" 
                className="flex items-center gap-1.5 text-xs md:text-sm text-gray-700 hover:text-purple-600 transition-colors"
              >
                <Phone className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">Call (888) 515-0595 For Help</span>
                <span className="sm:hidden">(888) 515-0595</span>
              </a>
              
              {isAuthenticated ? (
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="flex items-center gap-2 text-xs md:text-sm">
                    <User className="h-3 w-3 md:h-4 md:w-4 text-gray-600" />
                    <span className="text-gray-700 hidden sm:inline">{currentUser?.firstName} {currentUser?.lastName}</span>
                    <span className="text-gray-700 sm:hidden">{currentUser?.firstName}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleLogout} className="text-xs md:text-sm">
                    Logout
                  </Button>
                </div>
              ) : (
                null
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="sticky top-[60px] md:top-0 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-3 md:px-4 py-3 md:py-6">
          <div className="max-w-4xl mx-auto">
            

            {/* Additional Filters */}
            <div className="mt-3 md:mt-4 space-y-2">
              {/* All Filters Row */}
              <div className="flex flex-wrap gap-1.5 md:gap-2 items-center">
                <span className="text-sm font-medium text-gray-700 mr-1">Filter by:</span>
                
                {/* 1. Distance */}
                <Chip
                  selected={selectedDistance !== 50}
                  onClick={() => {
                    setShowDistanceSelector(!showDistanceSelector);
                    if (!showDistanceSelector) {
                      setShowFilters(false);
                      setShowInsuranceSelector(false);
                      setShowOtherPreferencesSelector(false);
                    }
                  }}
                >
                  {selectedDistance !== 50 ? `${selectedDistance} miles` : "Distance"}
                </Chip>
                
                {/* 2. Telehealth */}
                {(selectedProviderType === "Mental Health" || selectedProviderType === "Physical Health" || selectedProviderType === "all") && (
                  <Chip
                    selected={telehealthOnly}
                    onClick={() => setTelehealthOnly(!telehealthOnly)}
                    icon={telehealthOnly ? "checkmark" : "none"}
                  >
                    Telehealth Only
                  </Chip>
                )}
                
                {/* 3. Physical Health */}
                <Chip
                  selected={selectedProviderType === "Physical Health" || (selectedProviderType === "all" && (selectedPhysicalHealthCategories.length > 0 || initiallySelectedTypes.physicalHealth))}
                  onClick={() => {
                    const isCurrentlySelected = selectedProviderType === "Physical Health";
                    const isSelectedViaInitial = selectedProviderType === "all" && initiallySelectedTypes.physicalHealth;
                    const isInMultiSelectMode = selectedProviderType === "all";
                    
                    if (isCurrentlySelected) {
                      // Deselect and go back to "all"
                      setSelectedProviderType("all");
                    } else if (isInMultiSelectMode) {
                      // We're in multi-select mode, just toggle this chip
                      setInitiallySelectedTypes(prev => ({ ...prev, physicalHealth: !prev.physicalHealth }));
                      // Auto-open More Filters if selecting
                      if (!isSelectedViaInitial) {
                        setShowFilters(true);
                        if (!openFilterSections.includes("physicalHealthCategories")) {
                          setOpenFilterSections(prev => [...prev, "physicalHealthCategories"]);
                        }
                      }
                    } else {
                      // Select this type (single-select mode)
                      setSelectedProviderType("Physical Health");
                      // Auto-open More Filters section
                      setShowFilters(true);
                      // Auto-open Physical Health Services filter
                      if (!openFilterSections.includes("physicalHealthCategories")) {
                        setOpenFilterSections(prev => [...prev, "physicalHealthCategories"]);
                      }
                    }
                  }}
                  icon={(selectedProviderType === "Physical Health" || (selectedProviderType === "all" && (selectedPhysicalHealthCategories.length > 0 || initiallySelectedTypes.physicalHealth))) ? "checkmark" : "none"}
                  count={selectedPhysicalHealthCategories.length || undefined}
                >
                  Physical Health
                </Chip>
                
                {/* 4. Mental Health */}
                <Chip
                  selected={selectedProviderType === "Mental Health" || (selectedProviderType === "all" && (selectedTreatmentTypes.length > 0 || initiallySelectedTypes.mentalHealth))}
                  onClick={() => {
                    const isCurrentlySelected = selectedProviderType === "Mental Health";
                    const isSelectedViaInitial = selectedProviderType === "all" && initiallySelectedTypes.mentalHealth;
                    const isInMultiSelectMode = selectedProviderType === "all";
                    
                    if (isCurrentlySelected) {
                      // Deselect and go back to "all"
                      setSelectedProviderType("all");
                    } else if (isInMultiSelectMode) {
                      // We're in multi-select mode, just toggle this chip
                      setInitiallySelectedTypes(prev => ({ ...prev, mentalHealth: !prev.mentalHealth }));
                      // Auto-open More Filters if selecting
                      if (!isSelectedViaInitial) {
                        setShowFilters(true);
                        if (!openFilterSections.includes("mentalHealthCategories")) {
                          setOpenFilterSections(prev => [...prev, "mentalHealthCategories"]);
                        }
                      }
                    } else {
                      // Select this type (single-select mode)
                      setSelectedProviderType("Mental Health");
                      // Auto-open More Filters section
                      setShowFilters(true);
                      // Auto-open Mental Health Treatment Types filter
                      if (!openFilterSections.includes("mentalHealthCategories")) {
                        setOpenFilterSections(prev => [...prev, "mentalHealthCategories"]);
                      }
                    }
                  }}
                  icon={(selectedProviderType === "Mental Health" || (selectedProviderType === "all" && (selectedTreatmentTypes.length > 0 || initiallySelectedTypes.mentalHealth))) ? "checkmark" : "none"}
                  count={selectedTreatmentTypes.length || undefined}
                >
                  Mental Health
                </Chip>
                
                {/* 5. Social Service */}
                <Chip
                  selected={selectedProviderType === "Social Service" || (selectedProviderType === "all" && (selectedSocialServiceCategories.length > 0 || initiallySelectedTypes.socialService))}
                  onClick={() => {
                    const isCurrentlySelected = selectedProviderType === "Social Service";
                    const isSelectedViaInitial = selectedProviderType === "all" && initiallySelectedTypes.socialService;
                    const isInMultiSelectMode = selectedProviderType === "all";
                    
                    if (isCurrentlySelected) {
                      // Deselect and go back to "all"
                      setSelectedProviderType("all");
                    } else if (isInMultiSelectMode) {
                      // We're in multi-select mode, just toggle this chip
                      setInitiallySelectedTypes(prev => ({ ...prev, socialService: !prev.socialService }));
                      // Auto-open More Filters if selecting
                      if (!isSelectedViaInitial) {
                        setShowFilters(true);
                        if (!openFilterSections.includes("socialServiceCategories")) {
                          setOpenFilterSections(prev => [...prev, "socialServiceCategories"]);
                        }
                      }
                    } else {
                      // Select this type (single-select mode)
                      setSelectedProviderType("Social Service");
                      // Auto-open More Filters section
                      setShowFilters(true);
                      // Auto-open Social Service Types filter
                      if (!openFilterSections.includes("socialServiceCategories")) {
                        setOpenFilterSections(prev => [...prev, "socialServiceCategories"]);
                      }
                    }
                  }}
                  icon={(selectedProviderType === "Social Service" || (selectedProviderType === "all" && (selectedSocialServiceCategories.length > 0 || initiallySelectedTypes.socialService))) ? "checkmark" : "none"}
                  count={selectedSocialServiceCategories.length || undefined}
                >
                  Social Service
                </Chip>
                
                {/* 6. More Filters */}
                <Chip
                  selected={selectedGenders.length > 0 || selectedInsurances.length > 0 || selectedAgeGroups.length > 0 || selectedEthnicities.length > 0}
                  onClick={() => {
                    setShowFilters(!showFilters);
                    if (!showFilters) {
                      setShowInsuranceSelector(false);
                      setShowOtherPreferencesSelector(false);
                      setShowDistanceSelector(false);
                    }
                  }}
                  count={(selectedGenders.length + selectedInsurances.length + selectedAgeGroups.length + selectedEthnicities.length) || undefined}
                >
                  More Filters
                </Chip>
                
                {activeFiltersCount > 0 && (
                  <FigmaButton
                    variant="tertiary"
                    onClick={resetFilters}
                  >
                    Clear all
                  </FigmaButton>
                )}
              </div>
            </div>

            {/* Distance Selector */}
            {showDistanceSelector && (
              <Card className="mt-4">
                <CardContent className="p-3 md:p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-gray-900">Distance</h3>
                      <div className="bg-purple-50 px-2 py-0.5 rounded text-xs font-semibold text-[#6B21A8]">
                        {selectedDistance === 100 ? "Any" : `${selectedDistance} mi`}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowDistanceSelector(false)}
                      className="h-auto p-1"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="px-2">
                      <Slider
                        value={[selectedDistance]}
                        onValueChange={(value) => setSelectedDistance(value[0])}
                        min={5}
                        max={100}
                        step={5}
                        className="w-full"
                      />
                      <div className="flex justify-between mt-1.5 text-xs text-gray-500">
                        <span>5</span>
                        <span>25</span>
                        <span>50</span>
                        <span>75</span>
                        <span>100+</span>
                      </div>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      <button
                        onClick={() => setSelectedDistance(10)}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                          selectedDistance === 10
                            ? "bg-[#6B21A8] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        10 mi
                      </button>
                      <button
                        onClick={() => setSelectedDistance(25)}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                          selectedDistance === 25
                            ? "bg-[#6B21A8] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        25 mi
                      </button>
                      <button
                        onClick={() => setSelectedDistance(50)}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                          selectedDistance === 50
                            ? "bg-[#6B21A8] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        50 mi
                      </button>
                      <button
                        onClick={() => setSelectedDistance(100)}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                          selectedDistance === 100
                            ? "bg-[#6B21A8] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        Any
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Expandable Filters */}
            {showFilters && !showDistanceSelector && (
              <>
                {/* Mobile overlay backdrop */}
                <div 
                  className="md:hidden fixed inset-0 bg-black/50 z-40"
                  onClick={() => setShowFilters(false)}
                />
                
                {/* Filters panel - Full screen on mobile, card on desktop */}
                <div className="md:mt-4 md:relative fixed md:static inset-0 md:inset-auto z-50 md:z-auto">
                  <Card className="h-full md:h-auto rounded-none md:rounded-lg">
                    <CardContent className="p-0 h-full flex flex-col">
                      {/* Compact Header - Sticky */}
                      <div className="flex items-center justify-between mb-2 px-3 pt-3 md:px-4 md:pt-4 bg-white z-10 flex-shrink-0">
                        <h3 className="text-sm font-semibold text-gray-900">Filters</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowFilters(false)}
                          className="h-auto p-1"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Accordion Sections - Scrollable */}
                      <div 
                        className="space-y-1 px-3 pb-3 md:px-4 md:pb-4 flex-1 overflow-y-auto md:max-h-[60vh] overscroll-contain"
                        onTouchMove={(e) => e.stopPropagation()}
                      >
                    {/* Insurance */}
                    <div className="border rounded-md">
                      <button
                        onClick={() => toggleFilterSection("insurance")}
                        className="w-full flex items-center justify-between px-3 py-2.5 text-left hover:bg-gray-50 transition-colors rounded-md"
                      >
                        <div className="flex items-center gap-2 flex-1">
                          <h4 className="text-sm text-gray-900">Insurance</h4>
                          {selectedInsurances.length > 0 && (
                            <Badge variant="secondary" className="bg-purple-100 text-[#6B21A8] text-xs h-5 px-1.5">
                              {selectedInsurances.length}
                            </Badge>
                          )}
                        </div>
                        <ChevronDown 
                          className={`h-3.5 w-3.5 text-gray-400 transition-transform ${
                            openFilterSections.includes("insurance") ? "rotate-180" : ""
                          }`} 
                        />
                      </button>
                      {openFilterSections.includes("insurance") && (
                        <div className="px-3 pb-3 pt-1 border-t">
                          {/* Common Insurance Options */}
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            {insuranceOptions.map((insurance) => (
                              <div key={insurance} className="flex items-center gap-1.5">
                                <Checkbox
                                  id={`insurance-selector-${insurance}`}
                                  checked={selectedInsurances.includes(insurance)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      setSelectedInsurances([...selectedInsurances, insurance]);
                                    } else {
                                      setSelectedInsurances(selectedInsurances.filter(i => i !== insurance));
                                    }
                                  }}
                                />
                                <label
                                  htmlFor={`insurance-selector-${insurance}`}
                                  className="text-xs text-gray-700 cursor-pointer select-none leading-tight"
                                >
                                  {insurance}
                                </label>
                              </div>
                            ))}
                          </div>

                          {/* Custom Insurance Input */}
                          <div className="pt-2 border-t">
                            <div className="flex gap-2">
                              <Input
                                id="custom-insurance"
                                type="text"
                                placeholder="Add other insurance"
                                value={customInsurance}
                                onChange={(e) => setCustomInsurance(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' && customInsurance.trim()) {
                                    if (!selectedInsurances.includes(customInsurance.trim())) {
                                      setSelectedInsurances([...selectedInsurances, customInsurance.trim()]);
                                    }
                                    setCustomInsurance("");
                                  }
                                }}
                                className="flex-1 text-xs h-8"
                              />
                              <Button
                                size="sm"
                                onClick={() => {
                                  if (customInsurance.trim() && !selectedInsurances.includes(customInsurance.trim())) {
                                    setSelectedInsurances([...selectedInsurances, customInsurance.trim()]);
                                    setCustomInsurance("");
                                  }
                                }}
                                disabled={!customInsurance.trim()}
                                className="h-8 text-xs px-3"
                              >
                                Add
                              </Button>
                            </div>
                            {selectedInsurances.some(ins => !insuranceOptions.includes(ins)) && (
                              <div className="mt-2">
                                <div className="flex flex-wrap gap-1.5">
                                  {selectedInsurances
                                    .filter(ins => !insuranceOptions.includes(ins))
                                    .map((insurance) => (
                                      <Badge key={insurance} variant="secondary" className="gap-1 text-xs h-6">
                                        {insurance}
                                        <button
                                          onClick={() => setSelectedInsurances(selectedInsurances.filter(i => i !== insurance))}
                                          className="ml-0.5 hover:text-red-600"
                                        >
                                          <X className="h-3 w-3" />
                                        </button>
                                      </Badge>
                                    ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Age Groups */}
                    {ageGroupOptions.length > 0 && (
                      <div className="border rounded-md">
                        <button
                          onClick={() => toggleFilterSection("age")}
                          className="w-full flex items-center justify-between px-3 py-2.5 text-left hover:bg-gray-50 transition-colors rounded-md"
                        >
                          <div className="flex items-center gap-2 flex-1">
                            <h4 className="text-sm text-gray-900">Age</h4>
                            {selectedAgeGroups.length > 0 && (
                              <Badge variant="secondary" className="bg-teal-100 text-teal-700 text-xs h-5 px-1.5">
                                {selectedAgeGroups.length}
                              </Badge>
                            )}
                          </div>
                          <ChevronDown 
                            className={`h-3.5 w-3.5 text-gray-400 transition-transform ${
                              openFilterSections.includes("age") ? "rotate-180" : ""
                            }`} 
                          />
                        </button>
                        {openFilterSections.includes("age") && (
                          <div className="px-3 pb-3 pt-1 border-t">
                            <div className="grid grid-cols-2 gap-2">
                              {ageGroupOptions.map((age) => (
                                <div key={age} className="flex items-center gap-1.5">
                                  <Checkbox
                                    id={`age-pref-${age}`}
                                    checked={selectedAgeGroups.includes(age)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedAgeGroups([...selectedAgeGroups, age]);
                                      } else {
                                        setSelectedAgeGroups(selectedAgeGroups.filter(a => a !== age));
                                      }
                                    }}
                                  />
                                  <label
                                    htmlFor={`age-pref-${age}`}
                                    className="text-xs text-gray-700 cursor-pointer select-none leading-tight"
                                  >
                                    {age}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    {/* Provider Gender */}
                    {genderOptions.length > 0 && selectedProviderType !== "Social Service" && (
                      <div className="border rounded-md">
                        <button
                          onClick={() => toggleFilterSection("gender")}
                          className="w-full flex items-center justify-between px-3 py-2.5 text-left hover:bg-gray-50 transition-colors rounded-md"
                        >
                          <div className="flex items-center gap-2 flex-1">
                            <h4 className="text-sm text-gray-900">Provider Gender</h4>
                            {selectedGenders.length > 0 && (
                              <Badge variant="secondary" className="bg-pink-100 text-pink-700 text-xs h-5 px-1.5">
                                {selectedGenders.length}
                              </Badge>
                            )}
                          </div>
                          <ChevronDown 
                            className={`h-3.5 w-3.5 text-gray-400 transition-transform ${
                              openFilterSections.includes("gender") ? "rotate-180" : ""
                            }`} 
                          />
                        </button>
                        {openFilterSections.includes("gender") && (
                          <div className="px-3 pb-3 pt-1 border-t">
                            <div className="grid grid-cols-2 gap-2">
                              {genderOptions.filter(g => g !== "N/A").map((gender) => (
                                <div key={gender} className="flex items-center gap-1.5">
                                  <Checkbox
                                    id={`gender-${gender}`}
                                    checked={selectedGenders.includes(gender)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedGenders([...selectedGenders, gender]);
                                      } else {
                                        setSelectedGenders(selectedGenders.filter(g => g !== gender));
                                      }
                                    }}
                                  />
                                  <label
                                    htmlFor={`gender-${gender}`}
                                    className="text-xs text-gray-700 cursor-pointer select-none leading-tight"
                                  >
                                    {gender}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Provider Ethnicity */}
                    {ethnicityOptions.length > 0 && selectedProviderType !== "Social Service" && (
                      <div className="border rounded-md">
                        <button
                          onClick={() => toggleFilterSection("ethnicity")}
                          className="w-full flex items-center justify-between px-3 py-2.5 text-left hover:bg-gray-50 transition-colors rounded-md"
                        >
                          <div className="flex items-center gap-2 flex-1">
                            <h4 className="text-sm text-gray-900">Provider Ethnicity</h4>
                            {selectedEthnicities.length > 0 && (
                              <Badge variant="secondary" className="bg-cyan-100 text-cyan-700 text-xs h-5 px-1.5">
                                {selectedEthnicities.length}
                              </Badge>
                            )}
                          </div>
                          <ChevronDown 
                            className={`h-3.5 w-3.5 text-gray-400 transition-transform ${
                              openFilterSections.includes("ethnicity") ? "rotate-180" : ""
                            }`} 
                          />
                        </button>
                        {openFilterSections.includes("ethnicity") && (
                          <div className="px-3 pb-3 pt-1 border-t">
                            <div className="grid grid-cols-2 gap-2">
                              {ethnicityOptions.filter(e => e !== "Diverse Staff").map((ethnicity) => (
                                <div key={ethnicity} className="flex items-center gap-1.5">
                                  <Checkbox
                                    id={`ethnicity-${ethnicity}`}
                                    checked={selectedEthnicities.includes(ethnicity)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedEthnicities([...selectedEthnicities, ethnicity]);
                                      } else {
                                        setSelectedEthnicities(selectedEthnicities.filter(e => e !== ethnicity));
                                      }
                                    }}
                                  />
                                  <label
                                    htmlFor={`ethnicity-${ethnicity}`}
                                    className="text-xs text-gray-700 cursor-pointer select-none leading-tight"
                                  >
                                    {ethnicity}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Mental Health Treatment Categories */}
                    {(selectedProviderType === "Mental Health" || (selectedProviderType === "all" && initiallySelectedTypes.mentalHealth)) && (
                      <div className="border rounded-md">
                        <button
                          onClick={() => toggleFilterSection("mentalHealthCategories")}
                          className="w-full flex items-center justify-between px-3 py-2.5 text-left hover:bg-gray-50 transition-colors rounded-md"
                        >
                          <div className="flex items-center gap-2 flex-1">
                            <h4 className="text-sm text-gray-900">Mental Health Treatment Types</h4>
                            {selectedTreatmentTypes.length > 0 && (
                              <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 text-xs h-5 px-1.5">
                                {selectedTreatmentTypes.length}
                              </Badge>
                            )}
                          </div>
                          <ChevronDown 
                            className={`h-3.5 w-3.5 text-gray-400 transition-transform ${
                              openFilterSections.includes("mentalHealthCategories") ? "rotate-180" : ""
                            }`} 
                          />
                        </button>
                        {openFilterSections.includes("mentalHealthCategories") && (
                          <div className="px-3 pb-3 pt-1 border-t max-h-[400px] overflow-y-auto">
                            <div className="grid grid-cols-1 gap-2">
                              {mentalHealthTreatmentTypes.map((treatment) => (
                                <div key={treatment} className="flex items-center gap-1.5">
                                  <Checkbox
                                    id={`treatment-${treatment}`}
                                    checked={selectedTreatmentTypes.includes(treatment)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedTreatmentTypes([...selectedTreatmentTypes, treatment]);
                                      } else {
                                        setSelectedTreatmentTypes(selectedTreatmentTypes.filter(t => t !== treatment));
                                      }
                                    }}
                                  />
                                  <label
                                    htmlFor={`treatment-${treatment}`}
                                    className="text-xs text-gray-700 cursor-pointer select-none leading-tight"
                                  >
                                    {treatment}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Physical Health Categories */}
                    {(selectedProviderType === "Physical Health" || (selectedProviderType === "all" && initiallySelectedTypes.physicalHealth)) && (
                      <div className="border rounded-md">
                        <button
                          onClick={() => toggleFilterSection("physicalHealthCategories")}
                          className="w-full flex items-center justify-between px-3 py-2.5 text-left hover:bg-gray-50 transition-colors rounded-md"
                        >
                          <div className="flex items-center gap-2 flex-1">
                            <h4 className="text-sm text-gray-900">Physical Health Services</h4>
                            {selectedPhysicalHealthCategories.length > 0 && (
                              <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs h-5 px-1.5">
                                {selectedPhysicalHealthCategories.length}
                              </Badge>
                            )}
                          </div>
                          <ChevronDown 
                            className={`h-3.5 w-3.5 text-gray-400 transition-transform ${
                              openFilterSections.includes("physicalHealthCategories") ? "rotate-180" : ""
                            }`} 
                          />
                        </button>
                        {openFilterSections.includes("physicalHealthCategories") && (
                          <div className="px-3 pb-3 pt-1 border-t">
                            <div className="grid grid-cols-2 gap-2">
                              {Object.keys(physicalHealthCategories).map((category) => (
                                <div key={category} className="flex items-center gap-1.5">
                                  <Checkbox
                                    id={`physical-health-${category}`}
                                    checked={selectedPhysicalHealthCategories.includes(category)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedPhysicalHealthCategories([...selectedPhysicalHealthCategories, category]);
                                      } else {
                                        setSelectedPhysicalHealthCategories(selectedPhysicalHealthCategories.filter(c => c !== category));
                                      }
                                    }}
                                  />
                                  <label
                                    htmlFor={`physical-health-${category}`}
                                    className="text-xs text-gray-700 cursor-pointer select-none leading-tight"
                                  >
                                    {category}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Social Service Categories */}
                    {(selectedProviderType === "Social Service" || (selectedProviderType === "all" && initiallySelectedTypes.socialService)) && (
                      <div className="border rounded-md">
                        <button
                          onClick={() => toggleFilterSection("socialServiceCategories")}
                          className="w-full flex items-center justify-between px-3 py-2.5 text-left hover:bg-gray-50 transition-colors rounded-md"
                        >
                          <div className="flex items-center gap-2 flex-1">
                            <h4 className="text-sm text-gray-900">Social Service Types</h4>
                            {selectedSocialServiceCategories.length > 0 && (
                              <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs h-5 px-1.5">
                                {selectedSocialServiceCategories.length}
                              </Badge>
                            )}
                          </div>
                          <ChevronDown 
                            className={`h-3.5 w-3.5 text-gray-400 transition-transform ${
                              openFilterSections.includes("socialServiceCategories") ? "rotate-180" : ""
                            }`} 
                          />
                        </button>
                        {openFilterSections.includes("socialServiceCategories") && (
                          <div className="px-3 pb-3 pt-1 border-t">
                            <div className="grid grid-cols-2 gap-2">
                              {["Food", "Housing", "Child Care", "Transportation", "Legal", "Clothing", "Furniture", "School Supplies", "Adult Day Care"].map((category) => (
                                <div key={category} className="flex items-center gap-1.5">
                                  <Checkbox
                                    id={`social-service-${category}`}
                                    checked={selectedSocialServiceCategories.includes(category)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedSocialServiceCategories([...selectedSocialServiceCategories, category]);
                                      } else {
                                        setSelectedSocialServiceCategories(selectedSocialServiceCategories.filter(c => c !== category));
                                      }
                                    }}
                                  />
                                  <label
                                    htmlFor={`social-service-${category}`}
                                    className="text-xs text-gray-700 cursor-pointer select-none leading-tight"
                                  >
                                    {category}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-3 md:px-4 py-3 md:py-8">
        <div className="max-w-4xl mx-auto">
          {/* Token Expired Banner */}
          {showTokenExpiredBanner && (
            <div className="mb-4 md:mb-6">
              <TokenExpiredBanner />
            </div>
          )}

          {/* Refinement Encouragement Banner */}
          {showRefinementBanner && (
            <Card className="mb-4 md:mb-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="p-3 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                      Get Better Matches with Personalized Search
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 mb-3">
                      Answer a few quick questions to help us find providers that are the perfect fit for your needs. It only takes 2-3 minutes and significantly improves your search results!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <Button
                        onClick={() => {
                          // Navigate back to refinement with current params
                          const params = new URLSearchParams();
                          if (initialQuery) params.append("q", initialQuery);
                          if (initialType !== "all") params.append("type", initialType);
                          if (categoriesFromHome.length > 0) params.append("categories", categoriesFromHome.join(","));
                          navigate(`/search-refinement${params.toString() ? `?${params.toString()}` : ''}`);
                        }}
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        Personalize My Search
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => setShowRefinementBanner(false)}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Maybe Later
                      </Button>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowRefinementBanner(false)}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* API Error Banner */}
          {apiError && (
            <Card className="mb-4 md:mb-6 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
              <CardContent className="p-3 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <Info className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                      Network Policy Restriction
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 mb-3 leading-relaxed">
                      Snowflake's network policy is currently blocking requests from the Supabase Edge Function. This is a security feature that requires configuration by your Snowflake administrator.
                      <br /><br />
                      <strong>To enable live data:</strong> Your Snowflake administrator needs to add Supabase Edge Function IP addresses to the network policy allowlist. See the server code comments for detailed instructions.
                      <br /><br />
                      <em className="text-sm">The app is currently using demonstration data to show functionality.</em>
                    </p>
                  </div>
                  <button
                    onClick={() => setApiError(null)}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mb-3 md:mb-6">
            <h2 className="font-bold text-gray-900 text-[24px]">
              {userName ? `${userName}'s Provider Matches` : 'Resources We Found For You'}
            </h2>
            {(searchTerm || locationSearch || userName) && (
              <p className="text-gray-600 text-sm md:text-base mt-1">
                {userName && !searchTerm && !locationSearch && `We've found providers tailored to your needs`}
                {searchTerm && `Searching for "${searchTerm}"`}
                {searchTerm && locationSearch && " "}
                {locationSearch && `near ${locationSearch}`}
              </p>
            )}
          </div>

          {/* Reference Number Banner */}
          <div className="mb-4 md:mb-6">
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-300 rounded-md p-2 md:p-2.5">
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 md:w-7 md:h-7 bg-amber-500 rounded-full flex items-center justify-center">
                    <Phone className="h-3 w-3 md:h-3.5 md:w-3.5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-700"><span className="font-semibold">Reference this number when calling us:</span></p>
                  <p className="text-base md:text-lg font-bold text-amber-900 tracking-wider">
                    {searchReferenceNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Provider Type Tabs */}
          <div className="mb-4 md:mb-6">
            <FigmaTabSwitcher
              tabs={availableTabs}
              activeTab={selectedProviderType}
              onTabChange={(value) => setSelectedProviderType(value)}
              className="max-w-3xl"
            />
            
            {/* Results count and view toggle */}
            <div className="mt-3 md:mt-4 flex items-center justify-between gap-2">
              <p className="text-xs md:text-sm text-gray-600">Showing {filteredProviders.length} {filteredProviders.length !== 1 ? 'resources' : 'resource'}{selectedProviderType !== "all" && ` in ${selectedProviderType}`}</p>
              
              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 border rounded-lg p-0.5 md:p-1">
                <button
                  onClick={() => setViewMode("list")}
                  className={`flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1.5 rounded-md text-xs md:text-sm font-medium transition-colors ${
                    viewMode === "list"
                      ? "bg-purple-600 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <List className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  <span className="hidden sm:inline">List</span>
                </button>
                <button
                  onClick={() => setViewMode("map")}
                  className={`flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1.5 rounded-md text-xs md:text-sm font-medium transition-colors ${
                    viewMode === "map"
                      ? "bg-purple-600 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <MapIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  <span className="hidden sm:inline">Map</span>
                </button>
              </div>
            </div>
          </div>

          {/* List or Map View */}
          {viewMode === "list" ? (
            <div className="space-y-3 md:space-y-4">
              {filteredProviders.length === 0 ? (
                <Card className="border-0 shadow-lg">
                  <CardContent className="py-12 md:py-16 px-6 md:px-12">
                    {/* Icon and Main Message */}
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-purple-100 mb-4">
                        <Search className="h-8 w-8 md:h-10 md:w-10 text-purple-600" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        No providers found in your area
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Don't worry! We're here to help you find the right care.
                      </p>
                    </div>

                    {/* Reassurance Section */}
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 md:p-8 mb-6 border border-purple-100">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                            <Phone className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">
                            We'll do the work for you
                          </h4>
                          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                            Our Care Companion team will personally search for available providers in your area and call you back with options that match your needs.
                          </p>
                        </div>
                      </div>
                      
                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <Button 
                          onClick={() => setShowAuthModal(true)}
                          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-6 text-base font-semibold shadow-md hover:shadow-lg transition-all"
                        >
                          <User className="h-5 w-5 mr-2" />
                          Tell Us About Yourself
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => {
                            const genesys = (window as any).Genesys;
                            if (genesys) {
                              try {
                                genesys('command', 'Messenger.open');
                              } catch (error) {
                                console.error('Error opening chat:', error);
                              }
                            }
                          }}
                          className="flex-1 border-2 border-purple-600 text-purple-700 hover:bg-purple-50 py-6 text-base font-semibold"
                        >
                          <Phone className="h-5 w-5 mr-2" />
                          Chat with Care Companion
                        </Button>
                      </div>
                    </div>

                    {/* Alternative Actions */}
                    <div className="space-y-4">
                      <p className="text-sm font-semibold text-gray-700 text-center mb-4">
                        Or try these options:
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* Extend Miles Option */}
                        <button
                          onClick={() => {
                            setShowDistanceSelector(true);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="flex items-center gap-3 p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all group"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                            <MapPin className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1 text-left">
                            <p className="font-semibold text-gray-900 text-sm">Extend Search Area</p>
                            <p className="text-xs text-gray-600">Currently: {selectedDistance} miles</p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                        </button>

                        {/* Clear Filters Option */}
                        <button
                          onClick={resetFilters}
                          className="flex items-center gap-3 p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all group"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                            <X className="h-5 w-5 text-orange-600" />
                          </div>
                          <div className="flex-1 text-left">
                            <p className="font-semibold text-gray-900 text-sm">Clear All Filters</p>
                            <p className="text-xs text-gray-600">Start fresh search</p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                        </button>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                      <p className="text-sm text-gray-600 mb-2">
                        Need immediate assistance?
                      </p>
                      <a 
                        href="tel:8885150595" 
                        className="inline-flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-800 transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        Call (888) 515-0595
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                filteredProviders.map((provider, index) => (
                  <ProviderCard 
                    key={provider.id} 
                    provider={provider}
                    index={index}
                    isSaved={savedProviders.includes(provider.id)}
                    isSelected={selectedProviders.includes(provider.id)}
                    onSave={handleSaveProvider}
                    onRequestAppointment={handleRequestAppointment}
                    onToggleSelect={handleToggleProvider}
                    onViewDetails={handleViewDetails}
                    activeCategories={activeCategories}
                    selectedInsurances={selectedInsurances}
                  />
                ))
              )}
            </div>
          ) : (
            <div className="h-[400px] md:h-[600px] rounded-lg overflow-hidden border border-gray-200">
              {filteredProviders.length === 0 ? (
                <div className="h-full flex items-center justify-center bg-gray-50">
                  <div className="text-center max-w-md mx-auto px-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                      <MapPin className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">No providers to display on map</h3>
                    <p className="text-gray-600 mb-6">
                      We'll help you find providers. Tell us about yourself or extend your search area.
                    </p>
                    <div className="flex flex-col gap-2">
                      <Button 
                        onClick={() => setShowAuthModal(true)}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Get Personalized Help
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setShowDistanceSelector(true);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        Extend Search Area
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <ProvidersMap
                  providers={filteredProviders}
                  onProviderClick={handleViewDetails}
                  className="h-full"
                />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Floating Selection Window */}
      {selectedProviders.length > 0 && (
        <div className="fixed bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-3xl px-2 md:px-4">
          <Card className="bg-white shadow-2xl border-2 border-[#6B21A8]">
            <CardContent className="p-2.5 md:p-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="bg-[#6B21A8] text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold text-xs md:text-sm flex-shrink-0">
                    {selectedProviders.length}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">
                      {selectedProviders.length} provider{selectedProviders.length !== 1 ? 's' : ''} selected
                    </p>
                    <button
                      onClick={handleSelectAll}
                      className="text-xs md:text-sm text-[#6B21A8] hover:text-[#7C3AED] underline"
                    >
                      {selectedProviders.length === filteredProviders.length ? 'Deselect all' : 'Select all'}
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
                  <Button variant="outline" size="sm" onClick={handleSaveSelected} className="text-xs md:text-sm">
                    <Heart className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                    <span className="hidden sm:inline">Help Me Connect</span>
                    <span className="sm:hidden">Connect</span>
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleDownloadSelected} className="text-xs md:text-sm">
                    <Download className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                    <span className="hidden sm:inline">Download</span>
                    <span className="sm:hidden">PDF</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setShowEmailModal(true)} 
                    className="text-xs md:text-sm relative"
                  >
                    <Mail className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                    <span className="hidden sm:inline">Email</span>
                    <span className="sm:hidden">Email</span>
                    {selectionEmail && (
                      <span className="absolute -top-1 -right-1 h-2 w-2 bg-[#6B21A8] rounded-full"></span>
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProviders([])}
                    className="h-7 w-7 md:h-8 md:w-8 p-0"
                  >
                    <X className="h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Authentication Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
        actionType={authAction}
        providerName={selectedProvider?.name}
      />

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={showAppointmentModal}
        onClose={() => {
          setShowAppointmentModal(false);
          setAppointmentProvider(null);
        }}
        providerName={appointmentProvider?.name || ""}
        providerPhone={appointmentProvider?.phone}
        providerEmail={appointmentProvider?.email}
        videoLink={appointmentProvider?.telehealth ? "https://meet.example.com/appointment" : undefined}
      />

      {/* Provider Detail Modal */}
      <Dialog open={showProviderDetail} onOpenChange={setShowProviderDetail}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto pb-6 mx-3 md:mx-auto">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl font-semibold text-gray-900">
              {detailProvider?.name}
            </DialogTitle>
            <div className="text-sm md:text-base text-gray-600">
              {detailProvider?.credentials && (() => {
                const credentialsList = detailProvider.credentials.split(';').map(c => c.trim()).filter(Boolean);
                const translatedCredentialsList = credentialsList.map(c => translateCredentials(c, detailProvider.providerType));
                const displayCredentials = showAllCredentials ? translatedCredentialsList : translatedCredentialsList.slice(0, 3);
                const hasMore = translatedCredentialsList.length > 3;
                
                return (
                  <div className="flex flex-wrap items-center gap-2">
                    <span>{displayCredentials.join('; ')}</span>
                    {hasMore && !showAllCredentials && (
                      <button
                        onClick={() => setShowAllCredentials(true)}
                        className="text-[#6B21A8] hover:underline font-medium text-sm"
                      >
                        +{translatedCredentialsList.length - 3} more
                      </button>
                    )}
                    {hasMore && showAllCredentials && (
                      <button
                        onClick={() => setShowAllCredentials(false)}
                        className="text-[#6B21A8] hover:underline font-medium text-sm"
                      >
                        Show less
                      </button>
                    )}
                  </div>
                );
              })()}
            </div>
          </DialogHeader>
          
          {detailProvider && (
            <div className="space-y-4 md:space-y-6 pt-3 md:pt-4">
              {/* Provider Type and Specialty */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 md:mb-3">Specialization</h4>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  <Badge 
                    variant="outline" 
                    className={
                      detailProvider.providerType === "Mental Health" 
                        ? "border-purple-300 text-purple-700 bg-purple-50" 
                        : detailProvider.providerType === "Physical Health"
                        ? "border-blue-300 text-blue-700 bg-blue-50"
                        : "border-green-300 text-green-700 bg-green-50"
                    }
                  >
                    {detailProvider.providerType}
                  </Badge>
                  {(showAllSpecialties ? detailProvider.specialty : detailProvider.specialty.slice(0, 3)).map(spec => (
                    <Badge key={spec} variant="secondary">{spec}</Badge>
                  ))}
                  {detailProvider.specialty.length > 3 && !showAllSpecialties && (
                    <button
                      onClick={() => setShowAllSpecialties(true)}
                      className="text-[#6B21A8] hover:underline font-medium text-sm px-2"
                    >
                      +{detailProvider.specialty.length - 3} more
                    </button>
                  )}
                  {detailProvider.specialty.length > 3 && showAllSpecialties && (
                    <button
                      onClick={() => setShowAllSpecialties(false)}
                      className="text-[#6B21A8] hover:underline font-medium text-sm px-2"
                    >
                      Show less
                    </button>
                  )}
                </div>
              </div>

              {/* Bio */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">About</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{detailProvider.bio}</p>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(detailProvider.address ? `${detailProvider.address}, ${detailProvider.location}` : detailProvider.location)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#6B21A8] transition-colors underline"
                        title={detailProvider.address ? `${detailProvider.address}, ${detailProvider.location}` : detailProvider.location}
                      >
                        {detailProvider.address ? `${detailProvider.address}, ${detailProvider.location}` : detailProvider.location}
                      </a>
                    </div>
                    {detailProvider.phone && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="h-4 w-4 flex-shrink-0" />
                        <a href={`tel:${detailProvider.phone}`} className="hover:text-[#6B21A8] transition-colors underline">
                          {detailProvider.phone}
                        </a>
                      </div>
                    )}
                    {detailProvider.website && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Globe className="h-4 w-4 flex-shrink-0" />
                        <a 
                          href={detailProvider.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-[#6B21A8] transition-colors underline"
                        >
                          Website
                        </a>
                      </div>
                    )}
                    {detailProvider.email && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="text-xs">✉️</span>
                        <a href={`mailto:${detailProvider.email}`} className="hover:text-[#6B21A8] transition-colors underline">
                          {detailProvider.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Insurance - Not shown for Social Services */}
              {detailProvider.providerType !== "Social Service" && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 md:mb-3">Accepted Insurance</h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {detailProvider.insurance.map(ins => (
                      <Badge key={ins} variant="outline" className="border-gray-300 text-gray-700">
                        {ins}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Languages */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 md:mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {detailProvider.languages.map(lang => (
                      <Badge key={lang} variant="secondary">{lang}</Badge>
                    ))}
                  </div>
                </div>

                {detailProvider.ageGroups && detailProvider.ageGroups.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 md:mb-3">Age Groups Served</h4>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {detailProvider.ageGroups.map(age => (
                        <Badge key={age} variant="secondary">{age}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Treatment Types (Mental Health only) */}
              {detailProvider.treatmentTypes && detailProvider.treatmentTypes.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 md:mb-3">Treatment Approaches</h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {detailProvider.treatmentTypes.map(type => (
                      <Badge key={type} variant="outline" className="border-purple-300 text-purple-700 bg-purple-50">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Provider Demographics - Not shown for Social Services */}
              {detailProvider.providerType !== "Social Service" && (
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 md:mb-3">Provider Information</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Gender:</span> {detailProvider.gender}
                      </div>
                      {detailProvider.ethnicity && (
                        <div>
                          <span className="font-medium">Ethnicity:</span> {detailProvider.ethnicity}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Social Service Specific Information */}
              {detailProvider.providerType === "Social Service" && (
                <>
                  {/* Open Hours */}
                  {detailProvider.openHours && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 md:mb-3">Hours of Operation</h4>
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>{detailProvider.openHours}</span>
                      </div>
                    </div>
                  )}

                  {/* Eligibility Requirements */}
                  {detailProvider.eligibilityRequirements && detailProvider.eligibilityRequirements.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 md:mb-3">Eligibility Requirements</h4>
                      <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600">
                        {detailProvider.eligibilityRequirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Documents Required */}
                  {detailProvider.documentsRequired && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Documents Required</h4>
                      <div className="space-y-4">
                        {detailProvider.documentsRequired.proofOfIncome && detailProvider.documentsRequired.proofOfIncome.length > 0 && (
                          <div>
                            <h5 className="text-sm font-medium text-gray-900 mb-1.5">Proof of Income:</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-2">
                              {detailProvider.documentsRequired.proofOfIncome.map((doc, idx) => (
                                <li key={idx}>{doc}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {detailProvider.documentsRequired.proofOfResidency && detailProvider.documentsRequired.proofOfResidency.length > 0 && (
                          <div>
                            <h5 className="text-sm font-medium text-gray-900 mb-1.5">Proof of Residency:</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-2">
                              {detailProvider.documentsRequired.proofOfResidency.map((doc, idx) => (
                                <li key={idx}>{doc}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {detailProvider.documentsRequired.householdDocuments && detailProvider.documentsRequired.householdDocuments.length > 0 && (
                          <div>
                            <h5 className="text-sm font-medium text-gray-900 mb-1.5">Household Member Documents:</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-2">
                              {detailProvider.documentsRequired.householdDocuments.map((doc, idx) => (
                                <li key={idx}>{doc}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {detailProvider.documentsRequired.identification && detailProvider.documentsRequired.identification.length > 0 && (
                          <div>
                            <h5 className="text-sm font-medium text-gray-900 mb-1.5">Identification:</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-2">
                              {detailProvider.documentsRequired.identification.map((doc, idx) => (
                                <li key={idx}>{doc}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {detailProvider.documentsRequired.other && detailProvider.documentsRequired.other.length > 0 && (
                          <div>
                            <h5 className="text-sm font-medium text-gray-900 mb-1.5">Other Documents:</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-2">
                              {detailProvider.documentsRequired.other.map((doc, idx) => (
                                <li key={idx}>{doc}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Application Process */}
                  {detailProvider.applicationProcess && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 md:mb-3">How to Apply</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{detailProvider.applicationProcess}</p>
                    </div>
                  )}

                  {/* Additional Information */}
                  {detailProvider.additionalInfo && detailProvider.additionalInfo.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 md:mb-3">Additional Information</h4>
                      <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600">
                        {detailProvider.additionalInfo.map((info, idx) => (
                          <li key={idx}>{info}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t mt-4">
                <FigmaButton 
                  variant="primary"
                  onClick={() => {
                    setShowProviderDetail(false);
                    handleRequestAppointment(detailProvider);
                  }}
                  className="w-full"
                >
                  Help Me Connect
                </FigmaButton>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Email Modal */}
      <Dialog open={showEmailModal} onOpenChange={setShowEmailModal}>
        <DialogContent className="max-w-md mx-3 md:mx-auto">
          <DialogHeader>
            <DialogTitle>Email Provider List</DialogTitle>
            <DialogDescription>
              Enter your email address to receive a detailed list of your {selectedProviders.length} selected provider{selectedProviders.length !== 1 ? 's' : ''}.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="selection-email">Email Address</Label>
              <div className="relative">
                <Input
                  id="selection-email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={selectionEmail}
                  onChange={(e) => setSelectionEmail(e.target.value)}
                  className="w-full pr-8"
                  disabled={isSendingEmail}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && selectionEmail) {
                      handleSendEmail();
                    }
                  }}
                />
                {selectionEmail && !isSendingEmail && (
                  <button
                    onClick={() => setSelectionEmail("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    type="button"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <p className="text-xs text-gray-500">
                We'll send you contact information and details for all selected providers.
              </p>
            </div>
            
            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                onClick={() => setShowEmailModal(false)}
                disabled={isSendingEmail}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSendEmail}
                className="bg-[#6B21A8] hover:bg-[#7C3AED] text-white"
                disabled={!selectionEmail || isSendingEmail}
              >
                {isSendingEmail ? (
                  <>
                    <span className="animate-pulse">Sending...</span>
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4 mr-2" />
                    Send
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ProviderCard({ provider, index, isSaved, isSelected, onSave, onRequestAppointment, onToggleSelect, onViewDetails, activeCategories = [], selectedInsurances = [] }: { provider: Provider, index: number, isSaved: boolean, isSelected: boolean, onSave: (provider: Provider) => void, onRequestAppointment: (provider: Provider) => void, onToggleSelect: (providerId: string) => void, onViewDetails: (provider: Provider) => void, activeCategories?: string[], selectedInsurances?: string[] }) {
  const [showFullCredentials, setShowFullCredentials] = useState(false);
  const [showFullTreatmentTypes, setShowFullTreatmentTypes] = useState(false);
  const [showFullSpecialties, setShowFullSpecialties] = useState(false);
  
  // Parse credentials into licenses array and show only first 3
  const credentialsText = provider.credentials || '';
  const licenses = credentialsText.split(',').map(l => l.trim()).filter(l => l.length > 0);
  const translatedLicenses = licenses.map(license => translateCredentials(license, provider.providerType));
  const MAX_VISIBLE_LICENSES = 3;
  const hasMoreLicenses = translatedLicenses.length > MAX_VISIBLE_LICENSES;
  const visibleLicenses = showFullCredentials ? translatedLicenses : translatedLicenses.slice(0, MAX_VISIBLE_LICENSES);
  
  // Parse treatment types and show only first 3
  const treatmentTypes = provider.treatmentTypes || [];
  const MAX_VISIBLE_TREATMENTS = 3;
  
  // For Social Services - show specialties as service chips
  const specialties = provider.specialty || [];
  const MAX_VISIBLE_SPECIALTIES = 3;
  const visibleSpecialties = showFullSpecialties ? specialties : specialties.slice(0, MAX_VISIBLE_SPECIALTIES);
  const hasMoreSpecialties = specialties.length > MAX_VISIBLE_SPECIALTIES;
  
  // Prioritize treatment types that match user's selected categories
  const prioritizedTreatmentTypes = useMemo(() => {
    if (treatmentTypes.length === 0) return [];
    
    // Create a set of user-selected conditions/categories for quick lookup
    const userSelections = new Set(activeCategories.map(cat => cat.toLowerCase()));
    
    // Separate treatment types into matched and unmatched
    const matched: string[] = [];
    const unmatched: string[] = [];
    
    treatmentTypes.forEach(type => {
      if (userSelections.has(type.toLowerCase())) {
        matched.push(type);
      } else {
        unmatched.push(type);
      }
    });
    
    // Return matched first, then unmatched
    return [...matched, ...unmatched];
  }, [treatmentTypes, activeCategories]);
  
  const visiblePrioritizedTreatments = showFullTreatmentTypes 
    ? prioritizedTreatmentTypes 
    : prioritizedTreatmentTypes.slice(0, MAX_VISIBLE_TREATMENTS);
  const hasMorePrioritizedTreatments = prioritizedTreatmentTypes.length > MAX_VISIBLE_TREATMENTS;
  
  return (
    <Card className={`hover:shadow-md transition-all relative ${isSelected ? 'border-2 border-[#6B21A8] shadow-md bg-purple-50/30' : ''}`}>
      <CardContent className="p-3 md:p-6">
        {/* Checkbox - Top Right */}
        <div className="absolute top-2 md:top-4 right-2 md:right-4 z-10">
          <Checkbox
            id={`select-provider-${provider.id}`}
            checked={isSelected}
            onCheckedChange={() => onToggleSelect(provider.id)}
            className="h-5 w-5 md:h-6 md:w-6 border-2 border-purple-400 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
          />
          <label htmlFor={`select-provider-${provider.id}`} className="sr-only">
            Select {provider.name}
          </label>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-6 pr-8 md:pr-8">
          {/* Provider Avatar and Basic Info */}
          <div className="flex gap-3 flex-1 min-w-0">
            {/* Provider Avatar */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <span className="text-sm md:text-xl font-bold text-[#6B21A8]">
                  {provider.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>

            {/* Provider Info */}
            <div className="flex-1 min-w-0">
              <div className="mb-2">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-base md:text-xl font-semibold text-gray-900 break-words">{provider.name}</h3>
                </div>
                <div className="text-gray-600 text-xs md:text-sm break-words">
                  {visibleLicenses.join(', ')}
                  {hasMoreLicenses && (
                    <button
                      onClick={() => setShowFullCredentials(!showFullCredentials)}
                      className="ml-1 text-[#6B21A8] hover:text-[#7C3AED] font-medium inline-flex items-center"
                    >
                      {showFullCredentials ? 'show less' : `+${licenses.length - MAX_VISIBLE_LICENSES} more`}
                    </button>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2 md:mb-3">
                <Badge 
                  variant="outline" 
                  className={
                    provider.providerType === "Mental Health" 
                      ? "border-purple-300 text-purple-700 bg-purple-50 text-xs" 
                      : provider.providerType === "Physical Health"
                      ? "border-blue-300 text-blue-700 bg-blue-50 text-xs"
                      : "border-green-300 text-green-700 bg-green-50 text-xs"
                  }
                >
                  {provider.providerType}
                </Badge>
                {provider.telehealth && (
                  <Badge variant="outline" className="border-purple-300 text-purple-700 bg-purple-50 text-xs flex items-center gap-1">
                    <Video className="h-3 w-3 flex-shrink-0" />
                    Telehealth
                  </Badge>
                )}
                {/* Social Service Specialties */}
                {provider.providerType === "Social Service" && specialties.length > 0 && (
                  <>
                    {visibleSpecialties.map((specialty, idx) => (
                      <Badge key={`specialty-${idx}`} variant="secondary" className="max-w-[150px] md:max-w-[200px] truncate text-xs">{specialty}</Badge>
                    ))}
                    {hasMoreSpecialties && (
                      <Badge 
                        variant="secondary" 
                        className="cursor-pointer hover:bg-gray-200 text-xs"
                        onClick={() => setShowFullSpecialties(!showFullSpecialties)}
                      >
                        {showFullSpecialties ? 'Show less' : `+${specialties.length - MAX_VISIBLE_SPECIALTIES} more`}
                      </Badge>
                    )}
                  </>
                )}
                {/* Treatment Types */}
                {prioritizedTreatmentTypes.length > 0 && (
                  <>
                    {visiblePrioritizedTreatments.map((type, idx) => (
                      <Badge key={`treatment-${idx}`} variant="secondary" className="max-w-[150px] md:max-w-[200px] truncate text-xs">{type}</Badge>
                    ))}
                    {hasMorePrioritizedTreatments && (
                      <Badge 
                        variant="secondary" 
                        className="cursor-pointer hover:bg-gray-200 text-xs"
                        onClick={() => setShowFullTreatmentTypes(!showFullTreatmentTypes)}
                      >
                        {showFullTreatmentTypes ? 'Show less' : `+${prioritizedTreatmentTypes.length - MAX_VISIBLE_TREATMENTS} more`}
                      </Badge>
                    )}
                  </>
                )}
              </div>

              {/* In-Network Insurance Badge - Separate Row */}
              {selectedInsurances.length > 0 && selectedInsurances.some(ins => provider.insurance.includes(ins)) && (
                <div className="mb-2 md:mb-3">
                  <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50 text-xs font-medium flex items-center gap-1 w-fit">
                    <CheckCircle className="h-3 w-3 flex-shrink-0" />
                    In-Network with {selectedInsurances.find(ins => provider.insurance.includes(ins))}
                  </Badge>
                </div>
              )}

              <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-4 line-clamp-2 break-words">{provider.bio}</p>

              {/* Contact Information Row */}
              <div className="flex flex-wrap gap-x-3 md:gap-x-4 gap-y-1.5 md:gap-y-2 text-xs md:text-sm mb-2 md:mb-4">
                <div className="flex items-center gap-1.5 md:gap-2 text-gray-600 min-w-0">
                  <MapPin className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(provider.address ? `${provider.address}, ${provider.location}` : provider.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate hover:text-[#6B21A8] transition-colors underline"
                    title={provider.address ? `${provider.address}, ${provider.location}` : provider.location}
                  >
                    {provider.location}
                  </a>
                  {provider.distance !== undefined && (
                    <span className="text-gray-500">
                      ({provider.distance.toFixed(1)} mi)
                    </span>
                  )}
                </div>
                {provider.phone && (
                  <div className="flex items-center gap-1.5 md:gap-2 text-gray-600 min-w-0">
                    <Phone className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                    <a href={`tel:${provider.phone}`} className="truncate hover:text-[#6B21A8] transition-colors underline">
                      {provider.phone}
                    </a>
                  </div>
                )}
                {provider.website && (
                  <div className="flex items-center gap-1.5 md:gap-2 text-gray-600 min-w-0">
                    <Globe className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                    <a 
                      href={provider.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="truncate hover:text-[#6B21A8] transition-colors underline"
                    >
                      Website
                    </a>
                  </div>
                )}
                {provider.providerType === "Social Service" && provider.openHours && (
                  <div className="flex items-center gap-1.5 md:gap-2 text-gray-600 min-w-0 w-full">
                    <Clock className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                    <span className="break-words">{provider.openHours}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Action Buttons - Stack vertically on mobile, column on desktop */}
          <div className="flex flex-col gap-2 mt-3 md:mt-0 md:justify-center md:flex-shrink-0 w-full md:w-auto">
            {/* Check Availability button for every 4th Mental Health provider */}
            {provider.providerType === "Mental Health" && (index + 1) % 4 === 0 && (
              <button
                onClick={() => window.open('https://link.mytherapyflow.com/widget/booking/2eNXRMq1WfBafwl6ac5Q', '_blank', 'noopener,noreferrer')}
                className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-white bg-[#6B21A8] hover:bg-[#7C3AED] transition-colors px-4 py-2.5 rounded-full md:rounded-md w-full md:w-auto font-medium whitespace-nowrap"
              >
                <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>Check Availability</span>
              </button>
            )}
            <button
              onClick={() => onViewDetails(provider)}
              className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-[#6B21A8] hover:text-[#7C3AED] transition-colors px-4 py-2.5 border-2 border-purple-200 rounded-full md:rounded-md hover:bg-purple-50 w-full md:w-auto whitespace-nowrap"
            >
              <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
              <span>View Details</span>
            </button>
            <button
              onClick={() => onRequestAppointment(provider)}
              className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#6B21A8] hover:text-[#7C3AED] transition-colors px-4 py-2.5 border-2 border-purple-600 rounded-full md:rounded-md hover:bg-purple-50 w-full md:w-auto whitespace-nowrap font-medium"
            >
              <Heart className={`h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 ${isSaved ? "fill-[#7a007a]" : ""}`} />
              <span>{isSaved ? "Connected" : "Help Me Connect"}</span>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}