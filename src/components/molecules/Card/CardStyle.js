import styled from "styled-components";

export const CardContainer = styled.div `
  background-color: transparent;
  color: white;
  width: 14.148rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #707070;
  padding: 0.916rem 0;
  @media (max-width: ${"650px"}) {
    width: 12rem;
    margin-left: 0.9375rem;
  }
`;
export const CardItem = styled.div `
  display: flex;
`;
export const Border = styled.div `
  background: ${({ bg }) => bg};
  width: 1.2725rem;
  height: 10.3rem;
  align-self: flex-end;
`;
export const CardImage = styled.div `
  background: transparent;
  padding: 0.3rem 0.7rem 0.81rem;
  border: 1px solid #707070;
  border-bottom: none;
`;
export const Vibes = styled.div `
  padding-left: 1.324rem;
  background: linear-gradient(89.79deg, #ab491c -19.39%, #ddae45 123.38%);
`;
export const VibesHeading = styled.h2 `
  font-weight: 700;
  font-size: 1rem;
`;
export const VibesText = styled.p `
  font-weight: 500;
  font-size: 12px;
`;