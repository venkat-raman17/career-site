import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Mock data
  const personalInfo = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    address: "123 Main St",
    zipCode: "12345",
    ssn: "",
    dob: "",
  };

  res.status(200).json(personalInfo);
}
