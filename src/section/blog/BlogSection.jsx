import React from 'react'
import Button from '../../abstructComponents/button/Button'
import Iconwidget from '../../abstructComponents/iconwidget/Iconwidget'
import PostSection from '../../abstructComponents/post/PostSection'
import Titlediscription from '../../abstructComponents/titlediscription/Titlediscription'
import { Posts } from '../../api/Posts'
import './blogsection.scss'

const BlogSection = () => {
    return (
        <section className='news and blog'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center m-auto headingcustom">
                        <Iconwidget text='Our News' />
                        <Titlediscription title='News ' span='& Article' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.' />
                    </div>
                </div>

                <div className="row py-5">

                    {
                        Posts.map((value) => {
                            return <PostSection key={value.id} value={value} />
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center m-auto">
                        <Button title='View More' />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BlogSection