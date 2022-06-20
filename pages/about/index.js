import React from "react";
import Head from 'next/head';

import AboutContent from "../../features/About/AboutContainer";

const AboutUs = () => {
  return <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <title> About | Foody Delivery</title>
      </Head>
  <AboutContent />
  </>
};

export default AboutUs;