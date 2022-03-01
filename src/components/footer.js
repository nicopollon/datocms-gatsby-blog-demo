import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Container from "./container";
import { FooterContainer, FooterLinks, FooterList } from "../styles/footer";

export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
            }
          }
          allDatoCmsCategory {
            nodes {
              name
              slug
            }
          }
        }
      `}
      render={(data) => (
        <footer style={{ minHeight: "40vh", background: "lightblue" }}>
          <Container>
            <FooterContainer>
              <FooterList>
                <h2>{data.site.siteMetadata.title}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus mi lectus, vestibulum vel tellus sit amet, porttitor
                  pharetra urna. Integer ullamcorper sem dui, egestas rhoncus
                  neque imperdiet vel.
                </p>
                <p>Fake street 123, Fake City</p>
              </FooterList>
              <FooterList>
                <h2>Links</h2>
                <ul>
                  {data.allDatoCmsCategory.nodes.map((e, index) => (
                    <FooterLinks>
                      <Link key={index} to={`/tours/${e.slug}`}>
                        {e.name}
                      </Link>
                    </FooterLinks>
                  ))}
                </ul>
              </FooterList>
            </FooterContainer>
          </Container>
        </footer>
      )}
    ></StaticQuery>
  );
}
