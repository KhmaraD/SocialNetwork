import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import {withSuspense} from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

const App = (props) => {

    useEffect(() => {
        props.initializeApp();
    }, []);

    if (!props.initialized) {
        return <Preloader/>
    }

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/login'
                       render={() => <Login/>}/>
                <Route path='/dialogs'
                       render={withSuspense(DialogsContainer)} />
                <Route path='/profile/:userId?'
                       render={withSuspense(ProfileContainer)}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
                <Route path='/music'
                       render={() => <Music/>}/>
                <Route path='/news'
                       render={() => <News/>}/>
                <Route path='/settings'
                       render={() => <Settings/>}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
