import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './Navigation.module.css';

const MainNavigation = ({isAuthenticated}) => (
  <div>
    <nav>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Главная
      </NavLink>

      {isAuthenticated && <NavLink
        to="/contacts"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Телефонная книга
      </NavLink>}
      
    </nav>
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state)
})

export default connect(mapStateToProps)(MainNavigation);