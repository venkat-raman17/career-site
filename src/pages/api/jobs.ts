import type { NextApiRequest, NextApiResponse } from "next";

const jobs = [
  { id: "1", title: "Software Engineer", location: "New York, NY" },
  { id: "2", title: "Data Analyst", location: "Remote" },
  { id: "3", title: "Product Manager", location: "San Francisco, CA" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(jobs);
}
