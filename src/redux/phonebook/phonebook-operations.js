import Axios from 'axios';
import actions from './phonebook-actions';

Axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'; 

const fetchContacts = () => async dispatch => {
    dispatch(actions.fetchContactsRequest());
    try {
        const { data } = await Axios.get('/contacts');
        dispatch(actions.fetchContactsSuccess(data))
    } catch (error) {
        dispatch(actions.fetchContactsError(error.message))
    }
};

const addContact = text => dispatch => {
    dispatch(actions.addContactRequest());
    const contact = {
        name: text.name,
        number: text.number,
    };
    
    Axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(actions.addContactSuccess(data)))
        .catch(({ error }) => dispatch(actions.addContactError(error.message)));
};

// const updateContact = contact => dispatch => {
//     dispatch(actions.updateContactRequest());
    
//     Axios
//         .post(`/contacts/${contact.id}`, contact)
//         .then(({ data }) => dispatch(actions.updateContactSuccess(data)))
//         .catch(({ error }) => dispatch(actions.updateContactError(error.message)));
// };

const deleteContact = contactId => dispatch => {
    dispatch(actions.deleteContactRequest());
    
    Axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(actions.deleteContactSuccess(contactId)))
        .catch(({ error }) => dispatch(actions.deleteContactError(error.message)));
};

const operations = { fetchContacts, addContact, deleteContact };

export default operations;