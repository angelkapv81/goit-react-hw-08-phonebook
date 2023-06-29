import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operations';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: null,
};

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
};

const handleFetchContactsSuccess = (state, action) => {
  return { ...state, isLoading: false, error: null, contacts: action.payload };
};

const handleAddContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    contacts: [action.payload, ...state.contacts],
  };
};

const handleDeleteContactSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: null,
    contacts: state.contacts.filter(
      contact => contact.id !== action.payload.id
    ),
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [removeContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [removeContact.rejected]: handleRejected,
    [fetchContacts.fulfilled]: handleFetchContactsSuccess,
    [addContact.fulfilled]: handleAddContactSuccess,
    [removeContact.fulfilled]: handleDeleteContactSuccess,
  },
});

export const contactsReducer = contactsSlice.reducer;
