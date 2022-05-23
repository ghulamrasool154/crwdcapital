import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../logo/Logo'
import { BsChevronDown } from "react-icons/bs";
import './nabar.scss'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="p-0 container-fluid">
                    <Logo />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-start" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="aboutus">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="services">Services</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink to='Crwdworld' className='nav-link'>Crwdworld <span style={{ paddingLeft: '10px' }}><BsChevronDown style={{ fontSize: '12px' }} /></span> </NavLink>
                                {/* <NavLink className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Crwdworld
                                </NavLink> */}
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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

                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to='contactus'>Conatct Us</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar