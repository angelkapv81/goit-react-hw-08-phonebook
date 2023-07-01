import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsTrash } from 'react-icons/bs';

import {
  getError,
  getFilteredContacts,
  getIsLoading,
} from '../../../store/contacts/selectors';

import { fetchContacts, deleteContact } from '../../../store/contacts/operations';
import Loader from '../Loader';

import {
  ContactBox,
  Contact,
  ContactList,
  ContactItem,
  ContactButton,
} from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactBox>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {filteredContacts.length > 0 && !error && (
        <>
          <Contact>Contacts</Contact>
          <ContactList>
            {filteredContacts.map(({ id, name, number }) => (
              <ContactItem key={id}>
                <p>
                  {name} : {number}
                </p>
                <ContactButton onClick={() => handleDeleteContact(id)}><BsTrash />
                </ContactButton>
              </ContactItem>
            ))}
          </ContactList>
        </>
      )}
    </ContactBox>
  );
};

export default Contacts;
