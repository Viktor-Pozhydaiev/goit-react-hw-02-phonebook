import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './Form/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  addUsers = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), contact }],
    }));
  };
  render() {
    const { contacts } = this.state;
    return (
      <Section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addUsers} />
        <Filter />
        {contacts.length > 0 && (
          <ContactList contacts={contacts} title="Contacts" />
        )}
      </Section>
    );
  }
}
