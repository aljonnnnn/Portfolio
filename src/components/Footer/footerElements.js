import styled from 'styled-components'

export const FooterSection = styled.footer`
    background-color: ${({theme}) => theme.backgroundColor2};
    padding: 3.125rem 0 2.5rem;
    border-top: 1px solid ${({theme}) => theme.boxBorder};
`

export const FlexLayout = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const Icon = styled.a`
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.6875rem 0.75rem;
    background-color: ${({theme}) => theme.backgroundColor1};
    text-align: center;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:not(:last-child) {
        margin-right: 0.9375rem;
    }

    &-fill {
        transition: all 0.3s ease;
    }

    &:hover path {
        fill: rgba(28, 41, 56, 1);
    }

    &:hover {
        background-color: ${({theme}) => theme.primaryColor};
    }
`

export const Credits = styled.div`
    display: block;
    text-align: center;
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    margin-top: 1.5625rem;
`