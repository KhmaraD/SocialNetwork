import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import store from "./redux/redux-store";

const App = (props) => {

    useEffect(() => {
        props.initializeApp();
    }, []);

    if (!props.initialized) {
        return <Preloader/>
    }

    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/login'
                               render={() => <Login/>}/>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
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
            </Provider>
        </BrowserRouter>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default connect(mapStateToProps, {initializeApp})(App);
