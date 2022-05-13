import React, { useState } from 'react'
import './videosection.scss'
import ReactPlayer from 'react-player'

const VideoSection = () => {
    const [Toggle, setToggle] = useState(true);

    return (
        // <div className='VideoSection'>
        //     <div className='layout'>
        //         <i class="fa-brands fa-facebook" style={{ color: 'white' }}></i>

        //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quas asperiores non saepe vel qui sapiente laboriosam fuga aperiam ab voluptas, rerum ut, perferendis, iure quibusdam accusantium? Excepturi, fugiat modi.
        //     </div>

        // </div>


        <>
            {
                Toggle ? <div id='video-cover'>
                    <div div className='videosection' >
                        <div className="close-button"
                            onClick={() => setToggle(!Toggle)}

                        >
                            <i className="fa-solid fa-xmark"></i>
                        </div>

                        <div className='video'  >
                            <ReactPlayer url='https://www.youtube.com/watch?v=MLpWrANjFbI&list=TLGG9m1lwPUk9SExMzA1MjAyMg' width='100%' height='100%' />
                        </div>
                    </div >
                </div> : ''
            }

        </>


    )
}

export default VideoSection