import Link from "next/link";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Index Header</title>
      </Head>
      <h1>Salom Nex.js!</h1>
      <p>
        <Link href="/posts">Posts</Link>
      </p>
      <p>
        <Link href="/about">About</Link>
      </p>
    </>
  );
}
//rm -rf .git
