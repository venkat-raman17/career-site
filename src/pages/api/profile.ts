import type { NextApiRequest, NextApiResponse } from "next";

const profile = {
  name: "Jane Doe",
  email: "jane@example.com",
  appliedJobs: [
    { id: "1", title: "Software Engineer" },
    { id: "2", title: "Data Analyst" },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(profile);
}
