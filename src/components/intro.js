import React from "react";

import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Cart from "./Cart";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import {
  HeaderWrapper,
  HeaderContent,
  LinkContainer,
  MobileHeaderContent,
  MobileMenu,
  MobileSidebar,
  MobileLinkContainer,
  MobileActionContainer,
} from "../styles/Header";
import Container from "./container";

/* export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Link to="/">
        <h1 className="text-4xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
          Travel Agency.
        </h1>
      </Link>
      <Link to="/tours/capri/">Capri Island</Link>
      <Cart />
    </section>
  );
} */

const Intro = () => {
  const [openSidebar, setSidebar] = useState(false);

  return (
    <StaticQuery
      query={graphql`
        {
          allDatoCmsCategory {
            nodes {
              name
              slug
            }
          }
        }
      `}
      render={(data) => (
        <HeaderWrapper>
          <HeaderContent>
            <Link to="/">
              <h1 className="text-4xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
                Travel Agency.
              </h1>
            </Link>
            <LinkContainer>
              {data.allDatoCmsCategory.nodes.map((e, index) => (
                <Link key={index} to={`/tours/${e.slug}`}>
                  {e.name}
                </Link>
              ))}
            </LinkContainer>
            <Cart />
          </HeaderContent>
          <MobileHeaderContent>
            <Link to="/">
              <h1>Travel Agency.</h1>
            </Link>{" "}
            <MobileActionContainer>
              <Cart />
              <MobileMenu onClick={() => setSidebar(!openSidebar)}>
                <FiMenu size={35} />
              </MobileMenu>
            </MobileActionContainer>
          </MobileHeaderContent>
          <MobileSidebar open={openSidebar}>
            <Container>
              <MobileHeaderContent>
                <Link to="/">
                  <h1>Travel Agency.</h1>
                </Link>{" "}
                <MobileActionContainer>
                  <Cart />
                  <MobileMenu onClick={() => setSidebar(!openSidebar)}>
                    {openSidebar ? (
                      <AiOutlineClose size={35} />
                    ) : (
                      <FiMenu size={35} />
                    )}
                  </MobileMenu>
                </MobileActionContainer>
              </MobileHeaderContent>
              <MobileLinkContainer>
                {data.allDatoCmsCategory.nodes.map((e, index) => (
                  <Link key={index} to={`/tours/${e.slug}`}>
                    {e.name}
                  </Link>
                ))}
              </MobileLinkContainer>
            </Container>
          </MobileSidebar>
        </HeaderWrapper>
      )}
    ></StaticQuery>
  );
};

export default Intro;
