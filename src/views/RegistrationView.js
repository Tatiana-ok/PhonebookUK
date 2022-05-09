import { useState } from 'react';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';
import styles from './css/RegistrationView.module.css';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationView = ({onRegister}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onHandleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                console.warn(`Тип поля name - ${name} не обрабатывается`);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (name === '') {
            toast.error('Поле "Имя" не заполнено');
        } if (email === '') { 
            toast.error('Поле "Адрес почты" не заполнено'); 
        } if (password.length < 7) { 
            toast.error('Неправильный пароль'); 
        } else {
            onRegister({ name, email, password });
            setName('');
            setEmail('');
            setPassword('');
        };
    };

    return (
        <div className={styles.containerForm}>
            <form className={styles.form} onSubmit={handleSubmit} autoComplete='off'>
                <h2>Регистрация нового пользователя</h2>
                <label htmlFor='name'>Имя</label>
                <input
                    name='name'
                    id='name'
                    className={styles.input}
                    type="text"
                    onChange={onHandleChange}
                    value={name}
                />
                <label htmlFor='email'>Адрес почты</label>
                <input
                    name='email'
                    id='email'
                    className={styles.input}
                    type="text"
                    onChange={onHandleChange}
                    value={email}
                />
                <label htmlFor='password'>Пароль*</label>
                <input
                    name='password'
                    id='password'
                    className={styles.input}
                    type="password"
                    onChange={onHandleChange}
                    value={password}
                />
                <p className={styles.textPass}>*Пароль должен состоять не менее, чем из 8 символов</p>
                <Button className={styles.button} variant="primary" type="submit">Отправить</Button>
                <ToastContainer />
            </form>
        </div>
    )
};

const mapStateToProps = state => ({
    // isLoadingAuth: authSelectors.getAuthLoading(state),
    errorReg: authSelectors.getAuthError(state),
});

const mapDispatchToProps = dispatch => ({
    onRegister: (data) => dispatch(authOperations.register(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationView);


// Классы

// class RegistrationView extends Component {
//     state = {
//         name: '',
//         email: '',
//         password: ''
//     }

//     onNameChange = e => {
//         this.setState({ name: e.currentTarget.value})
//     }

//     onEmailChange = e => {
//         this.setState({ email: e.currentTarget.value})
//     }

//     onPasswordChange = e => {
//         this.setState({ password: e.currentTarget.value})
//     }

//     handleSubmit = e => {
//         e.preventDefault();
//         if (this.state.name === '') {
//             toast.error('Поле "Имя" не заполнено');
//         } if (this.state.email === '') { 
//             toast.error('Поле "Адрес почты" не заполнено'); 
//         } if (this.state.password.length < 7) { 
//             toast.error('Неправильный пароль'); 
//         } else {
//             this.props.onRegister(this.state);
//             this.setState({ name: '', email: '', password: '' });
//         };
//     };

//     render() {
//         return (
//             <>
//                 <form className={styles.form} onSubmit={this.handleSubmit} autoComplete='off'>
//                     <h2>Регистрация нового пользователя</h2>
//                     <label htmlFor={this.nameInputId}>Имя</label>
//                     <input
//                         name='name'
//                         id={this.nameInputId}
//                         className={styles.input}
//                         type="text"
//                         onChange={this.onNameChange}
//                         value={this.state.name}
//                     />
//                     <label>Адрес почты</label>
//                     <input
//                         name='email'
//                         className={styles.input}
//                         type="text"
//                         onChange={this.onEmailChange}
//                         value={this.state.email}
//                     />
//                     <label>Пароль*</label>
//                     <input
//                         name='password'
//                         className={styles.input}
//                         type="text"
//                         onChange={this.onPasswordChange}
//                         value={this.state.password}
//                     />
//                     <p className={styles.textPass}>*Пароль должен состоять не менее, чем из 8 символов</p>
//                     <Button className={styles.button} variant="primary" type="submit">Отправить</Button>
//                     <ToastContainer />
//                 </form>
//             </>
//         )
//     }
// };
