import { X, Phone, Mail, Video } from "lucide-react";
import { FigmaButton } from "./FigmaButton";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  providerName: string;
  providerPhone?: string;
  providerEmail?: string;
  videoLink?: string;
}

export function AppointmentModal({
  isOpen,
  onClose,
  providerName,
  providerPhone,
  providerEmail,
  videoLink
}: AppointmentModalProps) {
  if (!isOpen) return null;

  // Generate a random reference number (format: #: 57380528)
  const referenceNumber = Math.floor(10000000 + Math.random() * 90000000);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-[24px] w-full max-w-[600px] shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-8 pb-6">
          <h2 className="font-['Sequel_Sans:Roman_Disp',sans-serif] text-[32px] text-[#0a030a] leading-[40px]">
            Book an Appointment
          </h2>
          <button
            onClick={onClose}
            className="size-[40px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6 text-[#7a007a]" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 space-y-6">
          {/* Care Companion Message */}
          <div>
            <p className="font-['Sequel_Sans:Book_Disp',sans-serif] text-[18px] text-[#0a030a] leading-[32px]">
              A Care Companion can help set up an appointment on your behalf. Please provide your reference{" "}
              <span className="font-['Sequel_Sans:Roman_Disp',sans-serif] text-[#7a007a]">
                #: {referenceNumber}
              </span>.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-1">
            <p className="font-['Sequel_Sans:Book_Disp',sans-serif] text-[18px] text-[#0a030a] leading-[28px]">
              Contact us by:
            </p>
            
            <p className="font-['Sequel_Sans:Book_Disp',sans-serif] text-[18px] text-[#0a030a] leading-[28px]">
              Phone:{" "}
              <a
                href="tel:8885150595"
                className="font-['Sequel_Sans:Book_Disp',sans-serif] text-[18px] text-[#7a007a] leading-[28px] hover:underline"
              >
                (888) 515-0595
              </a>
            </p>

            <p className="font-['Sequel_Sans:Book_Disp',sans-serif] text-[18px] text-[#0a030a] leading-[28px]">
              Email:{" "}
              <a
                href="mailto:weserve@caresolace.org"
                className="font-['Sequel_Sans:Book_Disp',sans-serif] text-[18px] text-[#7a007a] leading-[28px] hover:underline"
              >
                weserve@caresolace.org
              </a>
            </p>

            <a
              href="https://meet.caresolace.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Sequel_Sans:Book_Disp',sans-serif] text-[18px] text-[#7a007a] leading-[28px] hover:underline block"
            >
              Video chat
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 pb-8">
          <FigmaButton onClick={onClose} className="w-full">
            Dismiss
          </FigmaButton>
        </div>
      </div>
    </div>
  );
}