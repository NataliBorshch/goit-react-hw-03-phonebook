import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { ReactComponent as IconDelite } from "../../icon/delite.svg";

import styles from "./ContactsList.module.css";

const ContactList = ({ contacts, onDelite }) => (
  <ul className={styles.list}>
    {contacts.map((ele) => {
      return (
        <li key={ele.id} className={styles.item}>
          <p>{ele.name}</p>
          <p>{ele.number}</p>
          <Button onDelite={() => onDelite(ele.id)} type="button">
            <IconDelite
              width="30"
              height="25"
              fill="white"
              aria-label="delite"
            />
          </Button>
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
