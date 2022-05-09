import React from 'react'
import './post.scss'
import { BsArrowRightShort } from "react-icons/bs";
import { NavLink, useParams } from 'react-router-dom';
const PostSection = (props) => {

    const { id } = useParams();
    return (
        <div className="col-lg-4 col-md-6">
            <article className='post'>
                <div className='imgthumb'>
                    <div className="thumbnail-container">
                        <img src={props.value.img} className='w-100' alt="" />
                        <div className="catagory">
                            <span>{props.value.catagory}</span>
                        </div>
                    </div>
                </div>
                <div className="context">
                    <h1 className='postitle'>{props.value.name}</h1>
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