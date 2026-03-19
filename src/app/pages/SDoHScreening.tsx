import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Search, CheckCircle2, AlertCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Alert, AlertDescription } from "../components/ui/alert";
import logoImage from "figma:asset/402617bbcf95896cb7bccd79e2ebca2544a06ac1.png";

interface SDoHAnswers {
  housingStability: string;
  housingQuality: string;
  foodInsecurity1: string;
  foodInsecurity2: string;
  transportation: string[];
  utilities: string;
  employment: string;
  education: string;
  physicalHarm: string;
  emotionalAbuse: string;
}

const initialAnswers: SDoHAnswers = {
  housingStability: "",
  housingQuality: "",
  foodInsecurity1: "",
  foodInsecurity2: "",
  transportation: [],
  utilities: "",
  employment: "",
  education: "",
  physicalHarm: "",
  emotionalAbuse: "",
};

const questions = [
  {
    id: "housingStability",
    title: "Housing Stability",
    description: "What is your living situation today?",
    type: "radio",
    options: [
      { value: "steady", label: "I have a steady place to live" },
      { value: "unstable", label: "I have housing but worry about losing it" },
      { value: "none", label: "I do not have stable housing" },
    ],
  },
  {
    id: "housingQuality",
    title: "Housing Quality",
    description: "Do you have problems with any of the following in your home? (Examples: mold, pests, leaks, lack of heat, broken appliances)",
    type: "radio",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "foodInsecurity1",
    title: "Food Insecurity",
    description: "Within the past 12 months, did you worry that your food would run out before you had money to buy more?",
    type: "radio",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "foodInsecurity2",
    title: "Food Insecurity",
    description: "Within the past 12 months, did the food you bought just not last and you didn't have money to get more?",
    type: "radio",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "transportation",
    title: "Transportation Barriers",
    description: "In the past 12 months, has lack of reliable transportation kept you from:",
    type: "checkbox",
    options: [
      { value: "medical", label: "Medical appointments" },
      { value: "work", label: "Work or school" },
      { value: "daily", label: "Getting things needed for daily living" },
      { value: "none", label: "None of the above" },
    ],
  },
  {
    id: "utilities",
    title: "Utility Needs",
    description: "In the past 12 months, has a utility company threatened to shut off your electricity, gas, oil, or water?",
    type: "radio",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "employment",
    title: "Employment Support",
    description: "Do you want help finding or keeping a job?",
    type: "radio",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "education",
    title: "Education / Training",
    description: "Do you want help with school or job training (e.g., GED, job training programs)?",
    type: "radio",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "physicalHarm",
    title: "Interpersonal Safety",
    description: "How often does anyone physically hurt you?",
    type: "radio",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely" },
      { value: "sometimes", label: "Sometimes" },
      { value: "fairly-often", label: "Fairly often" },
      { value: "frequently", label: "Frequently" },
    ],
  },
  {
    id: "emotionalAbuse",
    title: "Emotional Abuse / Threats",
    description: "How often does anyone insult, threaten, or scream at you?",
    type: "radio",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely" },
      { value: "sometimes", label: "Sometimes" },
      { value: "fairly-often", label: "Fairly often" },
      { value: "frequently", label: "Frequently" },
    ],
  },
];

