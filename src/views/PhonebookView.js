import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import phonebookOperations from '../redux/phonebook/phonebook-operations';
// import phonebookSelectors from '../redux/phonebook/phonebook-selectors';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import styles from './css/PhonebookView.module.css';


const PhonebookView = ({fetchContacts}) => {

  useEffect(() => {
    fetchContacts();
  });

  return (
    <div className={styles.containerPhonebook}>
      <ContactForm />
      <div className={styles.backgroundNote}>
        <h1 className={styles.nameOfBook}>Телефонная книга</h1>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts())
})

export default connect(null, mapDispatchToProps)(PhonebookView);


// Классы

// class PhonebookView extends Component {
//   componentDidMount = () => {
//     this.props.fetchContacts()
//   }

//   render() {
//     return (
//       <div style={containerPhonebook}>
//         <h1>Телефонная книга</h1>
//         <ContactForm />
//         <h2>Контакты</h2>
//         <Filter />
//         <ContactList />
//       </div>
//     )
//   }
// };