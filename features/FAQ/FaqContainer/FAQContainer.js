import FaqAccordion from "../FaqAccordion";
import styles from "../../../styles/pages/faq.module.scss";
import { useTranslation } from "next-i18next";

export const FaqContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__accordion}>
        <FaqAccordion />
      </div>
    </div>
  );
};
