import React from 'react'
import './FinancialNeeds.scss'
import { AiFillAlert } from "react-icons/ai";
import { BsCurrencyDollar, BsFillShieldLockFill, BsFillPhoneFill, BsApple, BsFillEnvelopeOpenFill, BsFillLockFill, BsWalletFill } from "react-icons/bs";
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
                            listicon1={<BsWalletFill />}
                            listicon2={<BsWalletFill />}
                            listicon3={<BsWalletFill />}
                            listicon4={<BsWalletFill />}
                        />

                    </div>
                    <div className="col-lg-4">
                        <Box
                            icon={<BsFillShieldLockFill />}
                            title='High Security'
                            para='Lorem ipsum dolor sit amet.'
                            listicon1={<BsFillLockFill />}
                            listicon2="Encryption "
                            listicon3={<BsFillEnvelopeOpenFill />}
                            listicon4="OTP-Message"
                        />
                    </div>
                    <div className="col-lg-4">
                        <Box
                            icon={<BsFillPhoneFill />}
                            title='100% Digital'
                            para='Lorem ipsum dolor sit amet.'
                            listicon1={<BsApple />}
                            listicon2="Apple"
                            listicon3={<AiFillAlert />}
                            listicon4="Android "
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinancialNeeds