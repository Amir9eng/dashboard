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
    margin-left: 15px;
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

// .card {}
// .card-item {
//     display: flex;
// }
// .border {
//     background: linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%);
//     width: 1.2725 rem;
//     height: 10.3 rem;
//     align-self: flex-end;
// }
// .image {
//     background: transparent;
//     // height: 140.78px;
//     padding: 0.3 rem 0.7 rem 0.81 rem;
//     border: 1 px solid #707070;
//     border-bottom: none;
// }
// .vibes {
//     padding-left: 1.324rem;
//     background: linear-gradient(89.79deg, #AB491C 19.39%, #DDAE45 123.38%);
// }
// .vibes h2 {
//     font-weight: 700;
//     font-size: 1rem;
// }
// .vibes p {
//     font-weight: 500;
//     font-size: 12px;
// }