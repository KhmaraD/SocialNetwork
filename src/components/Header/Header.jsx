import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
// import logo from "../../assets/images/logo.png";
import logo from "../../assets/images/social_network.png";

const Header = (props) => {
    return (
        <header className={s.header}>
            {/*<img src={logo} alt="logo"/>*/}
            {/*<img src={logo} alt="logo"/>*/}
            <div className={s.logo}>
                the Social Network
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                        <span className={s.loginName}>{props.login}</span>
                        <button onClick={props.logout} className={s.logButton}>Logout</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
}


export default Header;