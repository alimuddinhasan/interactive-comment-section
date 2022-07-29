import { IUser } from "./user.interface";

export interface IComment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: IUser;
  replies?: IComment[];
}
