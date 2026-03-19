import { X, ChevronRight, PhoneCall, UserCheck, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface Provider {
  id: string;
  name: string;
  category: "Mental Health" | "Physical Health" | "Social Services";
}

interface FloatingCallbackCartProps {
  providers: Provider[];
  onRemove: (providerId: string) => void;
  onProceed: () => void;
  onClose: () => void;
}

export function FloatingCallbackCart({
  providers,
  onRemove,
  onProceed,
  onClose,
}: FloatingCallbackCartProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (providers.length === 0) return null;

  // Separate providers by connection type based on category
  const providerCallProviders = providers.filter(p => p.category === "Mental Health");
  const ccHelpProviders = providers.filter(p => p.category !== "Mental Health");

  // Compact view - just a small bar
  if (!isExpanded) {
    return (
      <div className="fixed bottom-20 left-0 right-0 z-50 px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-purple-700 text-white rounded-full shadow-2xl px-5 py-3 flex items-center justify-between">
            <button 
              onClick={() => setIsExpanded(true)}
              className="flex items-center gap-3 flex-1"
            >
              <div className="bg-white text-purple-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                {providers.length}
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm">Callback Requests</p>
                <p className="text-xs text-purple-100">Tap to review</p>
              </div>
              <ChevronUp className="h-5 w-5 ml-auto" />
            </button>
            <button
              onClick={onProceed}
              className="ml-3 bg-white text-purple-700 rounded-full px-4 py-2 text-sm font-semibold hover:bg-purple-50 transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Expanded view - shows details
  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setIsExpanded(false)}>
      <div 
        className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-[70vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-purple-700 text-white rounded-t-3xl px-5 py-4 flex items-center justify-between flex-shrink-0">
          <div>
            <h3 className="font-bold text-lg">Callback Requests</h3>
            <p className="text-sm text-purple-100">{providers.length} provider{providers.length !== 1 ? 's' : ''} selected</p>
          </div>
          <button
            onClick={() => setIsExpanded(false)}
            className="text-white hover:bg-purple-600 rounded-full p-1 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Provider List */}
        <div className="overflow-y-auto px-5 py-4 space-y-3 flex-1">
          {providerCallProviders.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <PhoneCall className="h-4 w-4 text-purple-700" />
                <span className="text-xs font-semibold text-purple-700 uppercase">Provider Will Call</span>
              </div>
              {providerCallProviders.map((provider) => (
                <div
                  key={provider.id}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                >
                  <div>
                    <p className="font-medium text-sm text-gray-900">{provider.name}</p>
                    <p className="text-xs text-gray-500">{provider.category}</p>
                  </div>
                  <button
                    onClick={() => onRemove(provider.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {ccHelpProviders.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <UserCheck className="h-4 w-4 text-purple-700" />
                <span className="text-xs font-semibold text-purple-700 uppercase">Care Coordinator Help</span>
              </div>
              {ccHelpProviders.map((provider) => (
                <div
                  key={provider.id}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                >
                  <div>
                    <p className="font-medium text-sm text-gray-900">{provider.name}</p>
                    <p className="text-xs text-gray-500">{provider.category}</p>
                  </div>
                  <button
                    onClick={() => onRemove(provider.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="px-5 py-4 border-t border-gray-200 flex-shrink-0">
          <Button
            onClick={() => {
              onProceed();
            }}
            className="w-full bg-purple-700 hover:bg-purple-800 text-white rounded-full font-semibold py-6 flex items-center justify-center gap-2"
          >
            Proceed to Next Steps
            <ChevronRight className="h-5 w-5" />
          </Button>
          <p className="text-xs text-gray-500 text-center mt-2">
            Provide your availability and contact information
          </p>
        </div>
      </div>
    </div>
  );
}