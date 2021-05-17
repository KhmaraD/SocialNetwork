import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
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