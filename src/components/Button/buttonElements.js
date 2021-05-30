import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonPrimary = styled(Link)` 
    display: inline-block;
    width: 10rem;
    padding: 0.625rem 1.5625rem;
    text-transform: uppercase;
    text-align: center;

    @media (max-width: 576px) {
        width: 8.75rem;
        padding: 0.625rem 0.9375rem;
    }

    border: 1px solid rgba(12, 102, 255, 1);
    background-color: rgba(12, 102, 255, 1);
    font-size: 1rem;
    color: rgba(255, 255, 255, 1);
    transition: opacity 0.2s ease;
    opacity: 1;

    &:hover {
        color: rgba(255, 255, 255, 0.8);
    }
`;



export const ButtonSecondary = styled(Link)` 
    display: inline-block;
    width: 10rem;
    padding: 0.625rem 1.5625rem;
    text-transform: uppercase;
    text-align: center;

    @media (max-width: 576px) {
        width: 8.75rem;
        padding: 0.625rem 0.9375rem;
    }

    border: 1px solid rgba(44, 64, 86, 1);
    background-color: transparent;
    font-size: 1rem;
    color: rgba(255, 255, 255, 1);
    transition: all 0.2s ease;

    &:hover {
        border: 1px solid rgba(12, 102, 255, 1);
        background-color: rgba(12, 102, 255, 1);
        color: rgba(255, 255, 255, 1);
    }
`;

export const ButtonFile = styled.a` 
    display: inline-block;
    width: 10rem;
    padding: 0.625rem 1.5625rem;
    text-transform: uppercase;
    text-align: center;
    margin-right: 1.25rem;
    border: 1px solid rgba(12, 102, 255, 1);
    background-color: rgba(12, 102, 255, 1);
    font-size: 1rem;
    color: rgba(255, 255, 255, 1);
    transition: opacity 0.2s ease;
    opacity: 1;

    @media (max-width: 576px) {
        width: 8.75rem;
        padding: 0.625rem 0.9375rem;
    }
    
    &:hover {
        color: rgba(255, 255, 255, 0.8);
    }
`;