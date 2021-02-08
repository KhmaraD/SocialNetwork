import React from 'react';
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
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <BrowserRouter>
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
            </BrowserRouter>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default connect(mapStateToProps, {initializeApp})(App);

// export default compose(
//     withRouter,
//     connect(null, {getAuthUserData}))(App);

// const App = (props) => {
//     return (
//         <BrowserRouter>
//             <div className='app-wrapper'>
//                 <HeaderContainer />
//                 <Navbar />
//                 <div className='app-wrapper-content'>
//                     <Route path='/login'
//                            render={ () => <Login /> } />
//                     <Route path='/dialogs'
//                            render={ () => <DialogsContainer /> } />
//                     <Route path='/profile/:userId?'
//                            render={ () => <ProfileContainer /> } />
//                     <Route path='/users'
//                            render={ () => <UsersContainer /> } />
//                     <Route path='/music'
//                            render={ () => <Music /> } />
//                     <Route path='/news'
//                            render={ () => <News /> } />
//                     <Route path='/settings'
//                            render={ () => <Settings /> } />
//                 </div>
//             </div>
//         </BrowserRouter>
//     );
// }
//
// export default App;