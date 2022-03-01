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
import SliderComponent from "../components/slider";

export default function Index({
  data: {
    site,
    blog,
    allTours,
    vesuviusTours,
    capriTours,
    amalfiTours,
    sorrentoTours,
  },
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
            <h1>Explore beautiful Campania</h1>
            <p>Book your tours here</p>
          </HeroContent>
        </HeroContentWrapper>
      </HeroCover>

      <Container>
        <SliderComponent activities={allTours} title={"Top Tours"} />
        <SliderComponent activities={vesuviusTours} title={"Vesuvius Area"} />
        <SliderComponent activities={capriTours} title={"Capri Island"} />
        <SliderComponent activities={amalfiTours} title={"Amalfi Coast"} />
        <SliderComponent activities={sorrentoTours} title={"Sorrento"} />

        <ActivityCarousel activities={allTours} title={"Top Tours"} />
        <ActivityCarousel activities={vesuviusTours} title={"Vesuvius Tours"} />
        <ActivityCarousel activities={capriTours} title={"Capri Tours"} />
        <ActivityCarousel activities={amalfiTours} title={"Amalfi Coast"} />
        <ActivityCarousel activities={sorrentoTours} title={"Sorrento"} />
      </Container>
      <Footer />
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
    amalfiTours: allDatoCmsTour(
      filter: { categoryLink: { slug: { eq: "amalfi-coast" } } }
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
    sorrentoTours: allDatoCmsTour(
      filter: { categoryLink: { slug: { eq: "sorrento" } } }
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
