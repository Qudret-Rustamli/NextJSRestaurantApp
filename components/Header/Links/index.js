import React, { useState } from 'react';
import style from './style.module.scss';
import Link from 'next/link';
import Auth from '../../../HOC/authHOC';
const Links = () => {
  const [links, setLinks] = useState();

  return (
    <div className={style.container}>
      <Link href="/" onClick={() => setLinks('')}>
        <a>Home</a>
      </Link>
      {Auth(
        <Link href="/restaurants">
          <a>Restaurants</a>
        </Link>,
      )}
      <Link href="/about">
        <a>About us</a>
      </Link>
      <Link href="/how-it-works">
        <a>How it works</a>
      </Link>
      <Link href="/faq">
        <a>FAQ`s</a>
      </Link>
      ,
    </div>
  );
};

export default Links;
