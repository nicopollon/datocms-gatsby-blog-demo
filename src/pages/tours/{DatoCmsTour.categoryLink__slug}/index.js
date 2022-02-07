import React from "react";
import { graphql } from "gatsby";
import Category from "../../../components/Category";
import Container from "../../../components/container";
import Intro from "../../../components/intro";
import ActivityCarousel from "../../../components/activityCard";

export default function Index({
  data: {
    category,
    allCapriTours,
    allSorrentoTours,
    allAmalfiTours,
    allVesuviusTours,
  },
}) {
  const getToursType = (category) => {
    if (category === "Capri Island") {
      return (
        <ActivityCarousel activities={allCapriTours} title={"Most Popular"} />
      );
    } else if (category === "Vesuvian Area") {
      return (
        <ActivityCarousel
          activities={allVesuviusTours}
          title={"Most Popular"}
        />
      );
    } else if (category === "Sorrento") {
      return (
        <ActivityCarousel
          activities={allSorrentoTours}
          title={"Most Popular"}
        />
      );
    } else if (category === "Amalfi Coast") {
      return (
        <ActivityCarousel activities={allAmalfiTours} title={"Most Popular"} />
      );
    }
  };

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
      <Container>{getToursType(category.categoryLink.name)}</Container>
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

    allCapriTours: allDatoCmsTour(
      filter: { categoryLink: { name: { eq: "Capri Island" } } }
    ) {
      nodes {
        categoryLink {
          name
          slug
          id
        }
        id
        title
        slug
        price
        tourTypes
        tourAttributes
        description
        duration
        coverImage {
          gatsbyImageData(layout: CONSTRAINED, aspectRatio: 2.5)
        }
      }
    }
    allSorrentoTours: allDatoCmsTour(
      filter: { categoryLink: { name: { eq: "Sorrento" } } }
    ) {
      nodes {
        categoryLink {
          name
          slug
          id
        }
        id
        title
        slug
        price
        tourTypes
        tourAttributes
        description
        duration
        coverImage {
          gatsbyImageData(layout: CONSTRAINED, aspectRatio: 2.5)
        }
      }
    }
    allVesuviusTours: allDatoCmsTour(
      filter: { categoryLink: { name: { eq: "Vesuvian Area" } } }
    ) {
      nodes {
        categoryLink {
          name
          slug
          id
        }
        id
        title
        slug
        price
        tourTypes
        tourAttributes
        description
        duration
        coverImage {
          gatsbyImageData(layout: CONSTRAINED, aspectRatio: 2.5)
        }
      }
    }
    allAmalfiTours: allDatoCmsTour(
      filter: { categoryLink: { name: { eq: "Amalfi Coast" } } }
    ) {
      nodes {
        categoryLink {
          name
          slug
          id
        }
        id
        title
        slug
        price
        tourTypes
        tourAttributes
        description
        duration
        coverImage {
          gatsbyImageData(layout: CONSTRAINED, aspectRatio: 2.5)
        }
      }
    }
  }
`;
