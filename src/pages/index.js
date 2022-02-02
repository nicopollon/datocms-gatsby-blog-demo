import React from "react";
import Container from "../components/container";
import Intro from "../components/intro";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql, Link } from "gatsby";
import ActivityCarousel from "../components/activityCard";

export default function Index({ data: { site, blog, allTours } }) {
  return (
    <Container>
      <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
      <Intro />

      <ActivityCarousel activities={allTours} />
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
    allTours: allDatoCmsTour {
      nodes {
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
