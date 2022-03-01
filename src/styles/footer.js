import styled from "styled-components";
import { Link } from "gatsby";
export const FooterContainer = styled.div`
  display: flex;
  padding: 1rem 0;
  & div:nth-child(2) {
    margin-left: 30px;
  }
`;
export const FooterList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 1.4rem;
    font-weight: 600;
  }
  p {
    padding: 6px 0;
  }
`;

export const FooterLinks = styled.li`
  list-style: none;
  padding: 6px 0;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  :hover {
    text-decoration: underline;
    font-weight: 600;
  }
`;
