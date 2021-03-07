import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ filter, getFilter }) => (
  <label className={styles.label}>
    Find contacts by name{" "}
    <input
      type="text"
      value={filter}
      onChange={getFilter}
      className={styles.filter}
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  getFilter: PropTypes.func.isRequired,
};

export default Filter;
