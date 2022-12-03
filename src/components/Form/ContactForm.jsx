import css from '../Form/Form.module.css';

export const ContactForm = ({ onSubmit }) => {
  const givMeName = event => {
    event.preventDefault();

    onSubmit(event.target.elements.name.value);
  };
  return (
    <div>
      Name
      <form onSubmit={givMeName} className={css.form_wrapper}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button className={css.form_btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
