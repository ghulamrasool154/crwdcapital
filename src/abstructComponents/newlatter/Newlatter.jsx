import React from 'react'
import './newlatter.scss'
import Titlediscription from '../titlediscription/Titlediscription'
import Button from '../button/Button'
import { BsPlayFill } from "react-icons/bs";

const Newlatter = () => {
    return (
        <section className='newletter'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center m-auto">
                        <Titlediscription title='Our ' span='Newsletter' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.' />

                        <div className="emailform">
                            <input type="text" placeholder='Your Message' />
                            <Button title='Sing Up' />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Newlatter