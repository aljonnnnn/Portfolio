import styled from "styled-components";

export const SkillsSection = styled.div`
  background: ${({ theme }) => theme.backgroundColor2};
  padding: 4.375rem 0;
`;

export const SectionHeading = styled.div`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 3.75rem;

  @media (min-width: ${({ theme }) => theme.largeBP}) {
    text-align: left;
  }
`;

export const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: -0.9375rem;
  margin-right: -0.9375rem;
`;

export const Box = styled.div`
  padding: 0 0.9375rem;
  &:not(:last-child) {
    margin-bottom: 1.875rem;
  }
`;

export const Item = styled.div``;

export const Image = styled.img``;
