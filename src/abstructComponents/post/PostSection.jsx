import React from 'react'
import './post.scss'
import { BsArrowRightShort } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
const PostSection = (props) => {

    return (
        <div className="col-lg-4 col-md-6">
            <article className='post'>
                <div className='imgthumb'>
                    <div className="thumbnail-container">
                        <NavLink to={`/blog/` + props.value.id}>
                            <img src={props.value.img} className='w-100' alt="" />
                        </NavLink>
                        <div className="catagory">
                            <span>{props.value.catagory}</span>
                        </div>
                    </div>
                </div>
                <div className="context">
                    <NavLink to={`/blog/` + props.value.id}>

                        <h1 className='postitle'>{props.value.name}</h1>
                    </NavLink>

                    <p className="disc">{props.value.disc}</p>
                    <NavLink to={`/blog/` + props.value.id}>
                        <p className='readmore'> readmore  <span><BsArrowRightShort /></span></p>
                    </NavLink>
                </div>

            </article >
        </div >
    )
}

export default PostSection