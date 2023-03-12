import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { authToken } from "../../moc/moc";


const loginMock = "user";
const passwordMock: string = "password";
const token = authToken;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, password }: { username: string; password: string } =
    req.body;

  // проверка введенных данных
  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password are required",
    });
  }

  // сравнение введенных данных с моками
  const isLoginValid = username === loginMock;
  /*   const isPasswordValid = bcrypt.compareSync(password, passwordMock); */
  const isPasswordValid = password === passwordMock;

  if (!isLoginValid || !isPasswordValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // отправка ответа с токеном
  res.status(200).json({ token });
}
