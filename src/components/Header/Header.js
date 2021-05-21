import React from 'react'
import {useState, useEffect} from 'react'
import {headerLinks} from './headerData'
import {NavLink, Link} from 'react-router-dom'

const Header = () => {

    const [toggleNav, setToggleNav] = useState(false);
    const [scroll, setScroll] = useState(false);
    
    const navLinkHandlerFalse = () => {
        setToggleNav(false);
    }

    const linkScrollTop = () => {
        setToggleNav(false)
        window.scrollTo(0,0);
    }
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 10)
        },[])
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
                    {headerLinks.map((headerLink, index) => {
                        return (
                            <li className="nav__item" key={index}>
                                <NavLink exact to={headerLink.path}  activeClassName='active' className={`nav__link ${'awit' === headerLink ? 'active' : ''}`} onClick={linkScrollTop} >{headerLink.text}</NavLink>
                            </li>
                        )
                    })

                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header
