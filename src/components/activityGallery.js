import styled from "styled-components";

const TourGallery = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(4, 1fr);
  & ${TourGallery} > :nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
  }

  & ${TourGallery} > :nth-child(2) {
    grid-column: span 2;

    grid-row: span 1;
  }
  & ${TourGallery} > :nth-child(3) {
    grid-column: span 1;
  }
  & ${TourGallery} > :nth-child(n + 5) {
    display: none;
  }
`;

export default TourGallery;
