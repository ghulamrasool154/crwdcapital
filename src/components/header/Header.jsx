import React, { useState } from 'react'
import './header.scss'
import Navbar from '../../abstructComponents/navbar/Navbar'
import ResponsiveNavbar from '../../abstructComponents/navbar/responsiveNavbar/ResponsiveNavbar'

import Logo from '../../abstructComponents/logo/Logo'

import { BsListUl, BsX } from "react-icons/bs";
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [toggle, setToggle] = useState(false);
    return (
        <header className='header'>
            <div className="container-fluid  transparant-color">


                <div className="container disktop-menu" >
                    <div className="row align-items-center">
                        {/* <div className="col-lg-2 col-md-2 left">
                            <div className='logo'>
                                <img src={logowhite} alt="logo-white" />
                            </div>
                        </div> */}
                        <div className="col-lg-9 col-md-10 center">
                            <Navbar />
                        </div>
                        <div className="col-lg-3 col-md-2 text-end right">
                            <NavLink to='###'>
                                <span className="getstated btn"> Get Started</span>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className='container mobile-menu'>
                    <div className="head">
                        <div className='divlogo'>
                            <Logo />
                        </div>
                        <div className='navdiv' onClick={() => setToggle(!toggle)}>
                            <BsListUl />

                        </div>
                        {/* {
                            toggle ?
                                <div className='layout lyoutss'  >
                                    <ResponsiveNavbar />
                                    <div className="closebutton"
                                        onClick={() => setToggle(!toggle)}>
                                        <BsX />
                                    </div>
                                </div> : ''
                        } */}
                        <div className='layout lyoutss' style={{
                            left: toggle ? '0' : ''
                        }}  >
                            <ResponsiveNavbar />
                            <div className="closebutton"
                                onClick={() => setToggle(!toggle)}>
                                <BsX />
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header