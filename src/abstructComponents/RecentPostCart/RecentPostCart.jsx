import React from 'react'
import './RecentPostCart.scss'

import { BsFillClockFill } from "react-icons/bs";

import { Posts } from '../../api/Posts';
import { Link } from 'react-router-dom';
const RecentPostCart = () => {


    // const [post, setPost] = useState(Posts);
    // console.log(post);
    const slicpost = Posts.slice(0, 3);
    console.log(slicpost);

    return (
        <div className='RecentPostCart'>
            <h1>Recent Posts</h1>
            <ul>
                {
                    slicpost.map((value) => {
                        return <li key={value.id}>
                            <Link to={'/blog/' + value.id}>
                                <h5> {value.name}</h5>
                            </Link>

                            <div className='meta-lists'>
                                <span className='icon'><BsFillClockFill /></span>
                                September 7, 2021
                            </div>
                        </li>
                    })
                }


            </ul>
        </div>
    )
}

export default RecentPostCart