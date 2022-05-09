import './App.css';
import { Suspense, lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';
import phonebookSelectors from './redux/phonebook/phonebook-selectors';
import styles from './App.module.css';
import Load from "./components/Loader/Loader";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const PhonebookView = lazy(() => import('./views/PhonebookView'));
const HomeView = lazy(() => import('./views/HomeView'));
const RegistrationView = lazy(() => import('./views/RegistrationView'));
const LoginView = lazy(() => import('./views/LoginView'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));

function App () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authOperations.getCurrentUser());
    }, [dispatch]);
        
    const isLoadingAuth= useSelector(authSelectors.getAuthLoading);
    const isLoadingContacts= useSelector(phonebookSelectors.getLoading);
    return(
        <div className={styles.container}>
            <AppBar />
            <Suspense fallback={<Loader className={styles.spinner } type="Puff" color="#cf98eb" height={80} width={80} timeout={3000}/>}>
                <Switch>
                    <PublicRoute exact path="/" component={HomeView} />
                    <PublicRoute path="/register" restricted redirectTo="/" component={RegistrationView} />
                    <PublicRoute path="/login" restricted redirectTo="/contacts" component={LoginView} />
                    <PrivateRoute path="/contacts" redirectTo="/login" component={PhonebookView}/>
                    <PublicRoute component={NotFoundView} />
                </Switch>
            </Suspense>
            {(isLoadingContacts || isLoadingAuth) && <Load />}
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
  onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
// export default App;

// my.mail.tetiana@gmail.com