export default function SDoHScreening() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<SDoHAnswers>(initialAnswers);
  const [submitted, setSubmitted] = useState(false);

  const totalQuestions = questions.length;
  const progress = ((currentStep + 1) / totalQuestions) * 100;
  const currentQuestion = questions[currentStep];

  const isCurrentQuestionAnswered = () => {
    const answer = answers[currentQuestion.id as keyof SDoHAnswers];
    if (currentQuestion.type === "checkbox") {
      return (answer as string[]).length > 0;
    }
    return answer !== "";
  };

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTransportationChange = (value: string) => {
    if (value === "none") {
      setAnswers({ ...answers, transportation: ["none"] });
    } else {
      const current = answers.transportation.filter(v => v !== "none");
      if (current.includes(value)) {
        const updated = current.filter(v => v !== value);
        setAnswers({ ...answers, transportation: updated });
      } else {
        setAnswers({ ...answers, transportation: [...current, value] });
      }
    }
  };

  const hasRisks = () => {
    return (
      answers.housingStability === "unstable" ||
      answers.housingStability === "none" ||
      answers.housingQuality === "yes" ||
      answers.foodInsecurity1 === "yes" ||
      answers.foodInsecurity2 === "yes" ||
      (answers.transportation.length > 0 && !answers.transportation.includes("none")) ||
      answers.utilities === "yes" ||
      answers.employment === "yes" ||
      answers.education === "yes" ||
      (answers.physicalHarm !== "" && answers.physicalHarm !== "never") ||
      (answers.emotionalAbuse !== "" && answers.emotionalAbuse !== "never")
    );
  };

  const getICD10Codes = () => {
    const codes = [];
    if (answers.housingStability === "none") codes.push("Z59.0 – Homelessness");
    if (answers.housingStability === "unstable") codes.push("Z59.1 – Inadequate housing");
    if (answers.foodInsecurity1 === "yes" || answers.foodInsecurity2 === "yes") 
      codes.push("Z59.41 – Food insecurity");
    if (answers.transportation.length > 0 && !answers.transportation.includes("none")) 
      codes.push("Z59.82 – Transportation insecurity");
    return codes;
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="border-b bg-white">
          <div className="container mx-auto px-4 py-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoImage} alt="Care Match" className="h-6 md:h-8" />
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-6 md:py-12 max-w-3xl">
          <Card className="border-t-4 border-t-green-500">
            <CardHeader className="text-center pb-4 p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
              </div>
              <CardTitle className="text-xl md:text-2xl">Screening Complete</CardTitle>
              <CardDescription className="text-sm md:text-base mt-2">
                Thank you for completing the Social Determinants of Health screening
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6 pt-4 md:pt-6 border-t p-4 md:p-6">
              {hasRisks() ? (
                <>
                  <Alert className="border-blue-200 bg-blue-50">
                    <AlertCircle className="h-5 w-5 text-blue-600" />
                    <AlertDescription className="text-gray-700">
                      Based on your responses, you may benefit from additional support services. 
                      A care coordinator will review your screening and contact you about available resources.
                    </AlertDescription>
                  </Alert>

                  {getICD10Codes().length > 0 && (
                    <div className="bg-gray-50 p-6 rounded-lg border">
                      <h4 className="font-semibold text-gray-900 mb-3">Relevant ICD-10 Z Codes</h4>
                      <ul className="space-y-2">
                        {getICD10Codes().map(code => (
                          <li key={code} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-blue-600 font-mono">•</span>
                            <span>{code}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-gray-600 mt-4 pt-4 border-t">
                        These codes may be documented in your health record to help coordinate comprehensive care.
                      </p>
                    </div>
                  )}

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">What happens next?</h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold">1.</span>
                        <span>A care coordinator will contact you within 2-3 business days</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold">2.</span>
                        <span>You may be connected with community resources and support programs</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-600 font-bold">3.</span>
                        <span>This information will be shared with your healthcare provider (if applicable)</span>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <AlertDescription className="text-gray-700">
                    Your screening indicates stable social determinants of health. 
                    If your situation changes, you can complete this screening again at any time.
                  </AlertDescription>
                </Alert>
              )}

              <div className="pt-6 flex flex-col sm:flex-row gap-3">
                <Link to="/" className="flex-1">
                  <Button variant="outline" className="w-full">Return Home</Button>
                </Link>
                <Link to="/provider-search" className="flex-1">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Find a Provider</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoImage} alt="Care Match" className="h-6 md:h-8" />
            </Link>
            <div className="text-xs md:text-sm text-gray-600">
              {currentStep + 1}/{totalQuestions}
            </div>
          </div>
          <div className="mt-3">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4 md:py-8 max-w-3xl">
        {currentStep === 0 && (
          <div className="mb-6 md:mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Social Determinants of Health Screening
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              This brief screening helps identify social needs that may affect your health and well-being. 
              It takes about 2-5 minutes to complete. All information is confidential.
            </p>
          </div>
        )}

        <Card className="border-t-4 border-t-blue-500">
          <CardHeader className="p-4 md:p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="text-xs md:text-sm font-medium text-blue-600 mb-1">
                  Question {currentStep + 1} of {totalQuestions}
                </div>
                <CardTitle className="text-lg md:text-xl">{currentQuestion.title}</CardTitle>
              </div>
            </div>
            <CardDescription className="text-sm md:text-base text-gray-700 mt-2">
              {currentQuestion.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {currentQuestion.type === "radio" ? (
              <RadioGroup
                value={answers[currentQuestion.id as keyof SDoHAnswers] as string}
                onValueChange={(value) => setAnswers({ ...answers, [currentQuestion.id]: value })}
                className="space-y-3"
              >
                {currentQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-colors">
                    <RadioGroupItem value={option.value} id={`${currentQuestion.id}-${option.value}`} />
                    <Label htmlFor={`${currentQuestion.id}-${option.value}`} className="cursor-pointer font-normal flex-1">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-colors cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={answers.transportation.includes(option.value)}
                      onChange={() => handleTransportationChange(option.value)}
                      className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="flex-1">{option.label}</span>
                  </label>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex gap-3 mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          
          {currentStep < totalQuestions - 1 ? (
            <Button
              onClick={handleNext}
              disabled={!isCurrentQuestionAnswered()}
              className="flex-1 gap-2 bg-blue-600 hover:bg-blue-700"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!isCurrentQuestionAnswered()}
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              Submit Screening
            </Button>
          )}
        </div>

        {!isCurrentQuestionAnswered() && (
          <p className="text-sm text-center text-gray-500 mt-4">
            Please select an answer to continue
          </p>
        )}
      </div>
    </div>
  );
}