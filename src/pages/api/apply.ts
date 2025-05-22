import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // In real app, save application and create user if needed
    res.status(200).json({ success: true });
  } else {
    res.status(405).end();
  }
}
