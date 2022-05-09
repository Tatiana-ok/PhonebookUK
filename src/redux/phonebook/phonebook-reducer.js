import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './phonebook-actions';

const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, {payload}) => payload,
  [actions.addContactSuccess]: (state, { payload }) => {
    if (
      state.find(contact =>
        contact.name.toLowerCase().includes(payload.name.toLowerCase()),
      )
    ) {
      alert(`${payload.name} уже есть в списке контактов`);
      return [...state];
    } else {
      return [payload, ...state];
    }
  },
  // [actions.updateContactSuccess]: (state, { payload }) => {
  //   return [payload, ...state];
  // },
  [actions.deleteContactSuccess]: (state, { payload }) => {
    return state.filter(contact => payload !== contact.id);
  },
});

const loading = createReducer(false, {
  [actions.fetchContactRequest]: () => true,
  [actions.fetchContactSuccess]: () => false,
  [actions.fetchContactError]: () => false,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
  [actions.deleteContactSuccess]: (state, { payload }) => '',
});

const error = createReducer('', {
  [actions.fetchContactsError]: (state, { payload }) => 'Ошибка доcтупа к данным. Авторизируйтесь!',
  [actions.addContactError]: (state, { payload }) => 'Ошибка добавления контакта.',
  [actions.deleteContactError]: (state, { payload }) => 'Ошибка удаления контакта.',
})

export default combineReducers({
  items,
  filter,
  error,
  loading
});
