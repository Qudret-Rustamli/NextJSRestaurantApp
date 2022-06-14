import FaqAccordion from "../../components/Accardion";
import styles from "../../styles/pages/faq.module.scss";

const Faq = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>FAQ's</h2>
      <div className={styles.container__accordion}>
        <FaqAccordion />
      </div>
    </div>
  );
};

export default Faq;
