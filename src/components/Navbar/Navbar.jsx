import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={`${s.item}`}>
            <NavLink to="/ " activeClassName={s.active}>Home</NavLink>
        </div>
        <div className={`${s.item}`}>
            <NavLink to="/actors" activeClassName={s.active}>Actors</NavLink>
        </div>




    </nav>
}

export default Navbar;