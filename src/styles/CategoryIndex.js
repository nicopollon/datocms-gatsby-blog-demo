import styled from "styled-components";

export const HeroCover = styled.div`
  width: 100%;
  display: grid;
  margin-bottom: 32px;
`;
export const HeroContentWrapper = styled.div`
  grid-area: 1/1;
  position: relative;
  place-items: center;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.3) 100%,
    transparent
  );
  display: grid;
`;
export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  color: #fff;
  padding: 1.25rem;
  h1 {
    font-size: 72px;
    font-weight: 600;
  }
  p {
    font-size: 1.5rem;
  }
  margin: 0 20px;
  padding: 0 96px;
  @media screen and (max-width: 1024px) {
    padding: 0 32px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 16px;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 42px;
      font-weight: 600;
      line-height: 1.1;
    }
    p {
      font-size: 1.1rem;
    }
  }
`;
