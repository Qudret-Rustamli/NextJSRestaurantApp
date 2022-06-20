import styles from './Button.module.scss';

const Button = ({ width, children, borderRadius, color, height, backgroud,border }) => {
  return (
    <button
      className={styles.button}
      style={{
        width: width ? width : '100px',
        height: height ? height : '40px',
        borderRadius: borderRadius ? borderRadius : '0px',
        color: color ? color : '#fff',
        backgroundColor: backgroud ? backgroud : 'transparent',
        border: border ? border : 'none'
      }}>
      {children}
    </button>
  );
};

export default Button;
//#d63626