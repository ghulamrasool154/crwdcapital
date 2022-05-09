import React from 'react'
import './catagory.scss'
import { BsDashLg } from "react-icons/bs";
const Catagory = () => {
    return (
        <div className='Catagory'>

            <h1>Catagory</h1>

            <ul>
                <li>
                    <h6>
                        <span className='line-bar'><BsDashLg /></span> Update
                    </h6>
                </li>

                <li>
                    <h6> <span className='line-bar'><BsDashLg /></span> News</h6>
                </li>

                <li>
                    <h6> <span className='line-bar'><BsDashLg /></span> Finance</h6>
                </li>

            </ul>
        </div>
    )
}

export default Catagory