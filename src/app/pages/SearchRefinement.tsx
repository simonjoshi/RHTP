import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router";
import { Search, ChevronRight, ArrowLeft, Check, ChevronsUpDown, Users, Globe, Shield, Clock, Heart, Brain, Activity, Home, Info, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Card, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../components/ui/command";
import logoImage from "figma:asset/402617bbcf95896cb7bccd79e2ebca2544a06ac1.png";
import heroBackground from "figma:asset/ab40fdb7f66b9fc56ec11bba6643c040ad1b753e.png";
import scenicImage from "figma:asset/bb66347df932f0bc676d8c1c1e241b00b4e3a136.png";

// Search Refinement Component
export default function SearchRefinement() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Get initial params from URL
  const initialQuery = searchParams.get("q") || "";
  const initialLocation = searchParams.get("location") || "";
  const initialCategories = searchParams.get("categories")?.split(",") || [];

  // Console log to verify data from homepage
  console.log("📋 Search Refinement - Data from Homepage:", {
    query: initialQuery,
    location: initialLocation,
    categories: initialCategories
  });

  // Determine which sections to show
  const showMentalHealth = initialCategories.includes("Mental Health");
  const showPhysicalHealth = initialCategories.includes("Physical Health");
  const showSocialServices = initialCategories.some(cat => 
    ["Housing", "Food", "Transportation", "Employment", "Education", "Safety", "Dental"].includes(cat)
  );

  // Map homepage categories to social service categories
  const mapHomepageCategoryToSocialService = (category: string): string | null => {
    const mapping: Record<string, string> = {
      "Housing": "Housing Assistance",
      "Food": "Food Assistance",
      "Child Care": "Child Care",
      "Transportation": "Transportation",
      "Legal": "Legal Aid",
      "Clothing": "Clothing Assistance",
      "Furniture": "Furniture Assistance",
      "School Supplies": "School Supplies",
      "Adult Day Care": "Adult Day Care"
    };
    return mapping[category] || null;
  };

  // Get pre-selected social services based on homepage selections
  const getInitialSocialNeeds = (): string[] => {
    const mapped = initialCategories
      .map(cat => mapHomepageCategoryToSocialService(cat))
      .filter((val): val is string => val !== null);
    return [...new Set(mapped)]; // Remove duplicates
  };

  // Build dynamic step configuration
  const buildSteps = () => {
    const stepsArray = [];
    let stepNumber = 1;
    
    // Step 1 is always preferences
    stepsArray.push({ stepNumber, name: 'preferences', label: 'Your Preferences' });
    stepNumber++;
    
    if (showMentalHealth) {
      stepsArray.push({ stepNumber, name: 'mental-health', label: 'Mental Health' });
      stepNumber++;
    }
    if (showPhysicalHealth) {
      stepsArray.push({ stepNumber, name: 'physical-health', label: 'Physical Health' });
      stepNumber++;
    }
    if (showSocialServices) {
      stepsArray.push({ stepNumber, name: 'social-services', label: 'Social Services' });
      stepNumber++;
    }
    
    return stepsArray;
  };

  const steps = buildSteps();
  const totalSteps = steps.length;

  // Current step: 0 = name, 1+ = actual steps
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Scroll to top when step changes (for mobile UX)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStepIndex]);

  // Comprehensive language list
  const TOP_LANGUAGES = ["English", "Spanish", "Mandarin", "French", "Arabic"];
  const ALL_LANGUAGES = [
    "English", "Spanish", "Mandarin", "French", "Arabic", 
    "Hindi", "Bengali", "Portuguese", "Russian", "Japanese",
    "German", "Korean", "Vietnamese", "Italian", "Turkish",
    "Polish", "Ukrainian", "Tagalog", "Thai", "Swahili",
    "Dutch", "Greek", "Hebrew", "Czech", "Swedish",
    "Romanian", "Hungarian", "Persian", "Urdu", "Indonesian"
  ];

  // Comprehensive insurance list
  const TOP_INSURANCE = ["Blue Cross Blue Shield", "Aetna", "UnitedHealthcare", "Cigna", "Medicare", "I don't have insurance"];
  const ALL_INSURANCE = [
    "Blue Cross Blue Shield", "Aetna", "UnitedHealthcare", "Cigna", "Medicare",
    "Medicaid", "Kaiser Permanente", "Humana", "Anthem", "Centene",
    "Molina Healthcare", "WellCare", "Tricare", "VA Healthcare", "Oscar Health",
    "Bright Health", "Ambetter", "Health Net", "HCSC", "CareSource",
    "MetLife", "Guardian", "Principal", "Mutual of Omaha", "I don't have insurance"
  ];

  // State
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [ageGroups, setAgeGroups] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [insurances, setInsurances] = useState<string[]>([]);
  const [appointmentType, setAppointmentType] = useState<string>('both');
  
  // Mental Health selections
  const [mentalHealthConditions, setMentalHealthConditions] = useState<string[]>([]);
  const [treatmentTypes, setTreatmentTypes] = useState<string[]>([]);
  const [showConditionDetails, setShowConditionDetails] = useState(false);
  const [showTreatmentDetails, setShowTreatmentDetails] = useState(false);

  // Physical Health selections
  const [physicalHealthSpecialties, setPhysicalHealthSpecialties] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Medical Care category structure
  const medicalCareCategories = {
    "Primary Care": {
      icon: "🩺",
      subcategories: [
        "Annual checkup",
        "Sick visit",
        "Chronic disease management",
        "Blood pressure & diabetes",
        "Vaccinations & immunizations",
        "Lab tests & bloodwork",
        "Prescription refills",
        "Preventive screenings"
      ]
    },
    "Dental Care": {
      icon: "🦷",
      subcategories: [
        "Teeth cleaning",
        "Cavities & fillings",
        "Tooth pain or extraction",
        "Dentures & bridges",
        "Orthodontics (braces)",
        "Gum disease treatment",
        "Dental X-rays",
        "Emergency dental care"
      ]
    },
    "Maternal & Prenatal": {
      icon: "🤰",
      subcategories: [
        "Prenatal visits",
        "Labor & delivery support",
        "Postpartum care",
        "Breastfeeding support",
        "Family planning",
        "Miscarriage support",
        "High-risk pregnancy care",
        "Birth control counseling"
      ]
    },
    "Children's Health": {
      icon: "👶",
      subcategories: [
        "Well-child visits",
        "Childhood vaccinations",
        "Growth & development",
        "Ear infections & common illness",
        "Asthma & allergies",
        "School physicals",
        "Nutrition & feeding",
        "Vision & hearing checks"
      ]
    },
    "Vision Care": {
      icon: "👁️",
      subcategories: [
        "Eye exam",
        "Glasses or contacts",
        "Cataracts & glaucoma",
        "Diabetic eye exam",
        "Dry eyes or irritation",
        "Eye injury or emergency"
      ]
    },
    "Pharmacy & Medications": {
      icon: "💊",
      subcategories: [
        "Prescription pickup",
        "Medication assistance programs",
        "Over-the-counter guidance",
        "Medication review",
        "Specialty medications",
        "Insulin & diabetic supplies"
      ]
    },
    "Specialist Care": {
      icon: "🏥",
      subcategories: [
        "Heart health (cardiology)",
        "Skin conditions (dermatology)",
        "Bone & joint pain (orthopedics)",
        "Stomach & digestion",
        "Women's health (OB-GYN)",
        "Lung & breathing",
        "Kidney health",
        "Neurology & headaches"
      ]
    },
    "Rehab & Therapy": {
      icon: "🦽",
      subcategories: [
        "Physical therapy",
        "Occupational therapy",
        "Speech therapy",
        "Post-surgery recovery",
        "Injury rehabilitation",
        "Home health aides"
      ]
    },
    "Urgent & Emergency": {
      icon: "🚑",
      subcategories: [
        "Urgent care visit",
        "Telemedicine / virtual visit",
        "ER alternatives",
        "After-hours care",
        "Injury treatment"
      ]
    }
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const isCategoryFullySelected = (category: string) => {
    const subcats = medicalCareCategories[category as keyof typeof medicalCareCategories]?.subcategories || [];
    return subcats.every(sub => physicalHealthSpecialties.includes(sub));
  };

  const toggleCategorySelection = (category: string) => {
    const subcats = medicalCareCategories[category as keyof typeof medicalCareCategories]?.subcategories || [];
    const isFullySelected = isCategoryFullySelected(category);
    
    if (isFullySelected) {
      // Deselect all subcategories
      setPhysicalHealthSpecialties(prev => prev.filter(s => !subcats.includes(s)));
    } else {
      // Select all subcategories
      setPhysicalHealthSpecialties(prev => {
        const newSelections = [...prev];
        subcats.forEach(sub => {
          if (!newSelections.includes(sub)) {
            newSelections.push(sub);
          }
        });
        return newSelections;
      });
    }
  };

  // Social Services selections
  const [socialNeeds, setSocialNeeds] = useState<string[]>([]);
  const [socialSubcategories, setSocialSubcategories] = useState<string[]>([]);

  // Social Services category structure
  const socialServicesCategories = {
    "Food Assistance": [
      "Food Pantry",
      "Meal Delivery",
      "SNAP/Food Stamps",
      "Senior Nutrition",
      "School Meals",
      "Community Meals"
    ],
    "Housing Assistance": [
      "Emergency Shelter",
      "Transitional Housing",
      "Rental Assistance",
      "Homeless Prevention",
      "Housing Navigation"
    ],
    "Child Care": [
      "Daycare Services",
      "Preschool Programs",
      "After School Care",
      "Summer Programs",
      "Childcare Subsidies",
      "Head Start"
    ],
    "Transportation": [
      "Public Transit Passes",
      "Ride Services",
      "Gas Vouchers",
      "Medical Transport",
      "Bike Programs",
      "Vehicle Repair"
    ],
    "Legal Aid": [
      "Family Law",
      "Housing Law",
      "Immigration",
      "Consumer Rights",
      "Benefits Assistance",
      "Legal Consultation"
    ],
    "Clothing Assistance": [
      "Clothing Closets",
      "Clothing Vouchers",
      "School Uniforms",
      "Professional Attire",
      "Winter Clothing",
      "Baby Clothing"
    ],
    "Furniture Assistance": [
      "Furniture Banks",
      "Home Furnishings",
      "Mattresses & Bedding",
      "Kitchen Items",
      "Moving Assistance",
      "Donation Programs"
    ],
    "School Supplies": [
      "Backpacks",
      "Notebooks & Paper",
      "Writing Supplies",
      "Calculators",
      "Art Supplies",
      "Backpack Programs"
    ],
    "Adult Day Care": [
      "Senior Day Programs",
      "Adult Day Health",
      "Social Activities",
      "Meal Programs",
      "Transportation Included",
      "Respite Care"
    ]
  };

  const handleFinalSubmit = () => {
    const params = new URLSearchParams();
    
    // Pass through original search ONLY if no categories were selected
    // When categories are selected, they define the search criteria, not the query text
    if (initialQuery && initialCategories.length === 0) params.append("q", initialQuery);
    if (initialLocation) params.append("location", initialLocation);
    
    // Pass original categories from homepage
    if (initialCategories.length > 0) {
      params.append("categories", initialCategories.join(","));
    }
    
    // Pass user name for personalization
    if (userName.trim()) params.append("userName", userName.trim());
    
    // Determine provider type
    if (showMentalHealth && !showPhysicalHealth && !showSocialServices) {
      params.append("type", "Mental Health");
    } else if (showPhysicalHealth && !showMentalHealth && !showSocialServices) {
      params.append("type", "Physical Health");
    } else if (showSocialServices && !showMentalHealth && !showPhysicalHealth) {
      params.append("type", "Social Service");
    }
    
    // Mental Health params
    if (mentalHealthConditions.length > 0) {
      params.append("specialties", mentalHealthConditions.join(","));
    }
    if (treatmentTypes.length > 0) {
      params.append("treatments", treatmentTypes.join(","));
    }
    
    // Physical Health params
    if (physicalHealthSpecialties.length > 0) {
      params.append("specialties", physicalHealthSpecialties.join(","));
    }
    
    // Social Services params
    if (socialNeeds.length > 0) {
      params.append("specialties", socialNeeds.join(","));
    }
    if (socialSubcategories.length > 0) {
      params.append("subcategories", socialSubcategories.join(","));
    }
    
    // Common params
    if (ageGroups.length > 0) {
      params.append("ageGroups", ageGroups.join(","));
    }
    if (languages.length > 0) {
      params.append("languages", languages.join(","));
    }
    if (insurances.length > 0) {
      params.append("insurance", insurances.join(","));
    }
    if (appointmentType !== 'both') {
      params.append("appointmentType", appointmentType);
    }

    // Console log to verify data being sent to provider search
    console.log("✅ Search Refinement - Sending to Provider Search:", {
      originalCategories: initialCategories,
      type: params.get("type"),
      specialties: mentalHealthConditions.concat(physicalHealthSpecialties).concat(socialNeeds),
      treatments: treatmentTypes,
      ageGroups,
      languages,
      insurance: insurances
    });
    
    navigate(`/provider-search?${params.toString()}`);
  };

  const getCurrentStepName = () => {
    if (currentStepIndex === 0) return 'name';
    return steps[currentStepIndex - 1]?.name || '';
  };

  const getCurrentStepNumber = () => {
    if (currentStepIndex === 0) return 0;
    return steps[currentStepIndex - 1]?.stepNumber || 0;
  };

  const isLastStep = () => {
    return currentStepIndex === steps.length;
  };

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  const pageTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30
  };

  const renderStepContent = () => {
    const stepName = getCurrentStepName();
    const stepNumber = getCurrentStepNumber();
    const isLast = isLastStep();

    // Name step
    if (stepName === 'name') {
      return (
        <motion.div
          key="step-name"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
          className="min-h-screen bg-gray-50"
        >
          {/* Hero Section with Scenic Background */}
          <div className="relative h-44 md:h-56 overflow-hidden">
            <img 
              src={scenicImage} 
              alt="Journey to care" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white px-4"
            >
              <div className="w-16 h-16 mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center drop-shadow-lg">
                A few quick questions for more personalized results
              </h1>
              <p className="text-lg text-white/90 text-center drop-shadow">
                What should we call you?
              </p>
            </motion.div>
          </div>

          <div className="container mx-auto px-4 -mt-8 pb-12">
            <div className="max-w-xl mx-auto">
              <Button
                variant="ghost"
                onClick={() => window.history.back()}
                className="mb-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="shadow-xl">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="userName" className="text-base font-semibold text-gray-700 mb-2 block">
                          Your first name
                        </Label>
                        <Input
                          id="userName"
                          type="text"
                          placeholder="Enter your first name"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' && userName.trim()) {
                              setCurrentStepIndex(1);
                            }
                          }}
                          className="h-14 text-lg px-6 rounded-2xl border-2 border-gray-200 focus:border-purple-600 shadow-sm"
                          autoFocus
                        />
                      </div>

                      <Button
                        onClick={() => setCurrentStepIndex(1)}
                        disabled={!userName.trim()}
                        className="w-full"
                        size="lg"
                      >
                        Continue
                        <ChevronRight className="h-6 w-6 ml-2" />
                      </Button>

                      <button
                        onClick={() => {
                          // Build URL with initial search params
                          const params = new URLSearchParams();
                          
                          // Only pass query if no categories were selected
                          if (initialQuery && initialCategories.length === 0) params.append("q", initialQuery);
                          if (initialLocation) params.append("location", initialLocation);
                          if (initialCategories.length > 0) params.append("categories", initialCategories.join(","));
                          
                          // Determine provider type based on categories
                          if (showMentalHealth && !showPhysicalHealth && !showSocialServices) {
                            params.append("type", "Mental Health");
                          } else if (showPhysicalHealth && !showMentalHealth && !showSocialServices) {
                            params.append("type", "Physical Health");
                          } else if (showSocialServices && !showMentalHealth && !showPhysicalHealth) {
                            params.append("type", "Social Service");
                          }
                          
                          // Add skipped flag
                          params.append("skipped", "true");
                          
                          navigate(`/provider-search${params.toString() ? `?${params.toString()}` : ''}`);
                        }}
                        className="w-full text-sm text-gray-500 hover:text-gray-700 py-2 transition-colors"
                      >
                        Skip for now
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      );
    }

    // Preferences step
    if (stepName === 'preferences') {
      return (
        <motion.div
          key="step-preferences"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
          className="min-h-screen bg-gray-50"
        >
          {/* Hero Section with Scenic Background */}
          <div className="relative h-44 md:h-56 overflow-hidden">
            <img 
              src={scenicImage} 
              alt="Journey to care" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white px-4"
            >
              <div className="w-16 h-16 mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center drop-shadow-lg">
                {userName ? `Great to meet you, ${userName}!` : "Tell us about yourself"}
              </h1>
              <p className="text-lg text-white/90 text-center drop-shadow">
                Let's personalize your journey to care
              </p>
            </motion.div>
          </div>

          <div className="container mx-auto px-4 mt-8 pb-12">
            <div className="max-w-6xl mx-auto">
              <div className="flex gap-6 md:gap-8 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="hidden md:flex flex-col items-center"
                >
                  <div className="text-sm font-medium text-purple-600 mb-3">STEP</div>
                  <div className="text-8xl lg:text-9xl font-bold text-purple-600/20">{stepNumber.toString().padStart(2, '0')}</div>
                  <div className="text-lg font-semibold text-gray-900 mt-4 text-center">Care Preferences & Coverage</div>
                </motion.div>

                <Card className="border-2 border-purple-100 shadow-xl flex-1 bg-white">
                  <CardContent className="space-y-8 p-6 md:p-8">
                  {/* Email Field */}
                  

                  {/* Age Groups */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="h-5 w-5 text-purple-600" />
                      <Label className="text-lg font-semibold text-gray-900">
                        Who is this care for?
                      </Label>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Select all that apply</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { label: "Children", desc: "0-12 years" },
                        { label: "Teens", desc: "13-17 years" },
                        { label: "Adults", desc: "18-64 years" },
                        { label: "Seniors", desc: "65+ years" }
                      ].map((age) => (
                        <label
                          key={age.label}
                          htmlFor={`age-${age.label}`}
                          className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            ageGroups.includes(age.label)
                              ? 'border-purple-500 bg-purple-50 shadow-md scale-105'
                              : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow'
                          }`}
                        >
                          <Checkbox
                            id={`age-${age.label}`}
                            checked={ageGroups.includes(age.label)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setAgeGroups([...ageGroups, age.label]);
                              } else {
                                setAgeGroups(ageGroups.filter(a => a !== age.label));
                              }
                            }}
                            className="mt-0.5"
                          />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">{age.label}</div>
                            <div className="text-xs text-gray-500">{age.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </motion.div>

                  {/* Languages */}
                  

                  {/* Insurance */}
                  {(showMentalHealth || showPhysicalHealth) && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Shield className="h-5 w-5 text-purple-600" />
                        <Label className="text-lg font-semibold text-gray-900">Insurance</Label>
                        {insurances.length > 0 && (
                          <Badge variant="secondary" className="bg-purple-600 text-white text-xs ml-2">
                            {insurances.length} selected
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-4">Which insurance do you have?</p>
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {TOP_INSURANCE.map((ins) => (
                            <label
                              key={ins}
                              htmlFor={`ins-${ins}`}
                              className={`flex items-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                insurances.includes(ins)
                                  ? 'border-purple-500 bg-purple-50 shadow'
                                  : 'border-gray-200 bg-white hover:border-purple-300'
                              }`}
                            >
                              <Checkbox
                                id={`ins-${ins}`}
                                checked={insurances.includes(ins)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    setInsurances([...insurances, ins]);
                                  } else {
                                    setInsurances(insurances.filter(i => i !== ins));
                                  }
                                }}
                              />
                              <span className="text-sm text-gray-700 font-medium">{ins}</span>
                            </label>
                          ))}
                        </div>
                        
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-between">
                              <span className="text-sm flex items-center gap-2">
                                <Shield className="h-4 w-4" />
                                {insurances.filter(i => !TOP_INSURANCE.includes(i)).length > 0 
                                  ? `${insurances.filter(i => !TOP_INSURANCE.includes(i)).length} other insurance(s) selected`
                                  : "Search for more insurance..."}
                              </span>
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0" align="start">
                            <Command>
                              <CommandInput placeholder="Search insurance..." />
                              <CommandList>
                                <CommandEmpty>No insurance found.</CommandEmpty>
                                <CommandGroup>
                                  {ALL_INSURANCE.map((ins) => (
                                    <CommandItem
                                      key={ins}
                                      value={ins}
                                      onSelect={() => {
                                        if (insurances.includes(ins)) {
                                          setInsurances(insurances.filter(i => i !== ins));
                                        } else {
                                          setInsurances([...insurances, ins]);
                                        }
                                      }}
                                    >
                                      <Check
                                        className={`mr-2 h-4 w-4 ${
                                          insurances.includes(ins) ? "opacity-100" : "opacity-0"
                                        }`}
                                      />
                                      {ins}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </motion.div>
                  )}

                  {/* Appointment Type */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-5 w-5 text-purple-600" />
                      <Label className="text-lg font-semibold text-gray-900">
                        Appointment preference
                      </Label>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">How would you like to meet?</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { value: 'telehealth', label: 'Telehealth', desc: 'Virtual visits' },
                        { value: 'in-person', label: 'In-person', desc: 'Office visits' },
                        { value: 'both', label: 'Either', desc: 'Flexible' }
                      ].map((type) => (
                        <label
                          key={type.value}
                          htmlFor={`appt-${type.value}`}
                          className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            appointmentType === type.value
                              ? 'border-purple-500 bg-purple-50 shadow-md scale-105'
                              : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow'
                          }`}
                        >
                          <input
                            type="radio"
                            id={`appt-${type.value}`}
                            name="appointmentType"
                            checked={appointmentType === type.value}
                            onChange={() => setAppointmentType(type.value)}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">{type.label}</div>
                            <div className="text-xs text-gray-500">{type.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </motion.div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStepIndex(0)}
                      className="flex-1"
                    >
                      <ArrowLeft className="h-5 w-5 mr-2" />
                      Back
                    </Button>
                    <Button
                      onClick={() => setCurrentStepIndex(currentStepIndex + 1)}
                      className="flex-1"
                      size="lg"
                    >
                      Next Step
                      <ChevronRight className="h-6 w-6 ml-2" />
                    </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    // Mental Health step
    if (stepName === 'mental-health') {
      return (
        <motion.div
          key="step-mental-health"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
          className="min-h-screen bg-gray-50"
        >
          {/* Hero Section with Scenic Background */}
          <div className="relative h-44 md:h-56 overflow-hidden">
            <img 
              src={scenicImage} 
              alt="Journey to care" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white px-4"
            >
              <div className="w-16 h-16 mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center drop-shadow-lg">
                {userName ? `${isLast ? 'Almost there' : 'Great'}, ${userName}!` : (isLast ? "One last step" : "Let's continue")}
              </h1>
              <p className="text-lg text-white/90 text-center drop-shadow">
                Tell us about your mental health needs
              </p>
            </motion.div>
          </div>

          <div className="container mx-auto px-4 mt-8 pb-12">
            <div className="max-w-6xl mx-auto">
            <div className="flex gap-6 md:gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="hidden md:flex flex-col items-center"
              >
                <div className="text-sm font-medium text-purple-600 mb-3">STEP</div>
                <div className="text-8xl lg:text-9xl font-bold text-purple-600/20">{stepNumber.toString().padStart(2, '0')}</div>
                <div className="text-lg font-semibold text-gray-900 mt-4 text-center max-w-[120px]">
                  Your Mental Health Needs
                </div>
              </motion.div>

              <Card className="border-2 border-purple-100 shadow-xl flex-1 bg-white">
                <CardContent className="space-y-6 p-6 md:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Label className="text-lg font-semibold text-gray-900">
                        What are you looking for help with?
                      </Label>
                      <button
                        type="button"
                        onClick={() => setShowConditionDetails(!showConditionDetails)}
                        className="flex items-center gap-1.5 text-xs text-purple-600 hover:text-purple-700 font-medium"
                      >
                        <Info className="h-3.5 w-3.5" />
                        {showConditionDetails ? 'Hide' : 'Show'} details
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Select all that apply</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                      {[
                        { name: "Anxiety", desc: "Racing thoughts, feeling restless or tense, panic attacks" },
                        { name: "Depression", desc: "Decrease in motivation, loss of interest, low self esteem, grief" },
                        { name: "Disruptive", desc: "Difficult to calm or manage anger, defying rules or authority figures" },
                        { name: "Suicidal Ideation and Self-Harm", desc: "Thinking or talking about dying, feeling hopeless or worthless, cutting" },
                        { name: "ADHD", desc: "Easily distracted, forgetfulness, patterns of high energy" },
                        { name: "Bipolar", desc: "Extreme shifts in mood, cycles of unusually high and low energy" },
                        { name: "Couple / Family Counseling", desc: "Challenges with interpersonal communication and conflict" },
                        { name: "Feeding & Eating", desc: "Restricting calories or eating too much, significant weight changes" },
                        { name: "Obsessive Compulsive", desc: "Repeated checking or counting, hair pulling, excessive worry" },
                        { name: "Trauma & Stress", desc: "Avoidance, emotional numbness, irritability, fear" },
                        { name: "Addictive Behaviors", desc: "Substance use, behavioral addictions, recovery support" }
                      ].map((condition) => (
                        <label
                          key={condition.name}
                          htmlFor={`mh-${condition.name}`}
                          className={`flex items-start gap-2.5 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                            mentalHealthConditions.includes(condition.name)
                              ? 'border-purple-500 bg-purple-50 shadow'
                              : 'border-gray-200 bg-white hover:border-purple-300'
                          }`}
                        >
                          <Checkbox
                            id={`mh-${condition.name}`}
                            checked={mentalHealthConditions.includes(condition.name)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setMentalHealthConditions([...mentalHealthConditions, condition.name]);
                              } else {
                                setMentalHealthConditions(mentalHealthConditions.filter(c => c !== condition.name));
                              }
                            }}
                            className="mt-0.5"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-gray-900 leading-snug">{condition.name}</div>
                            {showConditionDetails && (
                              <div className="text-xs text-gray-500 mt-1 leading-relaxed">{condition.desc}</div>
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                  </motion.div>

                  {/* Addictive Behaviors Subcategories */}
                  {mentalHealthConditions.includes("Addictive Behaviors") && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3 border-t pt-6"
                    >
                      <Label className="text-base font-semibold text-purple-700 mb-3 block">
                        Specific Addictive Behaviors
                      </Label>
                      <p className="text-sm text-gray-600 mb-4">Select the specific substances or behaviors</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          { name: "Alcohol", desc: "Intoxication, withdrawal, etc." },
                          { name: "Cannabis", desc: "Marijuana" },
                          { name: "Hallucinogen", desc: "Mushrooms, phencyclidine, etc." },
                          { name: "Inhalant", desc: "Tobacco, vaping, glue, fuel, paint" },
                          { name: "Opioid", desc: "Oxycodone, codeine, pain medication, heroine, morphine" },
                          { name: "Sedative or Hypnotic", desc: "Sleeping pills, barbiturates, benzodiazepines, Xanax, Ativan" },
                          { name: "Stimulant", desc: "Cocaine, crystal meth, speed, ecstasy, etc." }
                        ].map((behavior) => (
                          <label
                            key={behavior.name}
                            htmlFor={`ab-${behavior.name}`}
                            className={`flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                              mentalHealthConditions.includes(behavior.name)
                                ? 'border-purple-400 bg-purple-50 shadow-sm'
                                : 'border-gray-200 bg-white hover:border-purple-200'
                            }`}
                          >
                            <Checkbox
                              id={`ab-${behavior.name}`}
                              checked={mentalHealthConditions.includes(behavior.name)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setMentalHealthConditions([...mentalHealthConditions, behavior.name]);
                                } else {
                                  setMentalHealthConditions(mentalHealthConditions.filter(c => c !== behavior.name));
                                }
                              }}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900">{behavior.name}</div>
                              <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{behavior.desc}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="border-t pt-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Label className="text-lg font-semibold text-gray-900">
                        Treatment preferences
                      </Label>
                      <button
                        type="button"
                        onClick={() => setShowTreatmentDetails(!showTreatmentDetails)}
                        className="flex items-center gap-1.5 text-xs text-purple-600 hover:text-purple-700 font-medium"
                      >
                        <Info className="h-3.5 w-3.5" />
                        {showTreatmentDetails ? 'Hide' : 'Show'} details
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">What type of treatment interests you? (Optional)</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                      {[
                        { name: "Psychological Assessment", desc: "In-depth testing to determine an official diagnosis and appropriate treatment for behavioral, social and/or academic challenges administered by a psychologist" },
                        { name: "Applied Behavioral Analysis", desc: "Requires Autism Spectrum Disorder or Developmental Disorder diagnosis." },
                        { name: "Individual Therapy", desc: "Ongoing 1-1 support from a therapist, on average of 1 hour per week" },
                        { name: "Psychiatry", desc: "Assessment and treatment requiring medication management" },
                        { name: "Intervention Services", desc: "Triaging urgent needs and connecting to appropriate services" },
                        { name: "Intensive Outpatient Program", desc: "Includes group and individual therapy for around 3 hours per day, 3-5 days per week, on average for 3-6 weeks" },
                        { name: "Partial Hospitalization Program", desc: "Patients attend intensive group and individual therapy for 6-8 hours per day, up to 6 days per week, on average for 4-6 weeks" },
                        { name: "Residential Inpatient Program", desc: "24-hour care within a highly focused environment with both group and individual therapy to develop new coping skills, average stays range from 1-10 weeks" },
                        { name: "Hospitalization & Stabilization", desc: "A type of treatment where the client gets stabilized and detoxed from drugs and alcohol while at a hospital" },
                        { name: "Medical Detox", desc: "24/7 supervision by trained medical team to treat withdrawal symptoms of severe and long-term addictions, length of stays depend on individual needs" }
                      ].map((treatment) => (
                        <label
                          key={treatment.name}
                          htmlFor={`tx-${treatment.name}`}
                          className={`flex items-start gap-2.5 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                            treatmentTypes.includes(treatment.name)
                              ? 'border-purple-500 bg-purple-50 shadow'
                              : 'border-gray-200 bg-white hover:border-purple-300'
                          }`}
                        >
                          <Checkbox
                            id={`tx-${treatment.name}`}
                            checked={treatmentTypes.includes(treatment.name)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setTreatmentTypes([...treatmentTypes, treatment.name]);
                              } else {
                                setTreatmentTypes(treatmentTypes.filter(t => t !== treatment.name));
                              }
                            }}
                            className="mt-0.5"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-gray-900 leading-snug">{treatment.name}</div>
                            {showTreatmentDetails && (
                              <div className="text-xs text-gray-500 mt-1 leading-relaxed">{treatment.desc}</div>
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                  </motion.div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
                      className="flex-1"
                    >
                      <ArrowLeft className="h-5 w-5 mr-2" />
                      Back
                    </Button>
                    <Button
                      onClick={() => isLast ? handleFinalSubmit() : setCurrentStepIndex(currentStepIndex + 1)}
                      className="flex-1"
                      size="lg"
                    >
                      {isLast ? 'Find Providers' : 'Next Step'}
                      <ChevronRight className="h-6 w-6 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          </div>
        </motion.div>
      );
    }

    // Physical Health step
    if (stepName === 'physical-health') {
      return (
        <motion.div
          key="step-physical-health"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
          className="min-h-screen bg-gray-50"
        >
          {/* Hero Section with Scenic Background */}
          <div className="relative h-44 md:h-56 overflow-hidden">
            <img 
              src={scenicImage} 
              alt="Journey to care" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white px-4"
            >
              <div className="w-16 h-16 mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center drop-shadow-lg">
                {userName ? `${isLast ? 'Almost there' : 'Great'}, ${userName}!` : (isLast ? "One last step" : "Let's continue")}
              </h1>
              <p className="text-lg text-white/90 text-center drop-shadow">
                Tell us about your health needs
              </p>
            </motion.div>
          </div>

          <div className="container mx-auto px-4 mt-8 pb-12">
            <div className="max-w-6xl mx-auto">
            <div className="flex gap-6 md:gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="hidden md:flex flex-col items-center"
              >
                <div className="text-sm font-medium text-purple-600 mb-3">STEP</div>
                <div className="text-8xl lg:text-9xl font-bold text-purple-600/20">{stepNumber.toString().padStart(2, '0')}</div>
                <div className="text-lg font-semibold text-gray-900 mt-4 text-center max-w-[120px]">
                  Medical Care Needs
                </div>
              </motion.div>

              <Card className="border-2 border-purple-100 shadow-xl flex-1 bg-white">
                <CardContent className="space-y-6 p-6 md:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Label className="text-lg font-semibold text-gray-900 mb-2 block">
                      What type of medical care do you need?
                    </Label>
                    <p className="text-sm text-gray-600 mb-6">Browse categories and select specific services you need</p>
                    
                    {/* Selected items summary */}
                    {physicalHealthSpecialties.length > 0 && (
                      <div className="mb-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="text-sm font-medium text-purple-900 mb-2">
                          {physicalHealthSpecialties.length} {physicalHealthSpecialties.length === 1 ? 'service' : 'services'} selected
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {physicalHealthSpecialties.slice(0, 5).map(item => (
                            <Badge key={item} variant="secondary" className="text-xs bg-white">
                              {item}
                            </Badge>
                          ))}
                          {physicalHealthSpecialties.length > 5 && (
                            <Badge variant="secondary" className="text-xs bg-white">
                              +{physicalHealthSpecialties.length - 5} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                      {Object.entries(medicalCareCategories).map(([category, { icon, subcategories }]) => {
                        const isExpanded = expandedCategories.includes(category);
                        const selectedCount = subcategories.filter(sub => physicalHealthSpecialties.includes(sub)).length;
                        const isFullySelected = isCategoryFullySelected(category);
                        
                        return (
                          <div key={category} className="border-2 border-gray-200 rounded-lg overflow-hidden bg-white">
                            {/* Category Header */}
                            <div className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                              <Checkbox
                                checked={isFullySelected}
                                onCheckedChange={() => toggleCategorySelection(category)}
                                className="mt-0.5"
                              />
                              <button
                                type="button"
                                onClick={() => toggleCategory(category)}
                                className="flex-1 flex items-center gap-3 text-left"
                              >
                                <span className="text-2xl">{icon}</span>
                                <div className="flex-1">
                                  <div className="font-semibold text-gray-900">{category}</div>
                                  <div className="text-xs text-gray-500">
                                    {selectedCount > 0 ? `${selectedCount} of ${subcategories.length} selected` : `${subcategories.length} options`}
                                  </div>
                                </div>
                                <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                              </button>
                            </div>
                            
                            {/* Subcategories */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="p-3 bg-white border-t space-y-2">
                                    {subcategories.map((subcat) => (
                                      <label
                                        key={subcat}
                                        htmlFor={`ph-${subcat}`}
                                        className={`flex items-center gap-3 p-2.5 rounded-md border cursor-pointer transition-all ${
                                          physicalHealthSpecialties.includes(subcat)
                                            ? 'border-purple-400 bg-purple-50'
                                            : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                                        }`}
                                      >
                                        <Checkbox
                                          id={`ph-${subcat}`}
                                          checked={physicalHealthSpecialties.includes(subcat)}
                                          onCheckedChange={(checked) => {
                                            if (checked) {
                                              setPhysicalHealthSpecialties([...physicalHealthSpecialties, subcat]);
                                            } else {
                                              setPhysicalHealthSpecialties(physicalHealthSpecialties.filter(s => s !== subcat));
                                            }
                                          }}
                                        />
                                        <span className="text-sm text-gray-700">{subcat}</span>
                                      </label>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
                      className="flex-1"
                    >
                      <ArrowLeft className="h-5 w-5 mr-2" />
                      Back
                    </Button>
                    <Button
                      onClick={() => isLast ? handleFinalSubmit() : setCurrentStepIndex(currentStepIndex + 1)}
                      className="flex-1"
                      size="lg"
                    >
                      {isLast ? 'Find Providers' : 'Next Step'}
                      <ChevronRight className="h-6 w-6 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          </div>
        </motion.div>
      );
    }

    // Social Services step
    if (stepName === 'social-services') {
      return (
        <motion.div
          key="step-social-services"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
          className="min-h-screen bg-gray-50"
        >
          {/* Hero Section with Scenic Background */}
          <div className="relative h-44 md:h-56 overflow-hidden">
            <img 
              src={scenicImage} 
              alt="Journey to care" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white px-4"
            >
              <div className="w-16 h-16 mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center drop-shadow-lg">
                {userName ? `Almost there, ${userName}!` : "One last step"}
              </h1>
              <p className="text-lg text-white/90 text-center drop-shadow">
                Tell us what support you need
              </p>
            </motion.div>
          </div>

          <div className="container mx-auto px-4 mt-8 pb-12">
            <div className="max-w-6xl mx-auto">
            <div className="flex gap-6 md:gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="hidden md:flex flex-col items-center"
              >
                <div className="text-sm font-medium text-purple-600 mb-3">STEP</div>
                <div className="text-8xl lg:text-9xl font-bold text-purple-600/20">{stepNumber.toString().padStart(2, '0')}</div>
                <div className="text-lg font-semibold text-gray-900 mt-4 text-center max-w-[120px]">
                  Your Social Service Needs
                </div>
              </motion.div>

              <Card className="border-2 border-purple-100 shadow-xl flex-1 bg-white">
                <CardContent className="space-y-6 p-6 md:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                      What support do you need?
                    </Label>
                    <p className="text-sm text-gray-600 mb-4">Select all that apply</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {Object.keys(socialServicesCategories).map((service) => (
                        <label
                          key={service}
                          htmlFor={`ss-${service}`}
                          className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                            socialNeeds.includes(service)
                              ? 'border-purple-500 bg-purple-50 shadow'
                              : 'border-gray-200 bg-white hover:border-purple-300'
                          }`}
                        >
                          <Checkbox
                            id={`ss-${service}`}
                            checked={socialNeeds.includes(service)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSocialNeeds([...socialNeeds, service]);
                              } else {
                                setSocialNeeds(socialNeeds.filter(s => s !== service));
                                // Remove all subcategories for this service
                                const subsToRemove = socialServicesCategories[service as keyof typeof socialServicesCategories];
                                setSocialSubcategories(socialSubcategories.filter(sub => !subsToRemove.includes(sub)));
                              }
                            }}
                          />
                          <span className="text-sm font-medium text-gray-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>

                  {/* Subcategories - Only show if any main category is selected */}
                  {socialNeeds.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="border-t-2 border-gray-200 pt-6">
                        <Label className="text-lg font-semibold text-gray-900 mb-2 block">
                          Tell us more about your specific needs
                        </Label>
                        <p className="text-sm text-gray-600 mb-4">Select the specific services you're interested in</p>
                      </div>
                      
                      {socialNeeds.map((service) => (
                        <motion.div
                          key={service}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3"
                        >
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-1 bg-purple-500 rounded-full"></div>
                            <Label className="text-base font-semibold text-purple-700">
                              {service}
                            </Label>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-5">
                            {socialServicesCategories[service as keyof typeof socialServicesCategories]?.map((subcategory) => (
                              <label
                                key={subcategory}
                                htmlFor={`ssc-${subcategory}`}
                                className={`flex items-center gap-2 p-2.5 rounded-lg border-2 cursor-pointer transition-all ${
                                  socialSubcategories.includes(subcategory)
                                    ? 'border-purple-400 bg-purple-50 shadow-sm'
                                    : 'border-gray-200 bg-white hover:border-purple-200'
                                }`}
                              >
                                <Checkbox
                                  id={`ssc-${subcategory}`}
                                  checked={socialSubcategories.includes(subcategory)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      setSocialSubcategories([...socialSubcategories, subcategory]);
                                    } else {
                                      setSocialSubcategories(socialSubcategories.filter(s => s !== subcategory));
                                    }
                                  }}
                                />
                                <span className="text-sm text-gray-700">{subcategory}</span>
                              </label>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
                      className="flex-1"
                    >
                      <ArrowLeft className="h-5 w-5 mr-2" />
                      Back
                    </Button>
                    <Button
                      onClick={handleFinalSubmit}
                      className="flex-1"
                      size="lg"
                    >
                      {userName ? `Find Your Providers, ${userName}!` : 'Find Providers'}
                      <ChevronRight className="h-6 w-6 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          </div>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoImage} alt="Care Match" className="h-6 md:h-8" />
            </Link>
            
            {/* Step Progress Indicator */}
            {currentStepIndex > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 mr-2 hidden sm:inline">
                  Step {getCurrentStepNumber()} of {totalSteps}
                </span>
                {steps.map((step, idx) => (
                  <div
                    key={step.stepNumber}
                    className={`h-2.5 w-12 md:w-20 rounded-full transition-all duration-500 ${
                      step.stepNumber === getCurrentStepNumber()
                        ? 'bg-purple-600 scale-110'
                        : step.stepNumber < getCurrentStepNumber()
                        ? 'bg-purple-400'
                        : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {renderStepContent()}
      </AnimatePresence>
    </div>
  );
}