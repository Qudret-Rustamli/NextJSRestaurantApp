const Button = ({ width, children }) => {
  return <button style={{ width: `${width || 100}px` }}>{children}</button>;
};

export default Button;
