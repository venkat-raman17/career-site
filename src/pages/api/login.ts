import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Accept any email/password for mock
    res.status(200).json({ success: true, name: "Jane Doe" });
  } else {
    res.status(405).end();
  }
}
