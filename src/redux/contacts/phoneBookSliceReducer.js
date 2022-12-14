import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operationsAPI';

export const phoneBookSliceReducer = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: '',
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, actions) {
      state.contacts.isLoading = false;
      state.contacts.items = actions.payload;
    },
    [fetchContacts.rejected](state, actions) {
      state.contacts.isLoading = false;
      state.contacts.error = actions.payload;
    },
    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, actions) {
      state.contacts.isLoading = false;
      state.contacts.items = [...state.contacts.items, actions.payload];
    },
    [addContact.rejected](state, actions) {
      state.contacts.isLoading = false;
      state.contacts.error = actions.payload;
    },
    [deleteContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled](state, actions) {
      state.contacts.isLoading = false;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== actions.payload
      );
    },
    [deleteContact.rejected](state, actions) {
      state.contacts.isLoading = false;
      state.contacts.error = actions.payload;
    },
    [updateContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [updateContact.fulfilled](state, actions) {
      state.contacts.isLoading = false;
      const index = state.contacts.items.findIndex(
        contact => contact.id === actions.payload.id
      );
      state.contacts.items[index] = { ...actions.payload };
    },
    [updateContact.rejected](state, actions) {
      state.contacts.isLoading = false;
      state.contacts.error = actions.payload;
    },
  },
});
