import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Head from "next/head";

export default function PostID({ post: serverPost }) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const res = await fetch(
        `http://localhost:4200/posts/${router.query.postId}`
      );
      const json = await res.json();
      setPost(json);
    }
    if (!serverPost) {
      load();
    }
  }, []);

  const LinkBack = () => {
    Router.push("/");
  };
  if (!post) {
    return <h1> Loading...</h1>;
  }
  return (
    <>
      <Head>
        <title>{router.query.postId} Header</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Param {router.query.postId}</h1>
      <button onClick={LinkBack}>Go home</button>
      <button onClick={() => Router.push("/posts")}>Go inline home</button>
      <hr />
      <h1>{post.author}</h1>
      <h2>{post.title}</h2>
    </>
  );
}

PostID.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return { post: null };
  }
  const res = await fetch(`http://localhost:4200/posts/${ctx.query.postId}`);
  const json = await res.json();
  return {
    post: json,
  };
};
