import styled from 'styled-components'

export const ContactSection = styled.div`
    background-color: rgba(31, 45, 61, 1);
    padding: 7.5rem 0 4.375rem;

    @media (min-width: 768px) {
        height: calc(100vh - 11.3125rem);
    }
`

export const ContactSectionHeading = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3.75rem;
`

export const ContactFlex = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: -0.9375rem;
    margin-right: -0.9375rem;
`

export const ContactBox = styled.div`
    width: 80%;
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;

    &:not(:last-child) {
        margin-bottom: 1.875rem;
    }

    @media (min-width: 576px) {
        width: 50%;
        padding: 0 1.875rem;
    }

    @media (min-width: 992px) {
        width: 32.98245614035088%;
        padding: 0 1.875rem;
    }
`

export const ContactItem = styled.div`
    text-align: center;
    background-color: rgba(37, 54, 73, 1);
    border: 1px solid rgba(44, 64, 86, 1);
    padding: 1.25rem;
`

export const ContactIcon = styled.span`
    display: inline-block;
    width: 4rem;
    height: 4.125rem;
    border-radius: 50%;
    background-color: rgba(28, 41, 56, 1);
    padding: 1.4375rem 1.25rem;
    margin-bottom: 1.5625rem;

    
    img {
        width: 1.5rem;
    }
`

export const ContactDetail = styled.span`
    display: block;
    font-size: 0.875rem;
    font-weight: 400;
`