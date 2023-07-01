import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/contacts/operations';
import { BsFillTelephoneFill } from 'react-icons/bs';
import swal from 'sweetalert';
import {
  ContactsBlock,
  ContactPhonebook,
  ContactBook,
  ContactForm,
  ContactAdd,
} from './Form.styled';
import { nanoid } from 'nanoid';



function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      swal('Error', 'Contact with the same name already exists', 'error');
      reset();
      return;
    }

    const phonePattern =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    if (!phonePattern.test(number)) {
      swal('Error', 'Invalid phone number', 'error');
      reset();
      return;
    }

    dispatch(addContact({ name, number }));
    reset();
  };



  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };


  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <ContactsBlock>
      <ContactPhonebook>
        Phonebook
        <BsFillTelephoneFill />
      </ContactPhonebook>
      <ContactBook onSubmit={handleSubmit}>
        <label htmlFor={nameId}>Name</label>
        <ContactForm
          placeholder="ім'я"
          id={nameId}
          value={name}
          type="text"
          name="name"
          onChange={handleChange}
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor={numberId}>Number</label>
        <ContactForm
          placeholder="телефон"
          id={numberId}
          value={number}
          type="tel"
          name="number"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <ContactAdd type="submit">Add contact</ContactAdd>
      </ContactBook>
    </ContactsBlock>
  );
}

export default Form;
