import shortid from 'shortid';
import * as actionTypes from './contacts-types';

export const addContact = ({ name, number }) => ({
  type: actionTypes.ADD,
  payload: {
    name,
    id: shortid.generate(),
    number,
  },
});

export const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

export const filterContact = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});
