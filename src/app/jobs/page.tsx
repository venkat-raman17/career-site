"use client";
import { useState } from "react";
import Link from "next/link";

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

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const filteredJobs = mockJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Search Jobs</h2>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Job title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-1/2"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border px-3 py-2 rounded w-1/2"
        />
      </div>
      <ul className="space-y-4">
        {filteredJobs.length === 0 && (
          <li className="text-gray-500">No jobs found.</li>
        )}
        {filteredJobs.map((job) => (
          <li key={job.id} className="border rounded p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.location}</p>
                <p className="text-sm mt-2">{job.description}</p>
              </div>
              <Link
                href={`/jobs/${job.id}`}
                className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View & Apply
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
