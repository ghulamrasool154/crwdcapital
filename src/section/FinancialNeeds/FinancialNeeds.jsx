import React from 'react'
import './FinancialNeeds.scss'
import { AiFillAlert } from "react-icons/ai";
import { BsCurrencyDollar, BsFillShieldLockFill, BsFillPhoneFill, BsApple, BsFillEnvelopeOpenFill, BsFillLockFill } from "react-icons/bs";
import Box from '../../abstructComponents/box/Box';
import Iconwidget from '../../abstructComponents/iconwidget/Iconwidget';
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription';

const FinancialNeeds = () => {
    return (
        <section className='FinancialNeeds'>
            <div className="container ">
                <div className="row">
                    <div className="col-lg-7  m-auto">
                        <Iconwidget text='Key Feature' />
                        <Titlediscription title="A Complete Financial Needs" span="In One App" para="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus."
                        />

                    </div>
                </div>



                <div className="row">
                    <div className="col-lg-4">
                        <Box
                            icon={<BsCurrencyDollar />}
                            title='Support All Payment'
                            para='Lorem ipsum dolor sit amet.'
                            listicon1={<i className="fa-brands fa-cc-visa"></i>}
                            listicon2={<i className="fa-brands fa-cc-mastercard"></i>}
                            listicon3={<i className="fa-brands fa-cc-apple-pay"></i>}
                            listicon4={<i className="fa-brands fa-cc-paypal"></i>}
                        />

                    </div>
                    <div className="col-lg-4">
                        <Box
                            icon={<BsFillShieldLockFill />}
                            title='High Security'
                            para='Lorem ipsum dolor sit amet.'
                            listicon1={<i className="fa-solid fa-lock"></i>}
                            listicon2="Encryption "
                            listicon3={<i className="fa-solid fa-envelope"></i>}
                            listicon4="OTP-Message"
                        />
                    </div>
                    <div className="col-lg-4">
                        <Box
                            icon={<BsFillPhoneFill />}
                            title='100% Digital'
                            para='Lorem ipsum dolor sit amet.'
                            listicon1={<i className="fa-solid fa-apple-whole"></i>}
                            listicon2="Apple"
                            listicon3={<i className="fa-brands fa-android"></i>}
                            listicon4="Android "
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinancialNeeds