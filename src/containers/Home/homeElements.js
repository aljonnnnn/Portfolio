import styled from "styled-components";

export const HeroSection = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColor1};
  height: 100vh;

  @media (min-width: ${({ theme }) => theme.xLargeBP}) {
    height: 100vh;
  }
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 0 0.9375rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.smallBP}) {
    max-width: 35rem;
  }
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.fontColor1};
  font-size: 2.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (min-width: ${({ theme }) => theme.smallBP}) {
    font-size: 5.625rem;
  }
`;

export const SubHeading = styled.span`
  display: block;
  color: ${({ theme }) => theme.fontColor2};
  font-size: 1.125rem;
  font-weight: 400;
  margin-bottom: 0.75rem;
  letter-spacing: 0;

  @media (min-width: ${({ theme }) => theme.smallBP}) {
    font-size: 2.5rem;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.fontColor2};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75;
  margin-bottom: 1.875rem;

  @media (min-width: ${({ theme }) => theme.smallBP}) {
    font-size: 1.25rem;
  }
`;
