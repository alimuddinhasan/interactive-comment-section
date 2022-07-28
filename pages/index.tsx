import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Comment from "@/components/Comment/Comment";
import InputComment from "@/components/InputComment/InputComment";
import httpClient from "utils/httpClient";
import { IComment } from "./api/comment";

export default function Home() {
  // TODO: refactor code to make it clean
  const [comments, setComments] = useState<IComment[]>([]);
  useEffect(() => {
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
            avatar={user.image.png}
            comment={content}
            timestamp={createdAt}
            username={user.username}
            score={score}
            key={id}
            onUpvote={() => upvoteHandler(id)}
            onDownvote={() => downvoteHandler(id)}
          >
            {replies?.map(({ user, content, createdAt, score, id }) => (
              <Comment
                avatar={user.image.png}
                comment={content}
                timestamp={createdAt}
                score={score}
                username={user.username}
                key={id}
                onUpvote={() => upvoteHandler(id)}
                onDownvote={() => downvoteHandler(id)}
              />
            ))}
          </Comment>
        ))}
        <InputComment />
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
