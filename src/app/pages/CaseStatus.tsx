import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, Bookmark, Search, Calendar, Heart, ThumbsUp, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { useState, useEffect } from "react";

interface CaseStatusStep {
  id: string;
  date: string;
  title: string;
  description: string;
  details?: string[];
  status: "completed" | "current" | "next" | "pending";
  icon: "bookmark" | "search" | "calendar" | "heart" | "thumbsup";
}

interface CaseData {
  id: string;
  name: string;
  type: "Mental Health" | "Physical Health" | "Social Services";
  status: string;
  statusColor: string;
  progress: number;
}

export default function CaseStatus() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Store case data in state to prevent it from being lost on re-renders
  const [caseData, setCaseData] = useState<CaseData | null>(() => {
    return (location.state as any)?.case || null;
  });

  // Debug logging
  console.log("Location state:", location.state);
  console.log("Case data:", caseData);

  // If no case data, show a simple fallback instead of returning null
  if (!caseData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-5">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No case data found</p>
          <Button 
            onClick={() => navigate("/client-portal")}
            className="bg-purple-700 hover:bg-purple-800 text-white rounded-full px-6 py-2"
          >
            Back to Client Portal
          </Button>
        </div>
      </div>
    );
  }

  // Get case type colors
  const getColorClasses = () => {
    switch (caseData.type) {
      case "Mental Health":
        return {
          bg700: "bg-purple-700",
          text700: "text-purple-700",
          border700: "border-purple-700",
          bg100: "bg-purple-100",
          bg50: "bg-purple-50"
        };
      case "Physical Health":
        return {
          bg700: "bg-green-700",
          text700: "text-green-700",
          border700: "border-green-700",
          bg100: "bg-green-100",
          bg50: "bg-green-50"
        };
      case "Social Services":
        return {
          bg700: "bg-blue-700",
          text700: "text-blue-700",
          border700: "border-blue-700",
          bg100: "bg-blue-100",
          bg50: "bg-blue-50"
        };
      default:
        return {
          bg700: "bg-purple-700",
          text700: "text-purple-700",
          border700: "border-purple-700",
          bg100: "bg-purple-100",
          bg50: "bg-purple-50"
        };
    }
  };

  const colors = getColorClasses();

  // Define timeline steps based on progress
  const getTimelineSteps = (): CaseStatusStep[] => {
    const baseSteps: CaseStatusStep[] = [
      {
        id: "screening",
        date: "10/22/2024",
        title: "Complete Screening",
        description: "Initial assessment completed",
        status: "completed",
        icon: "bookmark"
      },
      {
        id: "finding",
        date: "10/22/2024",
        title: "Finding Providers",
        description: "Resources ready to review",
        details: ["16 providers contacted", "3 providers matched"],
        status: caseData.progress >= 50 ? "completed" : "current",
        icon: "search"
      },
      {
        id: "schedule",
        date: "",
        title: "Schedule Meeting",
        description: "With selected provider",
        status: caseData.progress >= 75 ? (caseData.progress >= 100 ? "completed" : "current") : "next",
        icon: "calendar"
      },
      {
        id: "complete",
        date: "",
        title: caseData.type === "Mental Health" ? "Complete Therapy Session" : caseData.type === "Physical Health" ? "Complete Appointment" : "Complete Service",
        description: "",
        status: caseData.progress >= 100 ? "completed" : "pending",
        icon: "heart"
      },
      {
        id: "feedback",
        date: "",
        title: "Leave Us Your Feedback",
        description: "",
        status: "pending",
        icon: "thumbsup"
      }
    ];

    return baseSteps;
  };

  const timelineSteps = getTimelineSteps();

  const getStepIcon = (icon: string, status: string) => {
    const iconClass = `h-6 w-6 ${
      status === "completed" || status === "current" 
        ? "text-white" 
        : "text-gray-400"
    }`;

    switch (icon) {
      case "bookmark":
        return <Bookmark className={iconClass} />;
      case "search":
        return <Search className={iconClass} />;
      case "calendar":
        return <Calendar className={iconClass} />;
      case "heart":
        return <Heart className={iconClass} />;
      case "thumbsup":
        return <ThumbsUp className={iconClass} />;
      default:
        return <CheckCircle className={iconClass} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-5 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <button
            onClick={() => navigate("/client-portal")}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="h-6 w-6 text-gray-700" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-900">Case Status</h1>
            <p className={`text-sm ${colors.text700} font-medium`}>{caseData.type}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-lg mx-auto px-5 py-6">
        {/* Status Badge */}
        <div className="mb-6">
          <span className={`${caseData.statusColor} text-sm font-medium px-4 py-2 rounded-full inline-block`}>
            {caseData.status}
          </span>
        </div>

        {/* Detailed Timeline */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="space-y-0">
            {timelineSteps.map((step, index) => {
              const isLast = index === timelineSteps.length - 1;
              const isCompleted = step.status === "completed";
              const isCurrent = step.status === "current";
              const isNext = step.status === "next";
              const isPending = step.status === "pending";

              return (
                <div key={step.id} className="flex gap-4 relative">
                  {/* Timeline Line */}
                  {!isLast && (
                    <div 
                      className={`absolute left-7 top-14 w-0.5 h-full ${
                        isCompleted || isCurrent ? colors.bg700 : "bg-gray-300"
                      }`}
                      style={{ height: 'calc(100% + 8px)' }}
                    />
                  )}

                  {/* Icon Circle */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div 
                      className={`w-14 h-14 rounded-full flex items-center justify-center ${
                        isCompleted || isCurrent
                          ? colors.bg700
                          : isPending
                            ? "bg-gray-200 border-2 border-gray-300"
                            : `${colors.bg100} border-2 ${colors.border700}`
                      }`}
                    >
                      {getStepIcon(step.icon, step.status)}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className={`flex-1 pb-8 ${isLast ? 'pb-0' : ''}`}>
                    {step.date && (
                      <p className="text-sm text-gray-500 mb-1">{step.date}</p>
                    )}
                    <h3 className={`text-xl font-bold mb-1 ${
                      isNext ? colors.text700 : isPending ? "text-gray-400" : "text-gray-900"
                    }`}>
                      {isNext && <span className="text-sm font-semibold mr-2">Next</span>}
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className={`text-base ${
                        isNext ? colors.text700 : isPending ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {step.description}
                      </p>
                    )}
                    {step.details && step.details.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${colors.bg700}`} />
                            <p className="text-sm text-gray-700">{detail}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3">
          {caseData.progress < 100 && (
            <Button 
              className={`w-full ${colors.bg700} hover:opacity-90 text-white rounded-full py-6 text-base font-semibold`}
              onClick={() => navigate("/client-portal")}
            >
              {caseData.progress < 75 ? "Review Providers" : "Schedule Appointment"}
            </Button>
          )}
          <Button 
            variant="outline"
            className={`w-full border-2 ${colors.border700} ${colors.text700} hover:${colors.bg50} rounded-full py-6 text-base font-semibold`}
            onClick={() => navigate("/client-portal")}
          >
            Back to My Cases
          </Button>
        </div>
      </div>
    </div>
  );
}