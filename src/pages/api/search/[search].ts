import { mocTypes, productsTypes, produtsDataType } from "../../../moc/moc";
import { NextApiRequest, NextApiResponse } from "next";
import { allProducts } from "../../../moc/moc";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { search } = req.query;

  const bodyReq = () => {
    if (!Array.isArray(search) && search) {
      return search;
    }
    return "";
  };

  const result = [] as produtsDataType[];

  for (let keyItem in allProducts) {
    allProducts[keyItem].data.forEach((product) => {
      const isIncludes = product.description.includes(bodyReq());
      if (isIncludes) {
        result.push(product);
      }
    });
  }

  res.status(200).json(result);
}
