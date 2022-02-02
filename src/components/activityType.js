import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const ActivityCardTypes = styled.ul`
  list-style: none;
  position: relative;
  top: -15px;
  display: flex;
  width: 100%;
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
`;

const ActivityType = ({ tourTypes }) => {
  const [tourTypeColor, setTourTypeColor] = useState("#1593FF");

  const cleanedType =
    tourTypes && tourTypes.replace("[", "").replace("]", "").replace(/"/g, "");
  const tourTypesList = tourTypes && cleanedType.split(",");

  const getColor = (tour) => {
    console.log(tour);
    if (tour.includes("boat")) {
      return "#0066ff";
    } else if (tour.includes("guide")) {
      return "#e77137";
    } else {
      return "#000";
    }
  };

  return (
    <ActivityCardTypes>
      {tourTypesList.map((e) => (
        <ActivityCardType typeColor={() => getColor(e)}>{e}</ActivityCardType>
      ))}
    </ActivityCardTypes>
  );
};

export default ActivityType;
