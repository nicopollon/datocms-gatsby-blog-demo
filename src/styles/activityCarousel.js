import styled from "styled-components";

import Slider from "react-slick";
export const ActivityCardWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ActivityCardContainer = styled.div`
  background: #fff;
  max-width: 425px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  box-shadow: 1px 0 12px rgb(0 0 0 / 13%);
  :hover {
    box-shadow: 1px 0 19px rgb(0 0 0 / 20%);
  }
  margin: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const ActivityCardTitle = styled.header`
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.25rem;
`;
export const ActivityCardPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
`;
export const ActivityCardContent = styled.div`
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  * {
    margin: 5px 0;
  }
`;
export const Duration = styled.div`
  display: flex;
  align-items: center;
`;

export const Cover = styled.div`
  display: block;
  position: relative;
`;
export const ActivityCarouselTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  @media screen and (min-width: 768px) {
    padding-left: 16px;
  }
`;
export const ActivitySlide = styled(ActivityCardContainer)`
  margin: 0;
  transform: scale(0.95);
`;
export const StyledSlider = styled(Slider)`
  .slick-next {
    width: 25px;
    height: 25px;
    right: -5px;
    z-index: 2000;
    top: 60%;
  }
  .slick-prev {
    width: 25px;
    height: 25px;
    left: -5px;
    z-index: 2000;
    top: 60%;
  }
  .slick-next:before {
    color: #000;
    font-size: 24px;
  }
  .slick-prev:before {
    color: #000;
    font-size: 24px;
  }
  .slick-list {
    margin: 0;
  }
`;
export const SliderWrapper = styled.div`
  margin: 20px 0;
  display: block;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const ActivityCarouselWrapper = styled.div`
  display: block;
  @media screen and (max-width: 769px) {
    display: none;
  }
`;
