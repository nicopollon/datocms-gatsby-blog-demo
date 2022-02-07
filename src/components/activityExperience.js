import React from "react";
import { StructuredText } from "react-datocms";
import styled from "styled-components";

const Experience = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;
const ExperienceSection = styled.div`
  display: flex;
  border-bottom:${({ noBorder }) => (noBorder ? "none" : "1px solid #dcdfe4;")} 
  padding-bottom: 24px;
  margin-bottom: 24px;
  @media screen and (max-width:768px){
    flex-direction:column;
  }
`;
const ExperienceTitle = styled.div`
  flex-basis: 25%;
  max-width: 25%;
  width: auto;
  h2 {
    font-size: 1rem;
    font-weight: 500;
  }
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
    text-align: left;
    margin-bottom: 10px;
  }
`;

const Highlights = styled.ul`
  list-style: inside;
`;
const ActivityExperience = ({ description, inclusions }) => {
  return (
    <Experience>
      <ExperienceSection>
        <ExperienceTitle>
          {" "}
          <h2>Experience</h2>
        </ExperienceTitle>
        <Highlights>
          <li>asd</li>
          <li>asd</li>
        </Highlights>
      </ExperienceSection>
      <ExperienceSection>
        <ExperienceTitle>
          {" "}
          <h2>Full description</h2>
        </ExperienceTitle>
        <Highlights>
          <p>{description}</p>
        </Highlights>
      </ExperienceSection>
      <ExperienceSection>
        <ExperienceTitle>
          {" "}
          <h2>What's included</h2>
        </ExperienceTitle>
        <Highlights>
          <StructuredText data={inclusions} />
        </Highlights>
      </ExperienceSection>
      <ExperienceSection>
        <ExperienceTitle>
          {" "}
          <h2>Additional Info</h2>
        </ExperienceTitle>
        <Highlights>
          <p></p>
        </Highlights>
      </ExperienceSection>

      <ExperienceSection noBorder>
        <ExperienceTitle>
          {" "}
          <h2>Do not forget</h2>
        </ExperienceTitle>
        <Highlights>
          <p>{description}</p>
        </Highlights>
      </ExperienceSection>
    </Experience>
  );
};

export default ActivityExperience;
