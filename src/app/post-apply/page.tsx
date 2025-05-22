import Link from "next/link";
import Image from "next/image";

const mockTasks = [
  { id: 1, type: "Assessment", status: "Pending" },
  { id: 2, type: "Virtual Job Offer", status: "Action Required" },
  { id: 3, type: "Background Check", status: "In Progress" },
  { id: 4, type: "Drug Screen", status: "Completed" },
  { id: 5, type: "Orientation Event", status: "Scheduled" },
];

export default function PostApplyPage() {
  return (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>
      <ul className="space-y-4">
        {mockTasks.map((task) => (
          <li key={task.id} className="border rounded p-4 flex justify-between items-center">
            <div>
              <div className="font-semibold">{task.type}</div>
              <div className="text-sm text-gray-600">Status: {task.status}</div>
            </div>
            {task.type === "Virtual Job Offer" && (
              <a
                href="/virtual-offer"
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                View
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}