import React from 'react'
import './newlatter.scss'
import Titlediscription from '../titlediscription/Titlediscription'
import Button from '../button/Button'

const Newlatter = () => {
    return (
        <section className='newletter'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center m-auto">
                        <Titlediscription title='Our ' span='Newsletter' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.' />

                        <div className="emailform">
                            <input type="text" placeholder='Your Message' />
                            <button className='btn-desin'> <span><i className="fa-solid fa-paper-plane"></i></span> Sing Up</button>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Newlatter