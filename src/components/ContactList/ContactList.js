import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import stylesFade from './ContactFade.module.css';
import { connect } from 'react-redux';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import contactsSelectors from '../../redux/phonebook/phonebook-selectors';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pencil from '../../images/pencil.svg';
import cross from '../../images/cross.svg';
import classNames from 'classnames';

function ContactList({ contacts = [], onUpdateContact, onDeleteContact }) {
  const nodeRef = React.useRef(null);
  const contactsABC = contacts.sort(function (a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) { return -1 }
    if (nameA > nameB) { return 1 }
    else { return 0 }
  })
  return (
    <>
      <ul className={styles.listOfContacts}>
        <table className={classNames(styles.tab, styles.tabHead)} cols="4">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Номер</th>
            </tr>
          </thead>
        </table>
        <TransitionGroup>
          {contactsABC.map(contact => (
              <CSSTransition key={contact.id} appear={true} timeout={500} classNames={stylesFade} unmountOnExit nodeRef={nodeRef} key={contact.id}>
              <li key={contact.id} className={styles.itemOfListContacts}>
                <table className={styles.tab}>
                  <tbody>
                    <tr>
                    <td className={styles.itemNameContact}>{contact.name}</td>
                    <td className={styles.itemNumberContact}>{contact.number}</td>
                    <td className={styles.tdBtn}>
                      <button
                      className={classNames(styles.btnOfListContact, styles.leftBtn)}
                      type="button"
                      onClick={() => onUpdateContact(contact.id)}>
                        <img className={styles.imgBtn} src={pencil} alt="update"/>
                      </button>
                      <button
                      className={styles.btnOfListContact}
                      type="button"
                      onClick={() => onDeleteContact(contact.id)}>
                       <img className={styles.imgBtn} src={cross} alt="delete"/>
                      </button>
                    </td>
                    </tr>
                  </tbody>
                </table>
              </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId =>
    dispatch(phonebookOperations.deleteContact(contactId)),
  onUpdateContact: contactId =>
    dispatch(phonebookOperations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
