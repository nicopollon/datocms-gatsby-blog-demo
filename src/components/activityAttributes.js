import React from "react";
import styled from "styled-components";
import { BsFillSkipEndFill } from "react-icons/bs";
import { MdHeadset } from "react-icons/md";
const TourAttribute = styled.li`
  text-transform: capitalize;
  display: flex;
  font-weight: 500;
  align-items: center;
  padding: 10px 0;
`;
const AttributeList = styled.ul``;

const ActivityAttributes = ({ tourAttributes }) => {
  const cleanedType =
    tourAttributes &&
    tourAttributes
      .replace("[", "")
      .replace("]", "")
      .replace(/_/g, " ")
      .replace(/"/g, "");
  const tourAttributesList = tourAttributes && cleanedType.split(",");

  const getIcons = (tour) => {
    if (tour.includes("skip line")) {
      return <BsFillSkipEndFill size={30} />;
    } else if (tour.includes("audio guide")) {
      return <MdHeadset size={30} />;
    } else {
      return "lol";
    }
  };

  const AttributeContainer = styled.div`
    padding: 16px 0;
    h3 {
      font-size: 32px;
      font-weight: 500;
    }
    @media screen and (max-width: 768px) {
      h3 {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        padding: 8px 0;
      }
    }
  `;
  const Attribute = styled.p`
    margin-left: 10px;
  `;
  return (
    <AttributeContainer>
      <h3>About this tour</h3>
      <AttributeList>
        {tourAttributes &&
          tourAttributesList.map((e) => (
            <TourAttribute key={e}>
              {" "}
              {getIcons(e)} {<Attribute>{e}</Attribute>}
            </TourAttribute>
          ))}
      </AttributeList>
    </AttributeContainer>
  );
};

export default ActivityAttributes;
