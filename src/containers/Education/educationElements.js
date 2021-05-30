import styled from 'styled-components'

export const EducationSection = styled.div`
    background-color: rgba(31, 45, 61, 1);
    padding: 4.375rem 0;
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
    justify-content: center;
    flex-wrap: wrap;
    margin-left: -0.9375rem;
    margin-right: -0.9375rem;
`

export const Box = styled.div`
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;
    width: 100%;

@media (min-width: 768px) {
    width: 50%;
}
@media (min-width: 992px) {
    width: 40%;
}

&:first-child {
    margin-bottom: 1.875rem;

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
}
`

export const Item = styled.div`

`

export const SchoolYear = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    color: $font-color-2;
    margin-bottom: 0.9375rem;
`

export const SchoolContainer = styled.div`
    background-color: rgba(37, 54, 73, 1);
    border: 1px solid rgba(44, 64, 86, 1);
    padding: 1.875rem 0.9375rem;
    border-radius: 0.625rem;
`

export const SchoolName = styled.p`
font-size: 1.5rem;
font-weight: 500;
color: rgba(255, 255, 255, 1);
margin-bottom: 0.9375rem;
text-transform: capitalize;
`

export const SchoolAddress = styled.span`
font-size: 0.6875rem;
font-weight: 700;
color: rgba(192, 204, 218, 1);
`