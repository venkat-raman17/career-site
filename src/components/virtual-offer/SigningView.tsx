"use client";
import { useState, useEffect } from "react";

interface SigningViewProps {
  candidateName: string;
  email: string;
  offerDetails: any;
  personalInfo: any;
}

export default function SigningView({ candidateName, email, offerDetails, personalInfo }: SigningViewProps) {
  const [signingUrl, setSigningUrl] = useState("");

  useEffect(() => {
    const getSigningUrl = async () => {
      const response = await fetch('/api/docusign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          candidateName,
          email,
          offerDetails,
          personalInfo
        })
      });
      
      const data = await response.json();
      if (data.signingUrl) {
        setSigningUrl(data.signingUrl);
      }
    };

    getSigningUrl();
  }, [candidateName, email, offerDetails, personalInfo]);

  return (
    <div>
      <h3 className="font-semibold mb-2">Sign Offer Document</h3>
      <p className="mb-4">Please sign your offer letter using DocuSign below.</p>
      {signingUrl ? (
        <iframe
          src={signingUrl}
          title="DocuSign Embedded Signing"
          className="w-full h-96 border rounded"
        />
      ) : (
        <div className="flex items-center justify-center h-96 border rounded">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p>Preparing your document for signing...</p>
          </div>
        </div>
      )}
    </div>
  );
}
