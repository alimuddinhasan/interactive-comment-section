import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../data/data.json";

interface IUser {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

interface IComment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: IUser;
  replies?: IComment[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse<IComment[]>) {
  if (req.method === "GET") {
    const comments = data.comments
    res.status(200).json(comments);
  } else {
    // Handle any other HTTP method
  }
}
