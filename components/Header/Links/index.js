import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
const Links = () => {
  return (
    <div className={style.container}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/restaurants">
        <a>Restaurants</a>
      </Link>
      <Link href="/about">
        <a>About us</a>
      </Link>
      <Link href="/how-it-works">
        <a>How it works</a>
      </Link>
      <Link href="/faq">
        <a>FAQ`s</a>
      </Link>
    </div>
  );
};

export default Links;
