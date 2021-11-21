import Link from "next/link";
import React, { useState, useEffect } from "react";
import Head from "next/head";

export default function Index({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const res = await fetch("http://localhost:4200/posts");
      const json = await res.json();
      setPosts(json);
    }
    if (!serverPosts) {
      load();
    }
  }, []);

  if (!posts) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Head>
        <title>Posts Header</title>
      </Head>
      <h1>Post pages</h1>
      <p>
        <Link href={`/posts/5`}>5 ID</Link>
      </p>
      <hr />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.author}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
Index.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null };
  }
  const res = await fetch("http://localhost:4200/posts");
  const posts = await res.json();
  return {
    posts,
  };
};
