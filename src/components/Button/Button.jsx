import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ onClick, type, children }) => {
  return (
    <button type={type} className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  onClick: null,
  children: null,
};
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
};

export default Button;
