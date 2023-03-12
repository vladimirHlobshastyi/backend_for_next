import { NextApiRequest, NextApiResponse } from "next";
import { blogPosts, blogPostsTypes } from "../../../moc/moc";

type responsType = {
  data: blogPostsTypes[];
  totalBlogs: number;
  totalPages: number;
};

const postsPerPage = 5;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<responsType | { message: string }>
) {
  const page =
    typeof req.query.page === "string" ? Number(req.query.page) : undefined;

  const startIndex = (Number(page) - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const totalPages = Math.ceil(blogPosts.length / 5);

  const data = blogPosts.slice(startIndex, endIndex);
  const responsePosts: responsType = {
    data,
    totalBlogs: blogPosts.length,
    totalPages,
  };

  if (!page) {
    res.status(400).json({
      message:
        "не верный формат страницы. Убедитесь в правильности указанных параметров",
    });
  } else if (page > totalPages) {
    res.status(400).json({
      message:
        "не валидный номер страницы, убедитесь что вы указали правильный номер страницы",
    });
  } else if (req.method !== "GET") {
    res.status(405).json({ message: "Метод не поддерживается" });
  } else {
    
    res.status(200).json(responsePosts);
  }
}
