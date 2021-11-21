import React from "react";
import style from "./../styles/error.module.scss";
import Link from "next/Link";

export default function Error() {
  return (
    <>
      <h1 className={style.error}>Error 404</h1>
      <p>
        Please <Link href={"/"}>go back</Link> to safety
      </p>
    </>
  );
}
