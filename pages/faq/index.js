import Head from "next/head";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
const FaqContainer = dynamic(() => import("../../features/FAQ/FaqContainer"));

const Faq = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title> FAQ | Foody Delivery</title>
      </Head>
      <FaqContainer />
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

export default Faq;
