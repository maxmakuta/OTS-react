import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>

        <img src='https://git-scm.com/images/logos/downloads/Git-Logo-Black.png' />

    </header>
}

export default Header;