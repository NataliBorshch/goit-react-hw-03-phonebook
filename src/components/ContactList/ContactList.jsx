import React from "react";
import PropTypes from "prop-types";

import styles from "./ContactsList.module.css";

const ContactList = ({ contacts, onDelite }) => (
  <ul className={styles.list}>
    {contacts.map((ele) => {
      return (
        <li key={ele.id} className={styles.item}>
          <p>{ele.name}</p>
          <p>{ele.number}</p>
          <button className={styles.btn} onClick={() => onDelite(ele.id)}>
            Delite
          </button>
        </li>
      );
    })}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelite: PropTypes.func.isRequired,
};

export default ContactList;
