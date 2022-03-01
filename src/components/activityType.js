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
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;
  background-color: ${({ typeColor }) => typeColor || "#242424"};
  padding: 3px 6px;
  width: max-content;
  margin: 0 6px;
  color: #fff;
  border-radius: 4px;
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
