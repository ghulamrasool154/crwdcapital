import React from 'react'
import './newlatter.scss'
import Titlediscription from '../titlediscription/Titlediscription'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const Newlatter = () => {
    return (
        <section className='newletter'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center m-auto newlettersecton">
                        <Titlediscription title='Our ' span='Newsletter' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.' />

                        <form className="emailform" onSubmit={(event) => event.preventDefault()}>
                            <input type="text" placeholder='Your Message' />


                            {/* <Link to="#" className='btn-desin'>
                                <span><i className="fa-solid fa-paper-plane"></i></span> Sing Up
                            </Link> */}
                            <button className='btn-desin' type='submit'>
                                <span><i className="fa-solid fa-paper-plane"></i></span> Sing Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Newlatter