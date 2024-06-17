function Button({ children, classes, onClick, ariaLabel }) {
  return (
    <button className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export default Button;
