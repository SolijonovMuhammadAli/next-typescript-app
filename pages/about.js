import React from "react";
import Head from "next/head";

export default function About({ title }) {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
      <h1>{title}</h1>
    </>
  );
}

About.getInitialProps = async () => {
  const res = await fetch("http://localhost:4200/about");
  const data = await res.json();
  return {
    title: data.title,
  };
};
