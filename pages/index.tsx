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
  return (
    <Fragment>
      <Head>
        <title>Frontend Mentor | Interactive comments section</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='p-5 flex flex-col gap-5 max-w-3xl'>
        {comments.map((comment) => (
          <Comment
            avatar={comment.user.image.png}
            comment={comment.content}
            timestamp={comment.createdAt}
            username={comment.user.username}
            score={comment.score}
            key={comment.id}
          >
            {comment.replies?.map((reply) => (
              <Comment
                avatar={reply.user.image.png}
                comment={reply.content}
                timestamp={reply.createdAt}
                score={reply.score}
                username={reply.user.username}
                key={reply.id}
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
