import React from "react";
import {
  HeroContent,
  HeroCover,
  HeroContentWrapper,
} from "../styles/CategoryIndex";
import { GatsbyImage } from "gatsby-plugin-image";
import Container from "./container";
const Category = ({ title, description, image }) => {
  return (
    <HeroCover>
      <GatsbyImage image={image} alt="" style={{ gridArea: "1/1" }} />
      <HeroContentWrapper>
        <HeroContent>
          <Container>
            <h1>{title}</h1>
            <p>{description}</p>
          </Container>
        </HeroContent>
      </HeroContentWrapper>
    </HeroCover>
  );
};

export default Category;
