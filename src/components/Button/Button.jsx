import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ onDelite, type, children }) => {
  return (
    <button type={type} className={styles.btn} onClick={onDelite}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  onDelite: null,
  children: null,
};
Button.propTypes = {
  onDelite: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
};

export default Button;
