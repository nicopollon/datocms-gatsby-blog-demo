import styled from "styled-components";

export const ContainerStyled = styled.div`
  margin: 0 auto;
  padding: 0 96px;
  max-width: 1400px;
  @media screen and (max-width: 1024px) {
    padding: 0 32px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 16px;
  }
`;
