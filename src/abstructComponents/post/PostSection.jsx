import React from 'react'
import './post.scss'
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from 'react-router-dom';
const PostSection = (props) => {

    return (
        <div className="col-lg-4 col-md-6">
            <article className='post'>
                <div className='imgthumb'>
                    <div className="thumbnail-container">
                        <Link to={`/blog/` + props.value.id}>
                            <img src={props.value.img} className='w-100' alt="" />
                        </Link>
                        <div className="catagory">
                            <span>{props.value.catagory}</span>
                        </div>
                    </div>
                </div>
                <div className="context">
                    <Link to={`/blog/` + props.value.id}>

                        <h1 className='postitle'>{props.value.name}</h1>
                    </Link>

                    <p className="disc">{props.value.disc}</p>
                    <Link to={`/blog/` + props.value.id}>
                        <p className='readmore'> readmore  <span><BsArrowRightShort /></span></p>
                    </Link>
                </div>

            </article >
        </div >
    )
}

export default PostSection