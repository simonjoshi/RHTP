import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, ShieldCheck, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";

interface LocationState {
  provider: {
    id: string;
    name: string;
    specialty: string;
    category: string;
  };
  callbackType: "provider-direct" | "cc-coordinate";
  availability: {
    days: string[];
    times: string[];
    phone: string;
    notes: string;
  };
}

export default function HipaaConsent() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const [expandedSection, setExpandedSection] = useState(false);
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);

  const handleAuthorize = () => {
    navigate("/portal", {
      state: {
        callbackRequested: true,
        providerId: state?.provider.id
      }
    });
  };

  const isValid = consent1 && consent2;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-5 py-4">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">CS</span>
            </div>
            <span className="font-semibold text-purple-700">CareMatch</span>
          </div>
          <Button 
            size="sm" 
            className="bg-purple-700 hover:bg-purple-800 text-white rounded-full px-4"
          >
            Need Help?
          </Button>
        </div>
      </div>

      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-lg mx-auto px-5 py-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-purple-700 font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            Back
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-lg mx-auto px-5 py-6 pb-32">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="h-6 w-6 text-purple-700" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">HIPAA Authorization</h1>
        </div>

        {/* Notice Card */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6">
          <p className="text-purple-900 font-medium">
            You are requesting 1 provider to contact you directly. This requires your authorization to share your request information.
          </p>
        </div>

        {/* Expandable Authorization Details */}
        <div className="bg-white border border-gray-200 rounded-xl mb-6 overflow-hidden">
          <button
            onClick={() => setExpandedSection(!expandedSection)}
            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900">
              Authorization to Use and Disclose Health Information
            </span>
            <ChevronDown className={`h-5 w-5 text-purple-700 transition-transform ${expandedSection ? 'rotate-180' : ''}`} />
          </button>
          
          {expandedSection && (
            <div className="px-4 pb-4 pt-2 space-y-4 text-sm text-gray-700 border-t border-gray-200">
              <div>
                <p className="font-semibold text-gray-900 mb-1">What information will be shared:</p>
                <p>Your name, contact information, case details, treatment preferences, insurance information, and any special requests you've specified.</p>
              </div>
              
              <div>
                <p className="font-semibold text-gray-900 mb-1">Who will receive this information:</p>
                <p>The healthcare providers you've selected to contact you directly.</p>
              </div>
              
              <div>
                <p className="font-semibold text-gray-900 mb-1">Purpose:</p>
                <p>To enable selected providers to contact you directly regarding scheduling appointments and discussing your care needs.</p>
              </div>
              
              <div>
                <p className="font-semibold text-gray-900 mb-1">Your rights:</p>
                <p>You may revoke this authorization at any time by contacting Care Solace. Revocation will not affect information already shared.</p>
              </div>
              
              <div>
                <p className="font-semibold text-gray-900 mb-1">Expiration:</p>
                <p>This authorization expires 90 days from today or when your case is closed, whichever comes first.</p>
              </div>
            </div>
          )}
        </div>

        {/* Consent Checkboxes */}
        <div className="space-y-4 mb-6">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center mt-1">
              <input
                type="checkbox"
                checked={consent1}
                onChange={(e) => setConsent1(e.target.checked)}
                className="w-5 h-5 border-2 border-gray-300 rounded checked:bg-purple-700 checked:border-purple-700 cursor-pointer appearance-none"
              />
              {consent1 && (
                <svg
                  className="absolute w-3 h-3 text-white pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span className="text-gray-900 group-hover:text-purple-700 transition-colors">
              I have read and understand the authorization terms above.
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center mt-1">
              <input
                type="checkbox"
                checked={consent2}
                onChange={(e) => setConsent2(e.target.checked)}
                className="w-5 h-5 border-2 border-gray-300 rounded checked:bg-purple-700 checked:border-purple-700 cursor-pointer appearance-none"
              />
              {consent2 && (
                <svg
                  className="absolute w-3 h-3 text-white pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span className="text-gray-900 group-hover:text-purple-700 transition-colors">
              I authorize CareMatch to share my health information with the selected provider(s) for the purposes described above.
            </span>
          </label>
        </div>

        {/* Provider Info */}
        {state?.provider && (
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-sm text-gray-600 mb-1">Provider to receive your information:</p>
            <p className="font-semibold text-gray-900">{state.provider.name}</p>
            <p className="text-sm text-gray-600">{state.provider.specialty}</p>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-5 py-4">
        <div className="max-w-lg mx-auto flex gap-3">
          <Button
            onClick={() => navigate("/portal")}
            variant="outline"
            className="flex-1 border-gray-200 text-purple-700 hover:bg-purple-50 rounded-full"
          >
            Cancel
          </Button>
          <Button
            onClick={handleAuthorize}
            disabled={!isValid}
            className="flex-1 bg-purple-700 hover:bg-purple-800 text-white rounded-full disabled:bg-purple-300 disabled:cursor-not-allowed"
          >
            Authorize & Request Call
          </Button>
        </div>
      </div>
    </div>
  );
}
