import type { NextApiRequest, NextApiResponse } from "next";

const offer = {
  position: "Software Engineer",
  salary: "$120,000/year",
  location: "Remote",
  steps: [
    "View & Accept Offer",
    "Personal Information",
    "Sign Offer Document",
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(offer);
}
