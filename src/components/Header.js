import React from 'react'
import {useState, useEffect} from 'react'
import {headerLinks} from '../Data/data'
import {NavLink, Link} from 'react-router-dom'

const Header = () => {

    const [toggleNav, setToggleNav] = useState(false);
    
    const navLinkHandlerFalse = () => {
        setToggleNav(false);
        window.scrollTo(0,0);
    }
    
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 10)
        })
    })


    return (
        <header className={`header ${scroll ? 'header--scroll' : ''}`}>
            <nav className="nav container">
                <Link to="/" className="nav__logo" onClick={navLinkHandlerFalse} >ADL<span className="logo-dot">.</span></Link>
                
                {/* svg logo */}
                {/* <Link to="/" className="nav__logo" onClick={navLinkHandlerFalse}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
                    <path d="M36.5 73C56.6584 73 73 56.6584 73 36.5C73 16.3416 56.6584 0 36.5 0C16.3416 0 0 16.3416 0 36.5C0 56.6584 16.3416 73 36.5 73Z" fill="#1C2938"/>
                    <path d="M38.8428 43.2907H27.8079L25.7028 48.3837H20.0665L30.66 24.6163H36.0926L46.72 48.3837H40.9479L38.8428 43.2907ZM37.1112 39.1144L33.3423 30.0149L29.5735 39.1144H37.1112Z" fill="#0C66FF"/>
                    <path d="M54.75 25.55L49.275 34.675L43.8 25.55H54.75Z" fill="#0C66FF"/>
                </svg>
                </Link> */}
                <div className={`nav__hamburger ${toggleNav ? 'active' : ''}`} onClick={() => setToggleNav(!toggleNav) }>
                    <span className="nav__line"></span>
                    <span className="nav__line"></span>
                    <span className="nav__line"></span>
                </div>
                <ul className={`nav__menu ${toggleNav === true ? 'navmenu--show' : ''}`}>
                    {headerLinks.map((headerLink, key) => {
                        return (
                            <li className="nav__item" key={key}>
                                <NavLink exact to={headerLink.path}  activeClassName='active' className={`nav__link ${'awit' === headerLink ? 'active' : ''}`} onClick={navLinkHandlerFalse} >{headerLink.text}</NavLink>
                            </li>
                        )
                    })

                    }
                    {/* <li className="nav__item">
                        <Link to="/" className="nav__link active"  onClick={navLinkHandlerFalse} >home</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/about" className="nav__link"  onClick={navLinkHandlerFalse}>about</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/portfolio" className="nav__link"  onClick={navLinkHandlerFalse}>portfolio</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/contact" className="nav__link"  onClick={navLinkHandlerFalse}>contact</Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header
