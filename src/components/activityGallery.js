import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const ActivityGallery = ({ galleryImages }) => {
  return (
    <div>
      {galleryImages.map((e) => (
        <GatsbyImage image={e.gatsbyImageData} />
      ))}
    </div>
  );
};

export default ActivityGallery;
