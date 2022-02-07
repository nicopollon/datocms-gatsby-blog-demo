import React from "react";
import Container from "../components/container";
import Intro from "../components/intro";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql, Link } from "gatsby";
import ActivityCarousel from "../components/activityCard";

export default function Index({
  data: { site, blog, allTours, vesuviusTours, capriTours },
}) {
  return (
    <Container>
      <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
      <Intro />

      <ActivityCarousel activities={allTours} title={"Top Tours"} />

      <ActivityCarousel activities={vesuviusTours} title={"Vesuvius Tours"} />
      <ActivityCarousel activities={capriTours} title={"Capri Tours"} />
    </Container>
  );
}

export const query = graphql`
  {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    blog: datoCmsBlog {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allTours: allDatoCmsTour(limit: 4) {
      nodes {
        categoryLink {
          name
          slug
        }
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
    capriTours: allDatoCmsTour(
      filter: { categoryLink: { slug: { eq: "capri" } } }
    ) {
      nodes {
        categoryLink {
          name
          slug
        }
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
    vesuviusTours: allDatoCmsTour(
      filter: { categoryLink: { slug: { eq: "vesuvian-area" } } }
    ) {
      nodes {
        categoryLink {
          name
          slug
        }
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
