import React from 'react'
import './catagory.scss'
import { BsDashLg } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
const Catagory = () => {
    return (
        <div className='Catagory'>

            <h1>Catagory</h1>

            <ul>
                <li>
                    <NavLink to='#'>
                        <span className='line-bar'><BsDashLg /></span> Update
                    </NavLink>
                </li>

                <li>
                    <NavLink to='#'> <span className='line-bar'><BsDashLg /></span> News</NavLink>
                </li>

                <li>
                    <NavLink to='#'> <span className='line-bar'><BsDashLg /></span> Finance</NavLink>
                </li>

            </ul>
        </div>
    )
}

export default Catagory