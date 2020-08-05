import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/navbar.scss';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">Execide</div>
            <ul className='menu'>
                <li className='navlink'><NavLink to='/'>Exercices</NavLink></li>
                <li className='navlink'><NavLink to='/users'>Users</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
