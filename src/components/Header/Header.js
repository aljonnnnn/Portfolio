import React from "react";
import { useState, useEffect } from "react";
import { headerLinks } from "./headerData";
import {
  HeaderSection,
  NavSection,
  Logo,
  Hamburger,
  Line,
  Menu,
  MenuItem,
  MenuLink,
} from "./headerElements";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleNavFalse = () => {
    setToggleNav(false);
  };

  const linkScrollTop = () => {
    setToggleNav(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setScroll(window.scrollY > 10);
      },
      []
    );
  });

  return (
    <HeaderSection scroll={scroll}>
      <NavSection className="container">
        <Logo to="/" onClick={toggleNavFalse}>
          ADL<span>.</span>
        </Logo>
        <Hamburger
          toggleNav={toggleNav}
          onClick={() => setToggleNav(!toggleNav)}
        >
          <Line toggleNav={toggleNav}></Line>
          <Line toggleNav={toggleNav}></Line>
          <Line toggleNav={toggleNav}></Line>
        </Hamburger>
        <Menu toggleNav={toggleNav}>
          {headerLinks.map((headerLink, index) => {
            return (
              <MenuItem key={index}>
                <MenuLink
                  exact
                  to={headerLink.path}
                  activeClassName="active"
                  onClick={linkScrollTop}
                >
                  {headerLink.text}
                </MenuLink>
              </MenuItem>
            );
          })}
        </Menu>
      </NavSection>
    </HeaderSection>
  );
};

export default Header;
