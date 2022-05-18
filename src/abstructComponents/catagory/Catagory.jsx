import React from 'react'
import './catagory.scss'
import { BsDashLg } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Catagory = () => {
    return (
        <div className='Catagory'>

            <h1>Catagory</h1>

            <ul>
                <li>
                    <Link to='#'>
                        <span className='line-bar'><BsDashLg /></span> Update
                    </Link>
                </li>

                <li>
                    <Link to='#'> <span className='line-bar'><BsDashLg /></span> News</Link>
                </li>

                <li>
                    <Link to='#'> <span className='line-bar'><BsDashLg /></span> Finance</Link>
                </li>

            </ul>
        </div>
    )
}

export default Catagory