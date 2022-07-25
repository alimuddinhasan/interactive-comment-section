import { Fragment } from "react";
import Head from "next/head";
import Comment from "@/components/Comment/Comment";
import InputComment from "@/components/InputComment/InputComment";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Frontend Mentor | Interactive comments section</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='p-5 flex flex-col gap-5 max-w-3xl'>
        <Comment
          avatar='test'
          comment='test'
          timestamp={new Date()}
          username='test'
        >
          <Comment
            avatar='test'
            comment='test'
            timestamp={new Date()}
            username='test'
          />
        </Comment>
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
