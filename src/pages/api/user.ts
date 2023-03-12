import { NextApiRequest, NextApiResponse } from "next";
import { authToken } from "../../moc/moc";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { authKey } = req.body;
  const { token } = authToken;

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  } else if (token === authKey) {
    return res.status(200).json({ message: "auth" });
  } else {
    return res.status(405).json({ message: "error" });
  }
}
