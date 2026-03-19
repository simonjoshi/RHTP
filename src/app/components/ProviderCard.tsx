import { 
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
  Clock
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

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

interface ProviderCardProps {
  provider: SavedProvider;
  isExpanded: boolean;
  selectedConnectionMethod: string | null;
  onToggleExpand: () => void;
  onConnectionMethodSelect: (method: "call-myself" | "provider-call" | "cc-help") => void;
  onChangeConnectionMethod: () => void;
}

export function ProviderCard({
  provider,
  isExpanded,
  selectedConnectionMethod,
  onToggleExpand,
  onConnectionMethodSelect,
  onChangeConnectionMethod
}: ProviderCardProps) {
  // Get category-specific colors
  const getCategoryColors = () => {
    if (provider.category === "Mental Health") {
      return {
        avatar: "from-purple-100 to-purple-200",
        text: "text-[#6B21A8]",
        chevron: "text-purple-700",
        button: "bg-purple-700 hover:bg-purple-800",
        buttonSecondary: "bg-pink-50 hover:bg-pink-100 text-purple-700 border-pink-200",
        changeButton: "text-purple-700 hover:text-purple-800",
        telehealth: "text-[#6B21A8]"
      };
    } else if (provider.category === "Physical Health") {
      return {
        avatar: "from-blue-100 to-blue-200",
        text: "text-blue-700",
        chevron: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700",
        buttonSecondary: "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200",
        changeButton: "text-blue-700 hover:text-blue-800",
        telehealth: "text-blue-600"
      };
    } else {
      return {
        avatar: "from-green-100 to-green-200",
        text: "text-green-700",
        chevron: "text-green-600",
        button: "bg-green-600 hover:bg-green-700",
        buttonSecondary: "bg-green-50 hover:bg-green-100 text-green-700 border-green-200",
        changeButton: "text-green-700 hover:text-green-800",
        telehealth: "text-green-600"
      };
    }
  };

  const colors = getCategoryColors();

  return (
    <Card 
      className="hover:shadow-md transition-all cursor-pointer"
      onClick={onToggleExpand}
    >
      <CardContent className="p-4 md:p-6">
        <div className="flex gap-3 md:gap-6">
          {/* Provider Avatar */}
          <div className="flex-shrink-0">
            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${colors.avatar} flex items-center justify-center`}>
              <span className={`text-sm md:text-lg font-bold ${colors.text}`}>
                {provider.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>

          {/* Provider Info */}
          <div className="flex-1 min-w-0">
            <div className="mb-2 flex items-start justify-between gap-2">
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-0.5">{provider.name}</h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  {provider.category === "Social Services" ? provider.specialty.join(', ') : provider.credentials}
                </p>
              </div>
              <ChevronDown 
                className={`h-5 w-5 ${colors.chevron} flex-shrink-0 transition-transform duration-200 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                <span className="text-xs font-semibold">{provider.rating}</span>
              </div>
              {provider.acceptingNew && (
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-0 text-xs">
                  ✓ {provider.category === "Social Services" ? "Currently available" : "Accepting new patients"}
                </Badge>
              )}
            </div>

            {/* Expanded Details */}
            {isExpanded && (
              <>
                {provider.category !== "Social Services" && (
                  <div className="flex flex-wrap gap-2 mb-3 pt-2 border-t border-gray-100">
                    {provider.specialty.slice(0, 3).map(spec => (
                      <Badge key={spec} variant="secondary" className="text-xs">{spec}</Badge>
                    ))}
                    {provider.specialty.length > 3 && (
                      <Badge variant="secondary" className="text-xs">+{provider.specialty.length - 3} more</Badge>
                    )}
                  </div>
                )}

                <p className={`text-gray-600 text-xs md:text-sm mb-3 ${provider.category === "Social Services" ? "pt-2 border-t border-gray-100" : ""}`}>
                  {provider.bio}
                </p>

                <div className="grid sm:grid-cols-2 gap-y-2 gap-x-4 text-xs md:text-sm mb-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                    <span className="truncate">{provider.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                    <span>{provider.category === "Social Services" ? provider.nextAvailable : `Next: ${provider.nextAvailable}`}</span>
                  </div>
                  {provider.telehealth && (
                    <div className={`flex items-center gap-2 ${colors.telehealth}`}>
                      <Video className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                      <span>{provider.category === "Social Services" ? "Virtual services available" : "Telehealth available"}</span>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Connection Methods - Only show when expanded */}
            {isExpanded && (
              <div className="mt-3 pt-3 border-t border-gray-200 space-y-3">
                {!selectedConnectionMethod ? (
                  <>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      How would you like to connect?
                    </h4>
                    <div className="space-y-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onConnectionMethodSelect("call-myself");
                        }}
                        className={`w-full ${colors.button} text-white rounded-full px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors`}
                      >
                        <User className="h-4 w-4" />
                        {provider.category === "Social Services" ? "I'll contact them" : "I'll call myself"}
                      </button>
                      {provider.category === "Mental Health" && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onConnectionMethodSelect("provider-call");
                          }}
                          className={`w-full ${colors.buttonSecondary} border rounded-full px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors`}
                        >
                          <PhoneCall className="h-4 w-4" />
                          Have provider call me
                        </button>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onConnectionMethodSelect("cc-help");
                        }}
                        className={`w-full ${colors.buttonSecondary} border rounded-full px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors`}
                      >
                        <UserCheck className="h-4 w-4" />
                        Get help from CC
                      </button>
                    </div>
                  </>
                ) : selectedConnectionMethod === "call-myself" ? (
                  <>
                    {/* Contact Information Display */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-gray-900">
                          Contact Information
                        </h4>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onChangeConnectionMethod();
                          }}
                          className={`text-xs ${colors.changeButton} font-medium`}
                        >
                          Change
                        </button>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-900 font-medium">
                            {provider.category === "Social Services" ? "(555) 987-6543" : "(555) 123-4567"}
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                          <div className="text-sm text-gray-700">
                            <div>{provider.category === "Social Services" ? "456 Community Ave" : "123 Main Street, Suite 200"}</div>
                            <div>{provider.category === "Social Services" ? provider.location : "Denver, CO 80202"}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-700">
                            {provider.category === "Social Services" ? "Mon-Sat 8AM - 6PM" : "Mon-Fri 9AM - 5PM"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : selectedConnectionMethod === "provider-call" || selectedConnectionMethod === "cc-help" ? (
                  <>
                    {/* Added to Cart Indicator */}
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-purple-700 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-purple-900">
                            Added to callback requests
                          </p>
                          <p className="text-xs text-purple-700 mt-1">
                            Complete the callback request form to proceed
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onChangeConnectionMethod();
                        }}
                        className={`text-xs ${colors.changeButton} font-medium mt-2`}
                      >
                        Remove from cart
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}