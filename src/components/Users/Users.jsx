import React from 'react';
import classes from './Users.module.css';
import Pagination from "../common/Pagination/Pagination";
import Preloader from "../common/Preloader/Preloader";
import User from "./User";

const Users = props =>
    <div className={`${classes.usersWrap} component--wrap`}>
        <Preloader flag={props.isFetching}/>

        {props.users.map(el => <User key={el.id} user={el} {...props}/>)}

        <Pagination {...props}/>
    </div>

export default Users;
