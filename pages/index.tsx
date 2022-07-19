import { Fragment } from "react";
import Head from "next/head";
import Comment from "@/components/Comment/Comment";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Frontend Mentor | Interactive comments section</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className="p-5">
        <Comment />
      </main>

      <footer className='text-xs text-center mt-5'>
        Challenge by&nbsp;
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by&nbsp;<a href='#'>Alimuddin Hasan</a>.
      </footer>
    </Fragment>
  );
}
