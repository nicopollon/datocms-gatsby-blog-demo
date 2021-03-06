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
import Footer from "../../../components/footer";
import { TourGallery, MobileGallery } from "../../../styles/activityGallery";
import OrderContainer from "../../../components/OrderContainer";
import {
  TourHeader,
  Description,
  ActivityContainer,
  ActivityContent,
} from "../../../styles/activityPage";
import MobileOrder from "../../../components/MobileOrder";
import Test from "../../../components/test";
import { MdTextRotateUp } from "react-icons/md";
export default function Tour({ data: { tour } }) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  return (
    <>
      <Container>
        <Intro />
        <TourHeader>
          <h1>{tour.title}</h1>
          <ActivityType tourTypes={tour.tourTypes} />
        </TourHeader>

        {tour.tourGallery && (
          <TourGallery>
            {tour.tourGallery.map((e, index) => (
              <GatsbyImage
                key={index}
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
            style={{ objectFit: "cover", width: "100%" }}
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
          <OrderContainer tour={tour} url={url} />
        </ActivityContainer>
        <MobileOrder tour={tour} url={url} />
      </Container>
      <Footer />
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
      slug
      inclusions {
        value
      }
      categoryLink {
        slug
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
