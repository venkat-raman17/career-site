import type { NextApiRequest, NextApiResponse } from "next";

const tasks = [
  { id: 1, type: "Assessment", status: "Pending" },
  { id: 2, type: "Virtual Job Offer", status: "Action Required" },
  { id: 3, type: "Background Check", status: "In Progress" },
  { id: 4, type: "Drug Screen", status: "Completed" },
  { id: 5, type: "Orientation Event", status: "Scheduled" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(tasks);
}
