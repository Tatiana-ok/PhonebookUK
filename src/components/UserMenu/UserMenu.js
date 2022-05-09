import styles from './UserMenu.module.css';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

const UserMenu = ({ userName, onLogOut }) => {
    return (
        <div className={styles.UserMenu}>
            <p className={styles.welcome}>Добро пожаловать, {userName}</p>
            <button className={styles.btnExit} type="button" onClick={onLogOut}>Выйти</button>
        </div>
    )
};

const mapStateToProps = state => ({
    userName: authSelectors.getUserName(state)
});

const mapDispatchToProps = dispatch => ({
    onLogOut: () => dispatch(authOperations.logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
