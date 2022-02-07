import styled from "styled-components";

export const TourGallery = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(4, 1fr);

  & *:nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
  }

  & *:nth-child(2) {
    grid-column: span 2;

    grid-row: span 1;
  }
  & *:nth-child(3) {
    grid-column: span 1;
  }
  & *:nth-child(n + 5) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileGallery = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  min-height: 250px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
