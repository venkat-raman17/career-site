"use client";
import { useState } from "react";
import OfferDetails from "@/components/virtual-offer/OfferDetails";
import PersonalInfo from "@/components/virtual-offer/PersonalInfo";
import SigningView from "@/components/virtual-offer/SigningView";
import type { PersonalInfoType } from "@/components/virtual-offer/PersonalInfo";

const steps = [
  "View & Accept Offer",
  "Update Information",
  "Sign Offer Document",
];

export default function VirtualOfferPage() {
  const [step, setStep] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [completedInfo, setCompletedInfo] = useState<PersonalInfoType | null>(null);
  const [offerDetails, setOfferDetails] = useState(null);

  const handleAccept = () => {
    setAccepted(true);
    setTimeout(() => setStep(1), 500);
  };

  const handlePersonalInfoComplete = (info: PersonalInfoType) => {
    setCompletedInfo(info);
    setStep(2);
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Virtual Job Offer</h2>
      <div className="flex gap-2 mb-8">
        {steps.map((label, idx) => (
          <div
            key={label}
            className={`flex-1 px-2 py-1 rounded text-center ${
              idx === step ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {label}
          </div>
        ))}
      </div>
      
      {step === 0 && <OfferDetails accepted={accepted} onAccept={handleAccept} />}
      {step === 1 && <PersonalInfo onComplete={handlePersonalInfoComplete} />}
      {step === 2 && completedInfo && (
        <SigningView 
          candidateName={`${completedInfo.firstName} ${completedInfo.lastName}`}
          email={completedInfo.email}
          offerDetails={offerDetails}
          personalInfo={completedInfo}
        />
      )}
    </div>
  );
}
