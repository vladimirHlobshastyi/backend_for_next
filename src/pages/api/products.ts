import { NextApiRequest, NextApiResponse } from "next";
import { mocProducts } from "../../moc/moc";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(mocProducts);
}
