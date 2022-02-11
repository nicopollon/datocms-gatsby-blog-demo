import React from "react";
import { Link } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ActivityType from "./activityType";
import { BsClockHistory } from "react-icons/bs";
import {
  ActivityCarouselWrapper,
  ActivityCardTitle,
  ActivityCardPrice,
  ActivityCardWrapper,
  ActivityCardContainer,
  ActivityCardContent,
  ActivityCarouselTitle,
  Duration,
  Cover,
} from "../styles/activityCarousel";
const ActivityCarousel = ({ activities, title }) => {
  return (
    <ActivityCarouselWrapper>
      <ActivityCarouselTitle>{title}</ActivityCarouselTitle>
      <ActivityCardWrapper>
        {activities.nodes.map((e, index) => (
          <ActivityCardContainer key={index}>
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
          </ActivityCardContainer>
        ))}
      </ActivityCardWrapper>
    </ActivityCarouselWrapper>
  );
};

export default ActivityCarousel;
