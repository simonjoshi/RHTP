import { ProviderCard } from "./ProviderCard";
import { ChevronDown, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

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

interface GroupedProvidersProps {
  providers: SavedProvider[];
  expandedProvider: string | null;
  selectedConnectionMethod: { [key: string]: string | null };
  pendingCallbackProviders?: Array<{ id: string; name: string; category: string }>;
  onToggleExpand: (providerId: string) => void;
  onConnectionMethodSelect: (providerId: string, method: "call-myself" | "provider-call" | "cc-help") => void;
  onChangeConnectionMethod: (providerId: string) => void;
}

export function GroupedProviders({
  providers,
  expandedProvider,
  selectedConnectionMethod,
  pendingCallbackProviders = [],
  onToggleExpand,
  onConnectionMethodSelect,
  onChangeConnectionMethod
}: GroupedProvidersProps) {
  const [collapsedCategories, setCollapsedCategories] = useState<{
    mentalHealth: boolean;
    physicalHealth: boolean;
    socialServices: boolean;
  }>({
    mentalHealth: false,
    physicalHealth: false,
    socialServices: false
  });

  const toggleCategory = (category: "mentalHealth" | "physicalHealth" | "socialServices") => {
    setCollapsedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const mentalHealthProviders = providers.filter(p => p.category === "Mental Health");
  const physicalHealthProviders = providers.filter(p => p.category === "Physical Health");
  const socialServiceProviders = providers.filter(p => p.category === "Social Services");

  // Separate pending callback providers
  const pendingProviderIds = new Set(pendingCallbackProviders.map(p => p.id));
  const pendingProviders = providers.filter(p => pendingProviderIds.has(p.id));
  const otherProviders = providers.filter(p => !pendingProviderIds.has(p.id));

  const otherMentalHealthProviders = otherProviders.filter(p => p.category === "Mental Health");
  const otherPhysicalHealthProviders = otherProviders.filter(p => p.category === "Physical Health");
  const otherSocialServiceProviders = otherProviders.filter(p => p.category === "Social Services");

  const renderProviderSection = (
    title: string,
    sectionProviders: SavedProvider[],
    colorClass: string,
    bgColorClass: string,
    textColorClass: string,
    categoryKey: "mentalHealth" | "physicalHealth" | "socialServices",
    chevronColor: string
  ) => {
    if (sectionProviders.length === 0) return null;

    const isCollapsed = collapsedCategories[categoryKey];

    return (
      <div className="mb-6">
        <div 
          className="flex items-center gap-2 mb-3 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => toggleCategory(categoryKey)}
        >
          <div className={`h-8 w-1 ${colorClass} rounded-full`}></div>
          <h4 className={`text-base font-bold ${textColorClass}`}>{title}</h4>
          <span className={`text-xs ${textColorClass} ${bgColorClass} px-2 py-1 rounded-full font-medium`}>
            {sectionProviders.length}
          </span>
          <ChevronDown 
            className={`h-5 w-5 ${chevronColor} ml-auto transition-transform duration-200 ${
              isCollapsed ? '-rotate-90' : ''
            }`}
          />
        </div>
        {!isCollapsed && (
          <div className="space-y-3">
            {sectionProviders.map((provider) => {
              const isPending = pendingProviderIds.has(provider.id);
              return (
                <div key={provider.id} className="relative">
                  {isPending && (
                    <div className="absolute -top-2 -right-2 z-10 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                      <Clock className="h-3 w-3" />
                      Callback Pending
                    </div>
                  )}
                  <ProviderCard
                    provider={provider}
                    isExpanded={expandedProvider === provider.id}
                    selectedConnectionMethod={selectedConnectionMethod[provider.id] || null}
                    onToggleExpand={() => onToggleExpand(provider.id)}
                    onConnectionMethodSelect={(method) => onConnectionMethodSelect(provider.id, method)}
                    onChangeConnectionMethod={() => onChangeConnectionMethod(provider.id)}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {renderProviderSection(
        "Mental Health Providers",
        mentalHealthProviders,
        "bg-purple-700",
        "bg-purple-50",
        "text-purple-900",
        "mentalHealth",
        "text-purple-700"
      )}
      {renderProviderSection(
        "Physical Health Providers",
        physicalHealthProviders,
        "bg-blue-600",
        "bg-blue-50",
        "text-blue-900",
        "physicalHealth",
        "text-blue-600"
      )}
      {renderProviderSection(
        "Social Service Providers",
        socialServiceProviders,
        "bg-green-600",
        "bg-green-50",
        "text-green-900",
        "socialServices",
        "text-green-600"
      )}
    </>
  );
}