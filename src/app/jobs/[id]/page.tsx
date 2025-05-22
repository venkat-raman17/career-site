"use client";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";

const mockJobs = [
  {
    id: "1",
    title: "Software Engineer",
    location: "New York, NY",
    description: "Develop and maintain web applications.",
  },
  {
    id: "2",
    title: "Data Analyst",
    location: "Remote",
    description: "Analyze data and generate reports.",
  },
  {
    id: "3",
    title: "Product Manager",
    location: "San Francisco, CA",
    description: "Lead product development teams.",
  },
];

export default function JobDetailPage() {
  const router = useRouter();
  const params = useParams();
  const job = mockJobs.find((j) => j.id === (params?.id ?? ""));

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [applied, setApplied] = useState(false);

  if (!job) return <div>Job not found.</div>;

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, send to API and create account if new
    setApplied(true);
    setTimeout(() => {
      router.push("/apply/success");
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
      <p className="text-gray-600 mb-2">{job.location}</p>
      <p className="mb-6">{job.description}</p>
      <h3 className="font-semibold mb-2">Apply for this job</h3>
      {applied ? (
        <div className="text-green-600">Application submitted! Redirecting...</div>
      ) : (
        <form onSubmit={handleApply} className="flex flex-col gap-4">
          <input
            required
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border px-3 py-2 rounded"
          />
          <input
            required
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Apply
          </button>
        </form>
      )}
    </div>
  );
}
