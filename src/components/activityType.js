import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const ActivityCardTypes = styled.ul`
  list-style: none;
  position: relative;
  display: flex;
  width: 100%;
  flex-basis: fit-content;
  top: ${({ inCarousel }) => (inCarousel ? "-15px" : "0")};
`;
export const ActivityCardType = styled.li`
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  background-color: ${({ typeColor }) => typeColor || "#242424"};
  padding: 6px 12px;
  margin: 0 3px;
  color: #fff;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin: 0;
  }
`;

const ActivityType = ({ tourTypes, inCarousel }) => {
  const [tourTypeColor, setTourTypeColor] = useState("#1593FF");

  const cleanedType =
    tourTypes && tourTypes.replace("[", "").replace("]", "").replace(/"/g, "");
  const tourTypesList = tourTypes && cleanedType.split(",");

  const getColor = (tour) => {
    if (tour.includes("boat")) {
      return "#0066ff";
    } else if (tour.includes("guide")) {
      return "#e77137";
    } else {
      return "#000";
    }
  };

  return (
    <ActivityCardTypes inCarousel={inCarousel}>
      {tourTypesList.map((e) => (
        <ActivityCardType key={e} typeColor={() => getColor(e)}>
          {e}
        </ActivityCardType>
      ))}
    </ActivityCardTypes>
  );
};

export default ActivityType;
