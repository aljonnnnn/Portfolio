import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonPrimary = styled(Link)`
  display: inline-block;
  width: 10rem;
  padding: 0.625rem 1.5625rem;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.smallBP}) {
    width: 8.75rem;
    padding: 0.625rem 0.9375rem;
  }

  border: 1px solid ${({ theme }) => theme.primaryColor};
  background-color: ${({ theme }) => theme.primaryColor};
  font-size: 1rem;
  color: ${({ theme }) => theme.fontColor1};
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

  @media (max-width: ${({ theme }) => theme.smallBP}) {
    width: 8.75rem;
    padding: 0.625rem 0.9375rem;
  }

  border: 1px solid ${({ theme }) => theme.boxBorder};
  background-color: transparent;
  font-size: 1rem;
  color: ${({ theme }) => theme.fontColor1};
  transition: all 0.2s ease;

  &:hover {
    border: 1px solid ${({ theme }) => theme.primaryColor};
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.fontColor1};
  }
`;

export const ButtonFile = styled.a`
  display: inline-block;
  width: 10rem;
  padding: 0.625rem 1.5625rem;
  text-transform: uppercase;
  text-align: center;
  margin-right: 1.25rem;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  background-color: ${({ theme }) => theme.primaryColor};
  font-size: 1rem;
  color: ${({ theme }) => theme.fontColor1};
  transition: opacity 0.2s ease;
  opacity: 1;

  @media (max-width: ${({ theme }) => theme.smallBP}) {
    width: 8.75rem;
    padding: 0.625rem 0.9375rem;
  }

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;
