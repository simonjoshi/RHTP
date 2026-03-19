import { useState } from "react";
import { X, Phone, MapPin, Clock, Calendar, MessageCircle, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Provider {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  distance: string;
}

interface ConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  provider: Provider | null;
  connectionType: "call-myself" | "provider-call" | "cc-help" | null;
  onComplete: () => void;
}

export function ConnectionModal({ isOpen, onClose, provider, connectionType, onComplete }: ConnectionModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    preferredTimes: [] as string[],
    preferredDays: [] as string[],
    notes: "",
    helpNeeded: "",
    contactMethod: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !provider || !connectionType) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleNext = () => {
    const totalSteps = connectionType === "call-myself" ? 1 : 4;
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      onComplete();
      onClose();
      // Reset state
      setCurrentStep(1);
      setIsSubmitted(false);
      setFormData({
        phoneNumber: "",
        preferredTimes: [],
        preferredDays: [],
        notes: "",
        helpNeeded: "",
        contactMethod: ""
      });
    }, 2000);
  };

  const toggleArrayValue = (array: string[], value: string) => {
    if (array.includes(value)) {
      return array.filter(v => v !== value);
    } else {
      return [...array, value];
    }
  };

  const renderCallMyselfContent = () => (
    <div className="space-y-4">
      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-gray-500" />
          <div>
            <div className="text-sm text-gray-500">Phone</div>
            <div className="text-base font-semibold text-gray-900">(555) 123-4567</div>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
          <div>
            <div className="text-sm text-gray-500">Address</div>
            <div className="text-base text-gray-900">
              <div>123 Main Street, Suite 200</div>
              <div>Denver, CO 80202</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="h-5 w-5 text-gray-500" />
          <div>
            <div className="text-sm text-gray-500">Hours</div>
            <div className="text-base text-gray-900">Monday - Friday: 9AM - 5PM</div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <p className="text-sm text-blue-900">
          <strong>Tip:</strong> When calling, mention you found them through Care Match for priority scheduling.
        </p>
      </div>

      <Button 
        onClick={() => {
          onComplete();
          onClose();
        }}
        className="w-full bg-purple-700 hover:bg-purple-800 text-white"
      >
        Done
      </Button>
    </div>
  );

  const renderProviderCallStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Confirm your phone number
              </label>
              <Input
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full"
              />
              <p className="text-xs text-gray-500 mt-1">
                The provider will call you at this number
              </p>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                What time works best for a call?
              </label>
              <div className="grid grid-cols-1 gap-2">
                {["Morning (8AM - 12PM)", "Afternoon (12PM - 5PM)", "Evening (5PM - 8PM)"].map((time) => (
                  <button
                    key={time}
                    onClick={() => setFormData({ 
                      ...formData, 
                      preferredTimes: toggleArrayValue(formData.preferredTimes, time)
                    })}
                    className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                      formData.preferredTimes.includes(time)
                        ? "border-purple-700 bg-purple-50 text-purple-700"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Which days work for you?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                  <button
                    key={day}
                    onClick={() => setFormData({ 
                      ...formData, 
                      preferredDays: toggleArrayValue(formData.preferredDays, day)
                    })}
                    className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                      formData.preferredDays.includes(day)
                        ? "border-purple-700 bg-purple-50 text-purple-700"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Anything the provider should know?
              </label>
              <textarea
                placeholder="e.g., insurance questions, specific concerns, scheduling preferences..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">Optional</p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const renderCCHelpStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                What help do you need from your Care Coordinator?
              </label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Help with scheduling",
                  "Insurance questions",
                  "General guidance",
                  "Provider recommendations"
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => setFormData({ ...formData, helpNeeded: option })}
                    className={`p-3 rounded-lg border-2 text-sm font-medium transition-all text-left ${
                      formData.helpNeeded === option
                        ? "border-purple-700 bg-purple-50 text-purple-700"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                When should we contact you?
              </label>
              <div className="grid grid-cols-1 gap-2">
                {["Morning (8AM - 12PM)", "Afternoon (12PM - 5PM)", "Evening (5PM - 8PM)", "Anytime"].map((time) => (
                  <button
                    key={time}
                    onClick={() => setFormData({ 
                      ...formData, 
                      preferredTimes: [time]
                    })}
                    className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                      formData.preferredTimes.includes(time)
                        ? "border-purple-700 bg-purple-50 text-purple-700"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                How would you like to be contacted?
              </label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { value: "Phone call", icon: Phone },
                  { value: "Text message", icon: MessageCircle },
                  { value: "Either is fine", icon: Check }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFormData({ ...formData, contactMethod: option.value })}
                    className={`p-3 rounded-lg border-2 text-sm font-medium transition-all flex items-center gap-2 ${
                      formData.contactMethod === option.value
                        ? "border-purple-700 bg-purple-50 text-purple-700"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <option.icon className="h-4 w-4" />
                    {option.value}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Additional context for your Care Coordinator
              </label>
              <textarea
                placeholder="Share any details that would help us assist you better..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">Optional</p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const totalSteps = connectionType === "call-myself" ? 1 : 4;
  const isLastStep = currentStep === totalSteps;

  const getTitle = () => {
    if (isSubmitted) return "Request Submitted!";
    
    switch (connectionType) {
      case "call-myself":
        return "Contact Information";
      case "provider-call":
        return "Request Provider Callback";
      case "cc-help":
        return "Get Help from Care Coordinator";
      default:
        return "";
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
        {isSubmitted ? (
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
            <p className="text-gray-600">
              {connectionType === "provider-call" 
                ? "The provider will call you within 24-48 hours."
                : "Your Care Coordinator will reach out within 24-48 hours."}
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{getTitle()}</h3>
                  <p className="text-sm text-gray-600">{provider.name}</p>
                  <p className="text-xs text-gray-500">{provider.specialty}</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Progress Dots */}
              {connectionType !== "call-myself" && (
                <div className="flex items-center justify-center gap-2">
                  {Array.from({ length: totalSteps }).map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all ${
                        index + 1 === currentStep
                          ? "w-8 bg-purple-700"
                          : index + 1 < currentStep
                          ? "w-2 bg-purple-700"
                          : "w-2 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              {connectionType === "call-myself" && renderCallMyselfContent()}
              {connectionType === "provider-call" && renderProviderCallStep()}
              {connectionType === "cc-help" && renderCCHelpStep()}
            </div>

            {/* Footer - Navigation Buttons */}
            {connectionType !== "call-myself" && (
              <div className="p-6 pt-0">
                <div className="flex gap-3">
                  {currentStep > 1 && (
                    <Button
                      onClick={handleBack}
                      variant="outline"
                      className="flex-1 border-gray-300 text-gray-700"
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Back
                    </Button>
                  )}
                  <Button
                    onClick={isLastStep ? handleSubmit : handleNext}
                    className="flex-1 bg-purple-700 hover:bg-purple-800 text-white"
                  >
                    {isLastStep ? "Submit Request" : "Next"}
                    {!isLastStep && <ChevronRight className="h-4 w-4 ml-1" />}
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}