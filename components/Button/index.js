import styles from "./Button.module.scss";

const Button = ({ width, children }) => {
  return (
    <button className={styles.button} style={{ width: `${width}px` || `100%` }}>
      {children}
    </button>
  );
};

export default Button;
