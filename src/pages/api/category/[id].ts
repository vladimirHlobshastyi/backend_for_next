import { NextApiRequest, NextApiResponse } from "next";
import { allProducts } from "../../../moc/moc";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!Array.isArray(id) && id) res.status(200).json(allProducts[id]);
}
