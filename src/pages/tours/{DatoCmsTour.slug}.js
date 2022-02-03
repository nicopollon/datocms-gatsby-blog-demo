import React from "react";
import { graphql } from "gatsby";
import Intro from "../../components/intro";
import Container from "../../components/container";
import styled from "styled-components";
import ActivityType from "../../components/activityType";
import ActivityAttributes from "../../components/activityAttributes";
import ActivityExperience from "../../components/activityExperience";
import OrderButton from "../../components/OrderButton";
import { GatsbyImage } from "gatsby-plugin-image";
import TourGallery from "../../components/activityGallery";
import OrderContainer from "../../components/OrderContainer";
const TourHeader = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 16px;
    margin-top: -20px;
  }
`;
const Description = styled.p`
  font-size: 16px;
  padding: 16px 0;
`;
const ActivityContainer = styled.section`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;
const ActivityContent = styled.div`
  flex: 3;
`;
export default function Tour({ data: { tour } }) {
  return (
    <Container>
      <Intro />
      <TourHeader>
        <ActivityType tourTypes={tour.tourTypes} />
        <h1>{tour.title}</h1>
      </TourHeader>

      {tour.tourGallery && (
        <TourGallery>
          {tour.tourGallery.map((e) => (
            <GatsbyImage
              id={e}
              style={{ objectFit: "cover" }}
              image={e.gatsbyImageData}
            />
          ))}
        </TourGallery>
      )}
      <ActivityContainer>
        <ActivityContent>
          <Description>{tour.description}</Description>
          <ActivityAttributes tourAttributes={tour.tourAttributes} />
          <ActivityExperience description={tour.description} />
        </ActivityContent>{" "}
        <OrderContainer tour={tour} />
      </ActivityContainer>
    </Container>
  );
}

export const query = graphql`
  query TourBySlug($id: String) {
    tour: datoCmsTour(id: { eq: $id }) {
      id
      title
      tourTypes
      tourAttributes
      description
      duration
      price
      childPrice
      coverImage {
        gatsbyImageData(layout: CONSTRAINED)
      }
      tourGallery {
        gatsbyImageData(layout: CONSTRAINED, height: 250, aspectRatio: 2)
      }
    }
  }
`;
