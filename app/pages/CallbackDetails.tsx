import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, Phone, Clock, Shield, Check, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import logoImage from "figma:asset/402617bbcf95896cb7bccd79e2ebca2544a06ac1.png";

interface Provider {
  id: string;
  name: string;
  category: "Mental Health" | "Physical Health" | "Social Services";
}

export default function CallbackDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Store providers in state to survive remounts
  const [providers, setProviders] = useState<Provider[]>(() => {
    const stateProviders = (location.state as any)?.providers as Provider[] || [];
    console.log('=== CALLBACK DETAILS PAGE LOADED ===');
    console.log('Location state:', location.state);
    console.log('Providers from state:', (location.state as any)?.providers);
    console.log('Providers initialized:', stateProviders);
    console.log('Providers count:', stateProviders.length);
    return stateProviders;
  });

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [hipaaConsent, setHipaaConsent] = useState(false);

  const timeOptions = [
    "Morning (8AM - 12PM)",
    "Afternoon (12PM - 5PM)",
    "Evening (5PM - 8PM)"
  ];

  const dayOptions = [
    "Weekdays",
    "Weekends",
    "Any day"
  ];

  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const handleTimeToggle = (time: string) => {
    setSelectedTimes(prev =>
      prev.includes(time)
        ? prev.filter(t => t !== time)
        : [...prev, time]
    );
  };

  const handleDayToggle = (day: string) => {
    setSelectedDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  const handleNext = () => {
    if (step === 1 && selectedTimes.length > 0 && selectedDays.length > 0) {
      setStep(2);
    } else if (step === 2 && phoneNumber.replace(/\D/g, '').length === 10) {
      setStep(3);
    }
  };

  const handleSubmit = () => {
    console.log('=== SUBMITTING CALLBACK REQUEST ===');
    console.log('HIPAA consent:', hipaaConsent);
    console.log('Providers to send:', providers);
    console.log('Providers count:', providers.length);
    
    if (hipaaConsent) {
      console.log('✅ Navigating to client-portal with state:', {
        callbackSubmitted: true,
        providers: providers
      });
      
      // Navigate back to client portal with success state
      navigate("/client-portal", {
        state: {
          callbackSubmitted: true,
          providers: providers
        }
      });
    } else {
      console.log('❌ Cannot submit - HIPAA consent not checked');
    }
  };

  const isStep1Valid = selectedTimes.length > 0 && selectedDays.length > 0;
  const isStep2Valid = phoneNumber.replace(/\D/g, '').length === 10;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-5 py-4">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <button
            onClick={() => step === 1 ? navigate(-1) : setStep((step - 1) as 1 | 2)}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back</span>
          </button>
          <img src={logoImage} alt="Care Match" className="h-6 md:h-8" />
          <div className="w-20" /> {/* Spacer for alignment */}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white border-b border-gray-200 px-5 py-3">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 1 ? 'bg-purple-700 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {step > 1 ? <Check className="h-4 w-4" /> : '1'}
              </div>
              <span className={`text-sm font-medium ${step >= 1 ? 'text-purple-700' : 'text-gray-500'}`}>
                Availability
              </span>
            </div>
            <div className={`flex-1 h-0.5 mx-2 ${step >= 2 ? 'bg-purple-700' : 'bg-gray-200'}`} />
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 2 ? 'bg-purple-700 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {step > 2 ? <Check className="h-4 w-4" /> : '02'}
              </div>
              <div className="flex flex-col">
                <span className={`text-sm font-medium ${step >= 2 ? 'text-purple-700' : 'text-gray-500'}`}>
                  Contact
                </span>
                <span className={`text-xs ${step >= 2 ? 'text-purple-600' : 'text-gray-400'}`}>
                  Your Mental Health Needs
                </span>
              </div>
            </div>
            <div className={`flex-1 h-0.5 mx-2 ${step >= 3 ? 'bg-purple-700' : 'bg-gray-200'}`} />
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 3 ? 'bg-purple-700 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                3
              </div>
              <span className={`text-sm font-medium ${step >= 3 ? 'text-purple-700' : 'text-gray-500'}`}>
                Consent
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-lg mx-auto px-5 py-6">
        {/* Provider Summary */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Callback Request Summary</h3>
            <p className="text-sm text-gray-600 mb-3">
              {providers.length} provider{providers.length !== 1 ? 's' : ''} selected
            </p>
            <div className="space-y-1">
              {providers.map((provider) => (
                <div key={provider.id} className="flex items-center justify-between text-sm">
                  <span className="text-gray-900">{provider.name}</span>
                  <span className="text-gray-500 text-xs">{provider.category}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Step 1: Best Time to Call */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">When can we call you?</h2>
                  <p className="text-sm text-gray-600">Select your preferred times</p>
                </div>
              </div>

              <Card className="mb-4">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Time of Day</h3>
                  <div className="space-y-2">
                    {timeOptions.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeToggle(time)}
                        className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                          selectedTimes.includes(time)
                            ? 'border-purple-700 bg-purple-50'
                            : 'border-gray-200 hover:border-purple-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`font-medium ${
                            selectedTimes.includes(time) ? 'text-purple-700' : 'text-gray-900'
                          }`}>
                            {time}
                          </span>
                          {selectedTimes.includes(time) && (
                            <Check className="h-5 w-5 text-purple-700" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Days of Week</h3>
                  <div className="space-y-2">
                    {dayOptions.map((day) => (
                      <button
                        key={day}
                        onClick={() => handleDayToggle(day)}
                        className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                          selectedDays.includes(day)
                            ? 'border-purple-700 bg-purple-50'
                            : 'border-gray-200 hover:border-purple-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`font-medium ${
                            selectedDays.includes(day) ? 'text-purple-700' : 'text-gray-900'
                          }`}>
                            {day}
                          </span>
                          {selectedDays.includes(day) && (
                            <Check className="h-5 w-5 text-purple-700" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              onClick={handleNext}
              disabled={!isStep1Valid}
              className="w-full bg-purple-700 hover:bg-purple-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full py-6 font-semibold flex items-center justify-center gap-2"
            >
              Continue
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Step 2: Phone Number */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">What's your phone number?</h2>
                  <p className="text-sm text-gray-600">We'll use this to call you back</p>
                </div>
              </div>

              <Card>
                <CardContent className="p-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-700 focus:outline-none text-lg"
                    maxLength={14}
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Your phone number is private and will only be used for callback purposes
                  </p>
                </CardContent>
              </Card>

              {/* Selected Availability Summary */}
              <Card className="mt-4">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    Selected Availability
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600">Time: </span>
                      <span className="text-gray-900 font-medium">{selectedTimes.join(', ')}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Days: </span>
                      <span className="text-gray-900 font-medium">{selectedDays.join(', ')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              onClick={handleNext}
              disabled={!isStep2Valid}
              className="w-full bg-purple-700 hover:bg-purple-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full py-6 font-semibold flex items-center justify-center gap-2"
            >
              Continue
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Step 3: HIPAA Consent */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">HIPAA Consent</h2>
                  <p className="text-sm text-gray-600">Review and sign consent form</p>
                </div>
              </div>

              <Card>
                <CardContent className="p-4">
                  <div className="prose prose-sm max-w-none">
                    <h3 className="font-semibold text-gray-900 mb-3">Authorization for Release of Information</h3>
                    <div className="text-sm text-gray-700 space-y-3 max-h-64 overflow-y-auto border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <p>
                        I authorize Care Match and its care coordination team to share my contact information and service needs with the healthcare providers I have selected.
                      </p>
                      <p>
                        <strong>Information to be shared:</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Name and contact information</li>
                        <li>Preferred callback times</li>
                        <li>General nature of services requested</li>
                        <li>Insurance information (if provided)</li>
                      </ul>
                      <p>
                        <strong>Purpose:</strong> To facilitate connections between you and the selected healthcare providers for scheduling appointments and receiving care.
                      </p>
                      <p>
                        <strong>Your Rights:</strong> You have the right to revoke this authorization at any time by contacting Care Match. Revocation will not affect information already shared.
                      </p>
                      <p className="text-xs text-gray-600 italic">
                        This authorization will remain in effect for 90 days from the date of signature or until services are scheduled, whichever comes first.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => setHipaaConsent(!hipaaConsent)}
                      className={`w-full flex items-start gap-3 p-4 rounded-lg border-2 transition-all ${
                        hipaaConsent
                          ? 'border-purple-700 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-200'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        hipaaConsent
                          ? 'bg-purple-700 border-purple-700'
                          : 'border-gray-300'
                      }`}>
                        {hipaaConsent && <Check className="h-3 w-3 text-white" />}
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-medium text-gray-900">
                          I have read and agree to the authorization above
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          By checking this box, you are providing your electronic signature
                        </p>
                      </div>
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Summary Card */}
              <Card>
                <CardContent className="p-4 bg-purple-50">
                  <h3 className="font-semibold text-purple-900 mb-3">Request Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-purple-700">Providers: </span>
                      <span className="text-purple-900 font-medium">{providers.length}</span>
                    </div>
                    <div>
                      <span className="text-purple-700">Phone: </span>
                      <span className="text-purple-900 font-medium">{phoneNumber}</span>
                    </div>
                    <div>
                      <span className="text-purple-700">Availability: </span>
                      <span className="text-purple-900 font-medium">
                        {selectedTimes.join(', ')} • {selectedDays.join(', ')}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!hipaaConsent}
              className="w-full bg-purple-700 hover:bg-purple-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full py-6 font-semibold flex items-center justify-center gap-2"
            >
              <Check className="h-5 w-5" />
              Submit Callback Request
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}