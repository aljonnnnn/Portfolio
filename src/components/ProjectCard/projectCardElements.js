import styled from 'styled-components'

export const Box = styled.div`
    width: 100%;
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;

    &:not(:last-child) {
        margin-bottom: 4.375rem;
    }

    @media (min-width: 576px) {
        width: 50%;
    }
    @media (min-width: 992px) {
        width: 41.66666666666667%;
    }
`

export const Item = styled.div`
    background-color: rgba(37, 54, 73, 1);
    border: 1px solid rgba(44, 64, 86, 1);
    border-radius: 0.25rem;
    padding: 1.5625rem;
`

export const ImgLink = styled.a`
    display: block;
    overflow: hidden;
    position: relative;


    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(37, 54, 73, 0.2);
        transition: all 0.3s ease;
    }


    &:hover::before{
        background-color: transparent;
    }

`
export const Image = styled.img`
    max-height: 230px !important;
    transition: all 0.3s ease;
`

export const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    text-transform: capitalize;
    margin-top: 1.5625rem;
    margin-bottom: 0.9375rem;
`

export const Detail = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    color: rgba(192, 204, 218, 1);
    margin-bottom: 0.9375rem;


    @media (min-width: 992px) {
        font-size: 1rem;
    }
`

export const TechContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const TechUse = styled.span`
    display: inline-block;
    padding: 0.3125rem 0.625rem;
    font-size: 0.625rem;
    text-transform: uppercase;
    background-color: rgba(28, 41, 56, 1);
    margin-right: 0.625rem;
    margin-bottom: 0.9375rem;
`

export const ProjectLinkContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const ProjectLink = styled.a`
    position: relative;
    display: inline-block;
    margin-right: 0.625rem;

    
    img {
        height: 1.5625rem;
        width: 1.5625rem;
    }
`