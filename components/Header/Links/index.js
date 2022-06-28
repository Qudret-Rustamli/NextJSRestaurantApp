import React, { useState } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Links = () => {
  const [links, setLinks] = useState();
  const { t } = useTranslation("menu");

  return (
    <div className={style.container}>
      <Link href="/" onClick={() => setLinks("")}>
        <a>{t("home")}</a>
      </Link>
      <Link href="/restaurants">
        <a>{t("restaurants")}</a>
      </Link>
      <Link href="/about">
        <a>{t("about us")}</a>
      </Link>
      <Link href="/how-it-works">
        <a>{t("how it works")}</a>
      </Link>
      <Link href="/faq">
        <a>{t("faqs")}</a>
      </Link>
    </div>
  );
};

export default Links;
