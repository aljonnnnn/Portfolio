import React from 'react'

import {Link} from 'react-router-dom'
const Button = ({href, className, text, clicked }) => {
    return (
        <Link to={href} className={className} onClick={clicked}>
            {text}
        </Link>
    )
}

export default Button
