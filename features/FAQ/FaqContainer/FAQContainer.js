import FaqAccordion from "../FaqAccordion";
import styles from "../../../styles/pages/faq.module.scss";

export const FaqContainer = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>FAQ's</h2>
      <div className={styles.container__accordion}>
        <FaqAccordion />
      </div>
    </div>
  );
};
