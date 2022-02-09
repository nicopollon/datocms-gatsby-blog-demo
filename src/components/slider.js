import React from "react";
import { Link } from "gatsby";
import Slider from "react-slick";
import {
  ActivityCardTitle,
  ActivityCardPrice,
  SliderWrapper,
  ActivityCardContent,
  ActivityCarouselTitle,
  StyledSlider,
  ActivitySlide,
  Duration,
  Cover,
} from "../styles/activityCarousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActivityType from "./activityType";

import { BsClockHistory } from "react-icons/bs";

import { GatsbyImage } from "gatsby-plugin-image";
export default function SliderComponent({ activities, title }) {
  let sliderSettings = {
    dots: true,
    slidesToShow: 1,
    swipeToSlide: true,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: activities.nodes.length > 1 ? 2 : 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SliderWrapper style={{ margin: "20px 0" }}>
      <ActivityCarouselTitle>{title}</ActivityCarouselTitle>
      <StyledSlider {...sliderSettings}>
        {activities.nodes.map((e, index) => (
          <ActivitySlide key={index}>
            <Link to={`/tours/${e.categoryLink.slug}/${e.slug}`}>
              <Cover>
                <GatsbyImage
                  imgStyle={{ objectFit: "cover" }}
                  image={e.coverImage.gatsbyImageData}
                  alt=""
                />

                <ActivityType tourTypes={e.tourTypes} inCarousel />
              </Cover>

              <ActivityCardContent>
                <ActivityCardTitle>{e.title}</ActivityCardTitle>

                {e.duration && (
                  <Duration>
                    <BsClockHistory style={{ marginRight: "4px" }} />
                    <p>{e.duration}</p>
                  </Duration>
                )}
                <ActivityCardPrice>
                  {e.price}€
                  <span
                    style={{
                      fontWeight: 300,
                      fontSize: "1rem",
                      marginLeft: "5px",
                    }}
                  >
                    per person
                  </span>
                </ActivityCardPrice>
              </ActivityCardContent>
            </Link>
          </ActivitySlide>
        ))}
      </StyledSlider>
    </SliderWrapper>
  );
}
