import React from 'react'
import Titlebar from '../../abstructComponents/titlebar/Titlebar'
import './crwdmarket.scss'
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription'
import FinancialNeeds from '../../section/FinancialNeeds/FinancialNeeds'
import Compunies from '../../section/compunies/Compunies'
import Download from '../../section/download/Download'
import { BsArrowRightShort } from "react-icons/bs";
import TitleDynmic from '../../abstructComponents/titleDynamic/TitleDynmic'
import { NavLink } from 'react-router-dom'
const Crwdmarket = () => {
    return (

        <>
            <TitleDynmic title='Crwd Market' />

            <div className='crwdmarket'>

                <Titlebar title='crwdmarket &' span='Deals' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' />
                <section className='hotdeals'>
                    <div className="container">
                        <div className="row pt-5">
                            <div className="col-lg-6 text-center m-auto">
                                <Titlediscription title='Hot' span='Deals' />
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="col-lg-8 col-md-6 col-sm-12">
                                <div className="leftside">
                                    <div className="backcolor">
                                        <div style={{ height: '260px' }}></div>
                                        <h2>
                                            Top-up E-wallet and Get Special crwdmarket
                                        </h2>

                                        <NavLink to="/crwdworld/crwdmarket">
                                            <p> readmore  <span><BsArrowRightShort /></span></p>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="rightside">
                                    <div className="backcolor">
                                        <div style={{ height: '260px' }}></div>
                                        <h2>

                                            Payday crwdmarket
                                        </h2>
                                        <NavLink to="/crwdworld/crwdmarket">
                                            <p> readmore  <span><BsArrowRightShort /></span></p>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='branddeals'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 text-center m-auto">
                                <Titlediscription title='Brand ' span='Deals' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="leftside">
                                    <div className="backcolor">
                                        <div style={{ height: '260px' }}></div>
                                        <h2>

                                            Pay Your Bill and Get 30% Cashback
                                        </h2>
                                        <NavLink to="/crwdworld/crwdmarket">
                                            <p> readmore  <span><BsArrowRightShort /></span></p>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="centerside">
                                    <div className="backcolor">
                                        <div style={{ height: '260px' }}></div>
                                        <h2>

                                            Free Bank Transfer Fee for New User
                                        </h2>
                                        <NavLink to="/crwdworld/crwdmarket">
                                            <p> readmore  <span><BsArrowRightShort /></span></p>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="rightside">
                                    <div className="backcolor">
                                        <div style={{ height: '260px' }}></div>
                                        <h2>

                                            Free Delivery For Every Alibaba Purchase
                                        </h2>
                                        <NavLink to="/crwdworld/crwdmarket">
                                            <p> readmore  <span><BsArrowRightShort /></span></p>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <Download />
                <FinancialNeeds />
                <Compunies />


            </div>
        </>
    )
}

export default Crwdmarket