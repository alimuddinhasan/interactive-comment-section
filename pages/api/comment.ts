import type { NextApiRequest, NextApiResponse } from "next";

import { IComment } from "common/type/comment.interface";
import data from "../../data/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse<IComment[]>) {
  if (req.method === "GET") {
    const comments = data.comments
    res.status(200).json(comments);
  } else {
    // Handle any other HTTP method
  }
}
