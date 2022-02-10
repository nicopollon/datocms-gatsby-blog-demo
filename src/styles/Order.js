import styled from "styled-components";

export const Price = styled.h3`
  font-weight: 600;
  font-size: 20px;
`;
export const OrderWrapper = styled.div`
  flex: 1;
  padding: 16px;
  border: 2px solid #dcdfe4;
  border-radius: 16px;
  position: sticky;
  top: 0;
  margin: 16px 0;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const PartecipantsWrapper = styled.div`
  width: 100%;
  border-radius: 12px;
  padding: 8px 12px;
  border: 3px solid #dcdfe4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 12px 0;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
  :hover {
    border: 3px solid #0066ff;
    background-color: #ebeef1;
  }
`;
export const PartecipantSpenWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const PartecipantFloating = styled.div`
  right: 42px;
  top: 62px;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  background-color: #fff;
  position: absolute;
  min-width: 100%;
  padding: 20px 12px;
  margin: 12px 0;
  border-radius: 4px;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 25%);
  z-index: 100;
  flex-direction: column;
`;

export const BookBtn = styled.button`
  border-radius: 24px;
  padding: 9px 24px;
  background-color: #0066ff;
  color: #fff;
  font-weight: 600;
  margin-top: 4px;
  width: 100%;
  &:hover {
    opacity: 0.75;
  }
  transition: all 0.4s ease-in;
  @media screen and (max-width: 768px) {
    flex-basis: fit-content;
  }
`;
export const BookModal = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  position: fixed;
  opacity: ${({ open }) => (open ? "1" : "0")};
  overflow-y: scroll;
  display: none;
  flex-direction: column;
  bottom: ${({ open }) => (open ? "0px" : "-100%")};

  left: 0;
  z-index: 1000;

  justify-content: start;
  align-items: flex-start;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;
`;
export const PartecipantsMobile = styled.div`
  opacity: ${({ open }) => (open ? "1" : "0")};
  bottom: ${({ open }) => (open ? "0px" : "-100%")};
  left: 0;
  min-height: 50%;
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;
  position: absolute;
  padding: 12px;
  width: 100%;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 25%);
  z-index: 100;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
`;
export const PartecipantsMobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  h2 {
    font-weight: 600;
    text-align: center;
  }
`;
export const OrderRecap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 2px solid #dcdfe4;
  border-radius: 12px;
  h2 {
    font-weight: 600;
  }
  * {
    padding: 6px 0;
  }
`;
export const PriceCalc = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  margin: 12px 0;
  border-radius: 12px;
  border: 3px solid #dcdfe4;
  transition: all 0.2s;
  cursor: pointer;
  :hover {
    border: 3px solid #0066ff;
    background-color: #ebeef1;
  }
`;
