import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Comment from "@/components/Comment/Comment";
import InputComment from "@/components/InputComment/InputComment";
import httpClient from "utils/httpClient";
import { IComment } from "common/type/comment.interface";
import { IUser } from "common/type/user.interface";

export default function Home() {
  // TODO: refactor code to make it clean
  const [comments, setComments] = useState<IComment[]>([]);
  const [user, setUser] = useState<IUser>();
  const [lastId, setLastId] = useState(4);
  useEffect(() => {
    httpClient<IUser>("/api/authenticate").then((data) => {
      setUser(data);
    });
    httpClient<IComment[]>("/api/comment").then((data) => {
      setComments(data);
    });
  }, []);

  const upvoteHandler = (id: number) => {
    const newComments = [...comments];
    const find = newComments.find((comment) => comment.id === id) as IComment;
    find.score++;

    setComments(newComments);
  };

  const downvoteHandler = (id: number) => {
    const newComments = [...comments];
    const find = newComments.find((comment) => comment.id === id) as IComment;
    find.score--;

    setComments(newComments);
  };

  return (
    <Fragment>
      <Head>
        <title>Frontend Mentor | Interactive comments section</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='p-5 flex flex-col gap-5 max-w-3xl'>
        {comments.map(({ user, content, createdAt, score, id, replies }) => (
          <Comment
            user={user}
            comment={content}
            timestamp={createdAt}
            score={score}
            key={id}
            onUpvote={() => upvoteHandler(id)}
            onDownvote={() => downvoteHandler(id)}
          >
            {replies?.map(({ user, content, createdAt, score, id }) => (
              <Comment
                user={user}
                comment={content}
                timestamp={createdAt}
                score={score}
                key={id}
                onUpvote={() => upvoteHandler(id)}
                onDownvote={() => downvoteHandler(id)}
              />
            ))}
          </Comment>
        ))}
        <InputComment user={user} />
      </main>

      <footer className='text-xs text-center my-5'>
        Challenge by&nbsp;
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by&nbsp;<a href='#'>Alimuddin Hasan</a>.
      </footer>
    </Fragment>
  );
}
