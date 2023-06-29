import React from 'react';
import Form from 'components/Form/Form';
import Search from 'components/Search/Search';
import Contacts from 'components/Contacts/Contacts';


function ContactsPage() {
  return (
    <section>
      <Form />
      <Search />
      <Contacts />
    </section>
  );
}


export default ContactsPage;
