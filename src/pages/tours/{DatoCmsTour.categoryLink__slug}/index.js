import React from "react";
import { graphql } from "gatsby";
import Category from "../../../components/Category";
import Container from "../../../components/container";
import Intro from "../../../components/intro";
import ActivityCarousel from "../../../components/activityCard";

export default function Index({ data: { category, tours } }) {
  return (
    <>
      <Container>
        <Intro />{" "}
      </Container>

      <Category
        title={category.categoryLink.name}
        description={category.categoryLink.description}
        image={category.categoryLink.heroImage.gatsbyImageData}
      />
    </>
  );
}

export const query = graphql`
  query categoryQuery($id: String) {
    category: datoCmsTour(id: { eq: $id }) {
      categoryLink {
        description
        name
        heroImage {
          gatsbyImageData(height: 450, aspectRatio: 2)
        }
      }
    }
  }
`;
