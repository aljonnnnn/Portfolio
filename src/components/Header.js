import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header class="header">
        <nav class="nav container">
            <a href="#" class="nav__logo" data-scroll-goto="0">ADL<span class="logo-dot">.</span></a>
            <div class="nav__hamburger">
                <span class="nav__line"></span>
                <span class="nav__line"></span>
                <span class="nav__line"></span>
            </div>
            <ul class="nav__menu">
                <li class="nav__item">
                    <Link to='/' class="nav__link active" data-scroll-nav="0">home</Link>
                </li>
                <li class="nav__item">
                    <Link to='/about' class="nav__link" data-scroll-nav="1">about</Link>
                </li>
                {/* <li class="nav__item">
                    <Link to='/' class="nav__link" data-scroll-nav="2">skills</Link>
                </li> */}
                <li class="nav__item">
                    <Link to='/portfolio' class="nav__link" data-scroll-nav="3">portfolio</Link>
                </li>
                <li class="nav__item">
                    <Link to='/contact' class="nav__link" data-scroll-nav="4">contact</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;