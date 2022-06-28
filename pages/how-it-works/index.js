import HowItWorksContainer from "../../features/HowItWorks/HowItWorksContainer";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HowItWork = () => {
  return (
    <>
      <Head>
        <title> How It Works | Foody Delivery</title>
      </Head>
      <HowItWorksContainer />
    </>
  );
};

export async function getStaticProps({ locale }) {
  let languages = {
    ...(await serverSideTranslations(locale, ["common", "menu"])),
  };

  return {
    props: {
      ...languages,
    },
  };
}

export default HowItWork;
