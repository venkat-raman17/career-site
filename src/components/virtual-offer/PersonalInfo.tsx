"use client";
import { useState, useEffect } from "react";

interface PersonalInfoProps {
  onComplete: (info: PersonalInfoType) => void;
}

export interface PersonalInfoType {
  ssn: string;
  dob: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  zipCode: string;
}

export default function PersonalInfo({ onComplete }: PersonalInfoProps) {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoType>({
    ssn: "",
    dob: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipCode: "",
  });

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      const response = await fetch('/api/personal-info');
      const data = await response.json();
      setPersonalInfo(prev => ({ ...prev, ...data }));
    };

    fetchPersonalInfo();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(personalInfo);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <label>
          First Name
          <input
            type="text"
            value={personalInfo.firstName}
            readOnly
            className="border px-3 py-2 rounded w-full bg-gray-100"
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            value={personalInfo.lastName}
            readOnly
            className="border px-3 py-2 rounded w-full bg-gray-100"
          />
        </label>
      </div>
      <label>
        Email
        <input
          type="email"
          value={personalInfo.email}
          readOnly
          className="border px-3 py-2 rounded w-full bg-gray-100"
        />
      </label>
      <label>
        Address
        <input
          type="text"
          value={personalInfo.address}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, address: e.target.value })
          }
          className="border px-3 py-2 rounded w-full"
        />
      </label>
      <label>
        Zip Code
        <input
          type="text"
          value={personalInfo.zipCode}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, zipCode: e.target.value })
          }
          className="border px-3 py-2 rounded w-full"
        />
      </label>
      <label>
        SSN
        <input
          type="text"
          value={personalInfo.ssn}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, ssn: e.target.value })
          }
          className="border px-3 py-2 rounded w-full"
        />
      </label>
      <label>
        Date of Birth
        <input
          type="date"
          value={personalInfo.dob}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, dob: e.target.value })
          }
          className="border px-3 py-2 rounded w-full"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
      >
        Continue
      </button>
    </form>
  );
}
