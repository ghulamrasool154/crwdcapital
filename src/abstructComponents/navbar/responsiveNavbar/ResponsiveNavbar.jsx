import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsChevronDown } from "react-icons/bs";
import './ResponsiveNavbar.scss'
import Logo from '../../logo/Logo';
const ResponsiveNavbar = (props) => {

    const [toggle, setToggle] = useState(false);

    const toggleNavbar = props.toggleNavbar;
    return (
        <div className='ResponsiveNavbar'>


            <div className='layout'>

                <ul className="navbar-nav">
                    <Logo />
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/" onClick={toggleNavbar}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="aboutus" onClick={toggleNavbar}>About us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="services" onClick={toggleNavbar}>Services</NavLink>
                    </li>

                    <li className="nav-item dropdown" onClick={() => setToggle(!toggle)}>
                        <NavLink to='#' className='nav-link'>Crwdworld <span style={{ paddingLeft: '10px' }}><BsChevronDown style={{ fontSize: '12px' }} /></span> </NavLink>

                        {toggle ? <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <NavLink className="dropdown-item" to="/crwdworld/faq" onClick={toggleNavbar}>FAQ</NavLink>

                            </li>
                            <li>
                                <NavLink className="dropdown-item" to="/crwdworld/team" onClick={toggleNavbar}>Team</NavLink>

                            </li>
                            <li>

                                <NavLink className="dropdown-item" to="/crwdworld/crwdmarket" onClick={toggleNavbar}>crwdmarket</NavLink>
                            </li>
                            <li>
                                <NavLink className="dropdown-item" to="/crwdworld/news" onClick={toggleNavbar}>News</NavLink>

                            </li>
                            <li>
                                <NavLink className="dropdown-item" to="/crwdworld/pagenotfound" onClick={toggleNavbar}>404 Page</NavLink>
                            </li>

                        </ul> : ''}
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to='contactus' onClick={toggleNavbar}>Conatct Us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ResponsiveNavbar