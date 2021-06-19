import styled from "styled-components";

export const ContactSection = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor1};
  padding: 7.5rem 0 4.375rem;

  @media (min-width: ${({ theme }) => theme.mediumBP}) {
    height: calc(100vh - 11.3125rem);
  }
`;

export const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 3.75rem;
`;

export const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: -0.9375rem;
  margin-right: -0.9375rem;
`;

export const Box = styled.div`
  width: 80%;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;

  &:not(:last-child) {
    margin-bottom: 1.875rem;
  }

  @media (min-width: ${({ theme }) => theme.smallBP}) {
    width: 50%;
    padding: 0 1.875rem;
  }

  @media (min-width: 992px) {
    width: 32.98245614035088%;
    padding: 0 1.875rem;
  }
`;

export const Item = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.boxBackground};
  border: 1px solid ${({ theme }) => theme.boxBorder};
  padding: 1.25rem;
`;

export const Icon = styled.span`
  display: inline-block;
  width: 4rem;
  height: 4.125rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.backgroundColor1};
  padding: 1.4375rem 1.25rem;
  margin-bottom: 1.5625rem;

  img {
    width: 1.5rem;
  }
`;

export const Detail = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
`;
