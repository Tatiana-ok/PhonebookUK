import { useState } from 'react';
import s from './ContactForm.module.css';
import { connect } from 'react-redux';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm({onSubmit}) {
  const [id, setId] = useState('');
  const [name, setNameContact] = useState('');
  const [number, setNumberContact] = useState('');

  const onNameChange = e => {
    setNameContact(e.currentTarget.value);
  };

  const onNumberChange = e => {
    setNumberContact(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '') {
      toast.error('Поле "Имя" не заполнено');
    } if (number === '') {
      toast.error('Поле "Номер" не заполнено');
    } else {
      onSubmit({id, name, number});
      setNameContact('');
      setNumberContact('')
    };
  };

  return (
    <>
      <div>
        <form className={s.containerForm} onSubmit={handleSubmit}>
          <label>
            <p className={s.textLabel}>Имя</p>
            <input
              className={s.formInput}
              type="text"
              onChange={onNameChange}
              value={name}
            />
          </label>
          <label>
            <p className={s.textLabel}>Номер</p>
            <input
              className={s.formInput}
              type="text"
              onChange={onNumberChange}
              value={number}
            />
          </label>
          <button className={s.btnForm} type="submit">
            Добавить контакт
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ id, name, number }) =>
    dispatch(phonebookOperations.addContact({ id, name, number })),
});

export default connect(null, mapDispatchToProps)(ContactForm);


// Классы

// class ContactForm extends Component {
//   state = {
//     id: '',
//     name: '',
//     number: '',
//   };

//   onNameChange = e => {
//     this.setState({ name: e.currentTarget.value });
//   };

//   onNumberChange = e => {
//     this.setState({ number: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.number !== '') {
//       this.props.onSubmit(this.state);
//       this.setState({ name: '', number: '' });
//       return;
//     }
//     alert('Заполните данные контакта!');
//   };

//   render() {
//     return (
//       <form className={s.containerForm} onSubmit={this.handleSubmit}>
//         <label>
//           <p>Имя</p>
//           <input
//             className={s.formInput}
//             type="text"
//             onChange={this.onNameChange}
//             value={this.state.name}
//           />
//         </label>
//         <label>
//           <p>Номер</p>
//           <input
//             className={s.formInput}
//             type="text"
//             onChange={this.onNumberChange}
//             value={this.state.number}
//           />
//         </label>
//         <button className={s.btnForm} type="submit">
//           Добавить контакт
//         </button>
//       </form>
//     );
//   }
// }