import type { NextApiRequest, NextApiResponse } from "next";
import { IUser } from "common/type/user.interface";

import data from "../../data/data.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IUser | null>
) {
  if (req.method === "GET") {
    const user = data.currentUser;
    res.status(200).json(user);
  }
}
