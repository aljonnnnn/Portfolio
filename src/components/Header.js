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
