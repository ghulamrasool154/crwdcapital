import React from 'react'

import { Helmet } from "react-helmet";

const TitleDynmic = (props) => {
    return (
        <>
            <Helmet>
                <title>{props.title}</title>
                {/* <meta name="description" content={props.discription} /> */}
            </Helmet>
        </>
    )
}

export default TitleDynmic