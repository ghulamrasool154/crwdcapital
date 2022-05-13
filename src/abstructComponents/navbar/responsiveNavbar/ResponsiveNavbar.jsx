import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsChevronDown } from "react-icons/bs";
import './ResponsiveNavbar.scss'
import Logo from '../../logo/Logo';
const ResponsiveNavbar = () => {

    const [toggle, setToggle] = useState(false)
    return (
        <div className='ResponsiveNavbar'>


            <div className='layout'>

                <ul className="navbar-nav">
                    <Logo />
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="aboutus">About us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="services">Services</NavLink>
                    </li>

                    <li className="nav-item dropdown" onClick={() => setToggle(!toggle)}>
                        <NavLink to='#' className='nav-link'>Crwdworld <span style={{ paddingLeft: '10px' }}><BsChevronDown style={{ fontSize: '12px' }} /></span> </NavLink>

                        {toggle ? <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <NavLink className="dropdown-item" to="/crwdworld/faq">FAQ</NavLink>

                            </li>
                            <li>
                                <NavLink className="dropdown-item" to="/crwdworld/team">Team</NavLink>

                            </li>
                            <li>

                                <NavLink className="dropdown-item" to="/crwdworld/crwdmarket">crwdmarket</NavLink>
                            </li>
                            <li>
                                <NavLink className="dropdown-item" to="/crwdworld/news">News</NavLink>

                            </li>
                            <li>
                                <NavLink className="dropdown-item" to="/crwdworld/pagenotfound">404 Page</NavLink>
                            </li>

                        </ul> : ''}
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to='contactus'>Conatct Us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ResponsiveNavbar