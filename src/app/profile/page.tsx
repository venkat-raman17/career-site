import Link from "next/link";

export default function ProfilePage() {
  // Mock user data
  const user = {
    name: "Jane Doe",
    email: "jane@example.com",
    appliedJobs: [
      { id: "1", title: "Software Engineer" },
      { id: "2", title: "Data Analyst" },
    ],
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <div className="mb-6 flex justify-end">
        <Link
          href="/post-apply"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Your Tasks
        </Link>
      </div>
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="mb-6">
        <div className="font-semibold">Name:</div>
        <div>{user.name}</div>
        <div className="font-semibold mt-2">Email:</div>
        <div>{user.email}</div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Applied Jobs</h3>
        <ul className="list-disc ml-6">
          {user.appliedJobs.map((job) => (
            <li key={job.id}>{job.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}