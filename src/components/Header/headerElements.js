import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const HeaderSection = styled.header`
    background-color: ${({theme}) => theme.backgroundColor1};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1100;
    padding: 1.625rem 0;
    transition: all 0.3s ease;

    box-shadow: ${({scroll}) => (scroll ? '0 1px 0.625rem rgba(5, 16, 32, 1)' : '')};
    padding: ${({scroll}) => (scroll ? '1rem 0' : '')};
`

export const NavSection = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;

    @media (min-width: ${({theme}) => theme.largeBP}) {
        max-width: 71.25rem;
    }
`

export const Logo = styled(Link)`
    font-size: 2rem;
    color: ${({theme}) => theme.primaryColor};
    font-weight: 700;
    line-height: 1;
    & span {
        color: ${({theme}) => theme.fontColor1};
    }
`

export const Hamburger = styled.div`
    cursor: pointer;

    @media (min-width: ${({theme}) => theme.smallBP}) {
        display: none;
    }


`

export const Line = styled.span`
    display: block;
    width: 2.1875rem;
    height: 0.25rem;
    background: ${({theme}) => theme.fontColor1};
    transition: all 0.2s cubic-bezier(0.8, 0.2, 0.7, 1.3), width 0.2s 0.1s cubic-bezier(0.7, 0.2, 0.7, 1.4);

    &:not(:last-child) {
        margin-bottom: 0.4375rem;
    }

    &:nth-child(1){
        transform: ${({toggleNav}) => (toggleNav ? 'translateY(0.6875rem) rotate(-45deg)' : '')};
    }
    &:nth-child(2){
        opacity: ${({toggleNav}) => (toggleNav ? '0' : '')};
    }
    &:nth-child(3){
        transform: ${({toggleNav}) => (toggleNav ? 'translateY(-0.6875rem) rotate(45deg)' : '')};
    }
`

export const Menu = styled.ul`
    @media (min-width: ${({theme}) => theme.smallBP}) {
        width: auto;
        display: flex !important;
    }

    @media (max-width: ${({theme}) => theme.smallBP}) {
        overflow: hidden;
        height: 0;
        width: 100%;
        transition: all 0.2s cubic-bezier(0.8, 0.2, 0.7, 1.3), width 0.2s 0.1s cubic-bezier(0.7, 0.2, 0.7, 1.4);

        padding-top: ${({toggleNav}) => (toggleNav ? '0.625rem' : '')};
        height: ${({toggleNav}) => (toggleNav ? '11.25rem' : '')};
    }
`

export const MenuItem = styled.li`
    @media (min-width: ${({theme}) => theme.smallBP}) {
        margin-left: 2.5rem;
    }
`

export const MenuLink = styled(NavLink)`
    display: block;
    font-size: 1rem;
    font-weight: 400;
    color: ${({theme}) => theme.fontColor1};
    text-transform: capitalize;
    padding: 0.625rem 0;

    &:hover {
        color: ${({theme}) => theme.primaryColor};
    }

    &.active {
        color: ${({theme}) => theme.primaryColor};
    }
`