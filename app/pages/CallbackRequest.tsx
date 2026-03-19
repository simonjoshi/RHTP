import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "../components/ui/button";

interface LocationState {
  provider: {
    id: string;
    name: string;
    specialty: string;
    category: string;
  };
  callbackType: "provider-direct" | "cc-coordinate";
}

export default function CallbackRequest() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");

  const days = [
    { id: "weekdays", label: "Weekdays Only" },
    { id: "weekends", label: "Weekends Only" },
    { id: "any", label: "Any Day" }
  ];

  const times = [
    { id: "morning", label: "Morning (8 AM - 12 PM)" },
    { id: "afternoon", label: "Afternoon (12 PM - 5 PM)" },
    { id: "evening", label: "Evening (5 PM - 8 PM)" },
    { id: "anytime", label: "Any Time" }
  ];

  const toggleDay = (dayId: string) => {
    setSelectedDays(prev =>
      prev.includes(dayId)
        ? prev.filter(d => d !== dayId)
        : [...prev, dayId]
    );
  };

  const toggleTime = (timeId: string) => {
    setSelectedTimes(prev =>
      prev.includes(timeId)
        ? prev.filter(t => t !== timeId)
        : [...prev, timeId]
    );
  };

  const handleContinue = () => {
    // Only show HIPAA consent for provider-direct calls
    if (state?.callbackType === "provider-direct") {
      navigate("/hipaa-consent", {
        state: {
          ...state,
          availability: {
            days: selectedDays,
            times: selectedTimes,
            phone: phoneNumber,
            notes
          }
        }
      });
    } else {
      // For CC calls, skip HIPAA and go straight back to portal
      navigate("/portal", {
        state: {
          callbackRequested: true,
          providerId: state?.provider.id
        }
      });
    }
  };

  const isValid = selectedDays.length > 0 && selectedTimes.length > 0 && phoneNumber.length >= 10;

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
            onClick={() => navigate("/portal")}
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
            <Clock className="h-6 w-6 text-purple-700" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Best Time to Call You</h1>
            {state?.provider && (
              <p className="text-gray-600">For: {state.provider.name}</p>
            )}
          </div>
        </div>

        {/* Phone Number */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-900 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="(555) 555-5555"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent"
          />
        </div>

        {/* Preferred Days */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Preferred day(s) to be called:
          </h3>
          <p className="text-sm text-gray-600 mb-3">Select all that apply.</p>
          <div className="space-y-2">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => toggleDay(day.id)}
                className={`w-full px-5 py-3 rounded-full border transition-all ${
                  selectedDays.includes(day.id)
                    ? "bg-purple-700 text-white border-purple-700"
                    : "bg-white text-purple-700 border-gray-200 hover:border-purple-700"
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
        </div>

        {/* Preferred Times */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Preferred time(s) to be called:
          </h3>
          <p className="text-sm text-gray-600 mb-3">Select all that apply.</p>
          <div className="space-y-2">
            {times.map((time) => (
              <button
                key={time.id}
                onClick={() => toggleTime(time.id)}
                className={`w-full px-5 py-3 rounded-full border transition-all ${
                  selectedTimes.includes(time.id)
                    ? "bg-purple-700 text-white border-purple-700"
                    : "bg-white text-purple-700 border-gray-200 hover:border-purple-700"
                }`}
              >
                {time.label}
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Specific preferences (optional)
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g., weekday mornings between 9-11 AM or 6 PM on weekends"
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent resize-none"
          />
        </div>
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
            onClick={handleContinue}
            disabled={!isValid}
            className="flex-1 bg-purple-700 hover:bg-purple-800 text-white rounded-full disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
