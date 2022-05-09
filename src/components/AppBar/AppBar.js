import React from "react";
import UserMenu from '../UserMenu/UserMenu';
import MainNavigation from '../Navigation/MainNavigation';
import AuthNavigation from '../Navigation/AuthNavigation';
import authSelectors from '../../redux/auth/auth-selectors';
import { connect } from 'react-redux';
import styles from './AppBar.module.css';
import fadeStyles from './Fade.module.css';
import { CSSTransition } from 'react-transition-group';

const AppBar = ({ isAuthenticated }) => {
    const nodeRef = React.useRef(null);
    return (
        <div>
            <CSSTransition in={true} appear={true} timeout={500} classNames={fadeStyles} unmountOnExit nodeRef={nodeRef}>
                <header className={styles.header} ref={nodeRef}>
                    <div className={styles.AppBar}>
                        <MainNavigation />
                        {isAuthenticated ? <UserMenu /> : <AuthNavigation />}
                    </div>
                </header>
            </CSSTransition>
        </div>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state)
})

export default connect(mapStateToProps)(AppBar);


