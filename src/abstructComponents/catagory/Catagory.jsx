import React from 'react'
import './catagory.scss'
import { Link } from 'react-router-dom';
const Catagory = () => {
    return (
        <div className='Catagory'>

            <h1>Catagory</h1>

            <ul>
                <li>
                    <Link to='#'>
                        <span className='line-bar'><i aria-hidden="true" className="fas fa-minus"></i></span> Update
                    </Link>
                </li>

                <li>
                    <Link to='#'> <span className='line-bar'><i aria-hidden="true" className="fas fa-minus"></i></span> News</Link>
                </li>

                <li>
                    <Link to='#'> <span className='line-bar'><i aria-hidden="true" className="fas fa-minus"></i></span> Finance</Link>
                </li>

            </ul>
        </div>
    )
}

export default Catagory