import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";

interface BackButtonProps {
  label?: string;
  className?: string;
}

export function BackButton({ label = "Back", className = "" }: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      onClick={() => navigate(-1)}
      className={`flex items-center gap-2 text-gray-600 hover:text-gray-900 ${className}`}
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Button>
  );
}
