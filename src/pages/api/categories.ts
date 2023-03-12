import { NextApiRequest, NextApiResponse } from "next";
import { categoriesMoc } from "../../moc/moc";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(categoriesMoc);
}
