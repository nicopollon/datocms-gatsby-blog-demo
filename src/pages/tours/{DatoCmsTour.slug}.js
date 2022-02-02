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

const TourHeader = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

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
export default function Tour({ data: { tour } }) {
  return (
    <Container>
      <Intro />
      <TourHeader>
        <ActivityType tourTypes={tour.tourTypes} />
        <h1>{tour.title}</h1>
        <OrderButton activity={tour} />
      </TourHeader>
      <TourGallery>
        {tour.tourGallery &&
          tour.tourGallery.map((e) => (
            <GatsbyImage
              style={{ objectFit: "cover" }}
              image={e.gatsbyImageData}
            />
          ))}
      </TourGallery>

      <p>{tour.description}</p>
      <ActivityAttributes tourAttributes={tour.tourAttributes} />
      <ActivityExperience description={tour.description} />
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
      coverImage {
        gatsbyImageData(layout: CONSTRAINED)
      }
      tourGallery {
        gatsbyImageData(layout: CONSTRAINED, height: 400)
      }
    }
  }
`;
