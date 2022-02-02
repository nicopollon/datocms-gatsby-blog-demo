import React from "react";
import { Link } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import ActivityType from "./activityType";
import { BsClockHistory } from "react-icons/bs";
export const ActivityCardWrapper = styled.div`
  display: flex;
`;
export const ActivityCardContainer = styled.div`
  background: #fff;
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
  font-size: 1rem;
  font-weight: 500;
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
const ActivityCarousel = ({ activities }) => {
  return (
    <>
      <h1>Top Activities</h1>
      <ActivityCardWrapper>
        {activities.nodes.map((e) => (
          <ActivityCardContainer key={e.id} id={e.id}>
            <Link to={`/tours/${e.slug}`}>
              <Cover>
                <GatsbyImage
                  imgStyle={{ objectFit: "cover" }}
                  image={e.coverImage.gatsbyImageData}
                />

                <ActivityType tourTypes={e.tourTypes} />
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
    </>
  );
};

export default ActivityCarousel;
