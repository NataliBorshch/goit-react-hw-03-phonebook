import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import ContactsForm from "./components/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

import styles from "./App.module.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  FormData = (data) => {
    const newData = { ...data, id: uuidv4() };
    const nameArray = this.state.contacts.map((ele) => ele.name);
    if (nameArray.includes(newData.name)) {
      return alert(`${newData.name} is  already in contacts`);
    }
    this.setState((prevState) => {
      return { contacts: [newData, ...prevState.contacts] };
    });
  };
  changeFilter = (event) => {
    this.setState({ filter: event.target.value });
    this.contactsFilter();
  };

  contactsFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deliteContacts = (id) => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts.filter((ele) => ele.id !== id)],
      };
    });
  };

  render() {
    const visibleContacts = this.contactsFilter();
    return (
      <section>
        <h2 className={styles.title}>Phonebook</h2>
        <div className={styles.box}>
          <ContactsForm onSubmit={this.FormData} />

          <div className={styles.contactsBox}>
            <h3>Contacts</h3>
            <Filter filter={this.state.filter} getFilter={this.changeFilter} />
            <ContactList
              contacts={visibleContacts}
              onDelite={this.deliteContacts}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default App;
