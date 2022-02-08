import React from "react";
import Container from "../components/container";
import Intro from "../components/intro";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql, Link } from "gatsby";
import ActivityCarousel from "../components/activityCard";
import { StaticImage } from "gatsby-plugin-image";

import Footer from "../components/footer";
import {
  HeroContent,
  HeroCover,
  HeroContentWrapper,
} from "../styles/CategoryIndex";
export default function Index({
  data: { site, blog, allTours, vesuviusTours, capriTours },
}) {
  return (
    <>
      <Container>
        <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
        <Intro />
      </Container>

      <HeroCover>
        <StaticImage
          alt=""
          src="../images/vespa-street.jpg"
          style={{ gridArea: "1/1", maxHeight: "400px" }}
        />
        <HeroContentWrapper>
          <HeroContent>
            <Container>
              <h1>Explore beautiful Campania</h1>
              <p>Pompeii,Positano and ...</p>
            </Container>
          </HeroContent>
        </HeroContentWrapper>
      </HeroCover>
      <Container>
        <ActivityCarousel activities={allTours} title={"Top Tours"} />

        <ActivityCarousel activities={vesuviusTours} title={"Vesuvius Tours"} />
        <ActivityCarousel activities={capriTours} title={"Capri Tours"} />
        <Footer />
      </Container>
    </>
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
