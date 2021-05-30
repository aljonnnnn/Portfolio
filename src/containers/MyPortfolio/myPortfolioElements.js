import styled from 'styled-components'


export const PortfolioSection = styled.div`
    background: rgba(28, 41, 56, 1);
    padding: 7.5rem 0 4.375rem;
`

export const PortfolioSectionHeading = styled.h2`
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

export const PortfolioFlex = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-left: -0.9375rem;
    margin-right: -0.9375rem;
`