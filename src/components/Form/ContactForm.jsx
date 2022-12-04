import { Component } from 'react';
import css from '../Form/Form.module.css';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  givMeName = event => {
    event.preventDefault();

    const { name, number } = event.currentTarget.elements;
    const { onSubmit } = this.props;

    onSubmit(name.value, number.value);
    event.target.reset();
  };

  render() {
    return (
      <div>
        <p className={css.name_form}> Name</p>
        <form onSubmit={this.givMeName} className={css.form_wrapper}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <p className={css.phone_form}>Phone</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={css.form_btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
