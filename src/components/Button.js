import { Link } from "react-router-dom"



const Button = props => {
    return (
        <Link className={props.className} to={props.path} >{props.text}</Link>
    )
}

export default Button;