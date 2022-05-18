import React from 'react'
import './sidebar.scss'
import RecentPostCart from '../RecentPostCart/RecentPostCart'
import Catagory from '../catagory/Catagory'
import Button from '../../abstructComponents/button/Button'
import { Link } from 'react-router-dom'
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
                    <form className='custombutton'>
                        <input type="text" className='inputFiled' placeholder='Your Message' />
                        {/* <Button title='Sign Up' /> */}



                        <button className='signupbutton' type='submit'>

                            <i className="fa-solid fa-paper-plane"></i>
                            Sing Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Sidebar