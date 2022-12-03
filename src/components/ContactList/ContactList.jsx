import { Contact } from './Contact';

export const ContactList = ({ contacts, title }) => {
  return (
    <ul>
      <h2>{title}</h2>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
