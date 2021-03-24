import React from 'react'

import {Link} from 'react-router-dom'
const Button = ({href, className, text }) => {
    return (

        <Link to={href} className={className}>
            {text}
        </Link>
    )
}

export default Button
