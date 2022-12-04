import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './Form/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import Notiflix from 'notiflix';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };
  formSubmit = (name, number) => {
    const { contacts } = this.state;
    contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    )
      ? Notiflix.Notify.failure(`${name} is already  in contacts.`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { id: nanoid(), name, number }],
        }));
  };
  onSearch = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalize = filter.toLowerCase();
    const sortContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalize)
    );
    return sortContacts;
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} resetForm={this.resetForm} />
        {contacts.length > 0 && (
          <Filter value={filter} onSearch={this.onSearch} />
        )}
        {contacts.length > 0 && (
          <ContactList
            contacts={this.filterContacts()}
            onDelete={this.deleteContact}
            title="Contacts"
          />
        )}
      </Section>
    );
  }
}
