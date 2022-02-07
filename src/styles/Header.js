import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
export const HeaderWrapper = styled.section`
  height: 70px;
  margin-bottom: 1.25rem;
`;
export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 16px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileHeaderContent = styled.div`
  display: flex;
  width: 100%;
  height: 76px;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LinkContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  * {
    padding: 0 10px;
    font-size: 18px;
    font-weight: 500;
  }
`;
export const MobileLinkContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
  * {
    font-size: 18px;
    font-weight: 400;
  }
`;
export const MobileMenu = styled.div``;
export const MobileSidebar = styled.aside`
  height: 100%;
  width: 100%;
  background-color: #fff;
  position: fixed;
  opacity: ${({ open }) => (open ? "1" : "0")};
  display: flex;
  flex-direction: column;
  top: ${({ open }) => (open ? "0px" : "-100%")};

  left: 0;
  z-index: 1000;

  justify-content: start;
  align-items: flex-start;
  transition: all 0.3s ease-in-out;
`;
export const MobileActionContainer = styled.div`
  flex-basis: fit-content;
  display: flex;
  * {
    margin: 0 8px;
  }
`;
