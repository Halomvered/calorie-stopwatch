import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <NavLink to="/" activeClassName="is-active" exact={true}>Stopwatch</NavLink>
            <NavLink to="/new" activeClassName="is-active">New Timer</NavLink>
            <NavLink to="/calender" activeClassName="is-active">Calender</NavLink>
            <NavLink to="/profile" activeClassName="is-active">profile</NavLink>
        </header>
    );
};

export default Header;