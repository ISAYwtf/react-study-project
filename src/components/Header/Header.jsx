import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import Button from "../common/Button";

const Header = ({isAuth, login, logout}) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt="logo"/>
            </div>
            <div className={classes.login}>
                {isAuth
                    ? <div className={classes.loginUser}>
                        <NavLink to={"/profile"} className={classes.loginInfo}>{login}</NavLink>
                        <Button attr={{"onClick": logout}}>Log Out</Button>
                    </div>
                    : <NavLink className={classes.loginInfo} to={`/login`}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;