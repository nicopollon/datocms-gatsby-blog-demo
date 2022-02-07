import React from "react";
import { graphql } from "gatsby";
import Intro from "../../../components/intro";
import Container from "../../../components/container";
import styled from "styled-components";
import ActivityType from "../../../components/activityType";
import ActivityAttributes from "../../../components/activityAttributes";
import ActivityExperience from "../../../components/activityExperience";
import OrderButton from "../../../components/OrderButton";
import { GatsbyImage } from "gatsby-plugin-image";

import {
  TourGallery,
  MobileGallery,
} from "../../../components/activityGallery";
import OrderContainer from "../../../components/OrderContainer";
import {
  TourHeader,
  Description,
  ActivityContainer,
  ActivityContent,
} from "../../../styles/activityPage";
import MobileOrder from "../../../components/MobileOrder";
export default function Tour({ data: { tour } }) {
  return (
    <>
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
                key={e}
                alt=""
                style={{ objectFit: "cover" }}
                image={e.gatsbyImageData}
              />
            ))}
          </TourGallery>
        )}
      </Container>
      {tour.tourGallery && (
        <MobileGallery>
          <GatsbyImage
            key={tour.tourGallery[0]}
            alt=""
            style={{ objectFit: "cover" }}
            image={tour.tourGallery[0].gatsbyImageData}
          />
        </MobileGallery>
      )}{" "}
      <Container>
        {" "}
        <TourHeader forMobile>
          <ActivityType tourTypes={tour.tourTypes} />
          <h1>{tour.title}</h1>
        </TourHeader>
        <ActivityContainer>
          <ActivityContent>
            <Description>{tour.description}</Description>
            <ActivityAttributes tourAttributes={tour.tourAttributes} />
            <ActivityExperience
              description={tour.description}
              inclusions={tour.inclusions}
            />
          </ActivityContent>{" "}
          <OrderContainer tour={tour} />
        </ActivityContainer>
        <MobileOrder tour={tour} />
      </Container>
    </>
  );
}

export const query = graphql`
  query myQuery($id: String) {
    tour: datoCmsTour(id: { eq: $id }) {
      id
      title
      tourTypes
      tourAttributes
      description
      duration
      inclusions {
        value
      }
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
