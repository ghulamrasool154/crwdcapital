import React from 'react'
import Newlatter from '../../abstructComponents/newlatter/Newlatter'
import Titlebar from '../../abstructComponents/titlebar/Titlebar'
import TitleDynmic from '../../abstructComponents/titleDynamic/TitleDynmic'
import BlogSection from '../../section/blog/BlogSection'

const News = () => {
    return (

        <>
            <TitleDynmic title='News & Article' />

            <div className='newspage'>

                <Titlebar title='News & ' span='Article ' para='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' />
                <BlogSection />
                <Newlatter />
            </div>
        </>
    )
}

export default News