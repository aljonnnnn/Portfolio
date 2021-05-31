import styled from 'styled-components'

export const EducationSection = styled.div`
    background-color: ${({theme}) => theme.backgroundColor2};
    padding: 4.375rem 0;
`

export const SectionHeading = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3.75rem;

    @media (min-width: ${({theme}) => theme.largeBP}) {
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

@media (min-width: ${({theme}) => theme.mediumBP}) {
    width: 50%;
}
@media (min-width: ${({theme}) => theme.largeBP}) {
    width: 40%;
}

&:first-child {
    margin-bottom: 1.875rem;

    @media (min-width: ${({theme}) => theme.mediumBP}) {
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
    background-color: ${({theme}) => theme.boxBackground};
    border: 1px solid ${({theme}) => theme.boxBorder};
    padding: 1.875rem 0.9375rem;
    border-radius: 0.625rem;
`

export const SchoolName = styled.p`
font-size: 1.5rem;
font-weight: 500;
color: ${({theme}) => theme.fontColor1};
margin-bottom: 0.9375rem;
text-transform: capitalize;
`

export const SchoolAddress = styled.span`
font-size: 0.6875rem;
font-weight: 700;
color: ${({theme}) => theme.fontColor2};
`