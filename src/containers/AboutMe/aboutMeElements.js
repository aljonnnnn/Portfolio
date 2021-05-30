import styled from 'styled-components'

export const AboutSection = styled.div`
    background: rgba(28, 41, 56, 1);
    padding: 7.5rem 0 4.375rem;
`

export const SectionHeading = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3.75rem;

    @media (min-width: 992px) {
        text-align: left;
    }
`

export const FlexLayout = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-right: -0.9375rem;
    margin-left: -0.9375rem;
`

export const Box = styled.div`
    width: 100%;
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;

    &:first-child {
        margin-bottom: 1.875rem;

        @media (min-width: 576px) {
            margin-bottom: 0;
        }
    }

    @media (min-width: 576px) {
        width: 50%;
    }
    @media (min-width: 992px) {
        &:first-child {
            width: 40%;
        }

        &:last-child {
            width: 60%;
        }
    }
`

export const Item = styled.div`
    
`

export const Image = styled.img`
    border-radius: 0.625rem;
    max-width: 100%;
`

export const Heading = styled.h3`
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 0.9375rem;

    @media (min-width: 992px) {
        font-size: 2rem;
    }
`

export const Paragraph = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    color: $font-color-2;
    margin-bottom: 0.9375rem;

    @media (min-width: 992px) {
        font-size: 1rem;
    }
`