import React from 'react'
import './sidebar.scss'
import RecentPostCart from '../RecentPostCart/RecentPostCart'
import Catagory from '../catagory/Catagory'
import Button from '../../abstructComponents/button/Button'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <RecentPostCart />

            <Catagory />
            <div className="questionsection">
                <div className="background-overlay">
                    <h1>Have A Question?</h1>
                    <p>
                        Keep Updated with our newsletter. Subscribe now.
                    </p>
                    <input type="text" className='inputFiled' placeholder='Your Message' />
                    {/* <Button title='Sign Up' /> */}

                    <button className='signupbutton'> <i className="fa-solid fa-paper-plane"></i> Sing Up</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar