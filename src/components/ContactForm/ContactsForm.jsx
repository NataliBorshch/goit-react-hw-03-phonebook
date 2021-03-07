import React, { Component } from "react";
import Button from "../Button";
import { ReactComponent as IconAdd } from "../../icon/add.svg";
import styles from "./ContactsForm.module.css";

class ContactsForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleInput = (event) => {
    const value = event.target.name;
    this.setState({ [value]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <div className={styles.form}>
        <h2>Add to contacts</h2>
        <form onSubmit={this.handleSubmit}>
          <label className={styles.title}>
            Name
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleInput}
              required
            />
          </label>
          <label className={styles.title}>
            Number
            <input
              type="text"
              value={this.state.number}
              name="number"
              onChange={this.handleInput}
              required
            />
          </label>
          <Button type="submit">
            <IconAdd width="40" height="40" fill="white" />
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactsForm;
