import styles from "../../../styles/pages/how-it-works.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export const HowItWorksContainer = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.container__title}>{t("how it works")}</h2>
        <p className={styles.container__desc}>{t("how it works desc")}</p>
        <div className={styles.container__img}>
          <div className={styles.container__img__wrapper}>
            <Image
              src="/images/how-it-works.svg"
              alt="Picture of the author"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
};
