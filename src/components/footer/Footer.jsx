import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.scss'
import Logo from '../../abstructComponents/logo/Logo'

const Footer = () => {
    return (
        <footer>


            <div className="container">
                <div className="row align-items-center ">
                    <div className="col-lg-3 col-md-3 col-sm-12">

                        <Logo />
                        {/* <div className='logo'>
                            <img src={logo} alt="logo" />
                        </div> */}
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <ul className='footernabar list-style-0 d-flex justify-content-space-between' >
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/aboutus">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="#">Destination</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contactus">Conatct</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <ul className='footernabar right d-flex'>

                            <li>





                                <NavLink to="#">Privacy Policy</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contactus">Terms Condition</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />

                <div className="row bottom">
                    <div className="col-lg-12">
                        <p className='text-center m-0'>
                            © 2022 crwdcapital

                        </p>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer