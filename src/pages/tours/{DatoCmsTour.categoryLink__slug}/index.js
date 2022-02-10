import React from "react";
import { graphql } from "gatsby";
import Category from "../../../components/Category";
import Container from "../../../components/container";
import Intro from "../../../components/intro";
import ActivityCarousel from "../../../components/activityCard";
import SliderComponent from "../../../components/slider";
import Footer from "../../../components/footer";
export default function Index({
  data: {
    category,
    allCapriTours,
    allSorrentoTours,
    allAmalfiTours,
    allVesuviusTours,
  },
}) {
  const getToursType = (catName) => {
    if (catName === "Capri Island") {
      return (
        <>
          <ActivityCarousel activities={allCapriTours} title={"Most Popular"} />

          <SliderComponent activities={allCapriTours} title={"Capri Island"} />
        </>
      );
    }
    if (catName === "Vesuvian Area") {
      return (
        <>
          <ActivityCarousel
            activities={allVesuviusTours}
            title={"Most Popular"}
          />
          <SliderComponent
            activities={allVesuviusTours}
            title={"Vesuvius Area"}
          />
        </>
      );
    }
    if (catName === "Sorrento") {
      return (
        <>
          <ActivityCarousel
            activities={allSorrentoTours}
            title={"Most Popular"}
          />

          <SliderComponent activities={allSorrentoTours} title={"Sorrento"} />
        </>
      );
    }
    if (catName === "Amalfi Coast") {
      return (
        <>
          <ActivityCarousel
            activities={allAmalfiTours}
            title={"Most Popular"}
          />

          <SliderComponent activities={allAmalfiTours} title={"Amalfi Coast"} />
        </>
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
      <Container>{getToursType(category.categoryLink.name)} </Container>
      <Footer />
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
