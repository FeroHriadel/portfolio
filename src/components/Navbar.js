import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul className='navbar'>
            <Link to='/mywork' style={{textDecoration: '0'}}><li>My Work</li></Link>
            <Link to='/mytools' style={{textDecoration: '0'}}><li>My Tools</li></Link>
            <li onClick={() => window.open('https://github.com/FeroHriadel')}>Github</li>
            <Link to='/contact' style={{textDecoration: '0'}}><li>Contact</li></Link>
        </ul>
    )
};

export default Navbar;
