import styled from "styled-components";

export const HeroCover = styled.div`
  width: 100%;
  display: grid;
`;
export const HeroContentWrapper = styled.div`
  grid-area: 1/1;
  position: relative;
  place-items: center;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.46) 6.67%,
    rgba(0, 0, 0, 0.44) 13.33%,
    rgba(0, 0, 0, 0.43) 20%,
    rgba(0, 0, 0, 0.42) 26.67%,
    rgba(0, 0, 0, 0.4) 33.33%,
    rgba(0, 0, 0, 0.33) 40%,
    rgba(0, 0, 0, 0.22) 46.67%,
    rgba(0, 0, 0, 0.11) 53.33%,
    rgba(0, 0, 0, 0.1) 60%,
    rgba(0, 0, 0, 0.08) 66.67%,
    rgba(0, 0, 0, 0.05) 73.33%,
    rgba(0, 0, 0, 0.03) 80%,
    rgba(0, 0, 0, 0.028408) 86.67%,
    rgba(0, 0, 0, 0.007) 93.33%,
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
    font-size: 100px;
    font-weight: 600;
  }
  p {
    font-size: 1.5rem;
  }
`;
