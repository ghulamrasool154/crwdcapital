import React from 'react'
import './header.scss'
import Navbar from '../../abstructComponents/navbar/Navbar'

const Header = () => {
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
                            <button className="getstated btn"> Get Started</button>
                        </div>
                    </div>
                </div>

                <div className='container mobile-menu'>
                    <div className="row">
                        <Navbar />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header