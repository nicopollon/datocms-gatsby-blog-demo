// fs dependency is a Node.js library for working with the filesystem.
const fs = require("fs");
// Path is a Node.js library with utilities for working with file paths.
const path = require("path");

exports.onPostBuild = ({ graphql }) => {
  graphql(`
    {
      allDatoCmsTour {
        edges {
          node {
            title
            slug
            price
            id
            childPrice
          }
        }
      }
    }
  `).then((result) => {
    const jsonToursPath = "./public/toursJson";
    const tours = result.data.allDatoCmsTour.edges.map(({ node }) => node);
    if (!fs.existsSync(jsonToursPath)) fs.mkdirSync(jsonToursPath);

    // Loop through each (filtered) result from the query and write them to
    // file.
    tours.map((tour) => {
      // The slug is pulled from the name of the markdown file.

      const data = [
        {
          title: tour.title,
          price: tour.price,
          slug: tour.slug,
          id: tour.id,
        },
        {
          title: tour.title + "child",
          price: tour.childPrice,
          slug: tour.slug,
          id: tour.id + "child",
        },
      ];
      fs.writeFileSync(
        `${jsonToursPath}/${tour.slug}.json`,
        JSON.stringify(data)
      );
    });
  });
};
