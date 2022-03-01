import styled from "styled-components";

export const TourHeader = styled.div`
  display: ${({ forMobile }) => (forMobile ? "none" : "flex")};
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: 32px;
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    flex-basis: fit-content;
    margin-right: 10px;
  }
  @media screen and (max-width: 768px) {
    display: ${({ forMobile }) => (forMobile ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 5px 0;
    h1 {
      font-size: 1.5rem;
      font-weight: 00;
      margin-top: 0;
      flex-basis: fit-content;
    }
    p {
      font-size: 1.1rem;
    }
  }
`;
export const Description = styled.p`
  font-size: 16px;
  padding: 16px 0;
`;
export const ActivityContainer = styled.section`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;
export const ActivityContent = styled.div`
  flex: 3;
`;
export const MobileOrderContainer = styled.div`
  position: sticky;
  width: 100%;
  height: 100%;
  padding: 8 16px;
  display: flex;
  align-items: center;
`;
export const MobileOrderWrapper = styled.div`
  position: sticky;
  display: none;
  width: 100%;
  bottom: 0;
  height: 80px;
  background-color: #fff;
  border-top: 1px solid #dcdfe4;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
export const PriceTag = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
export const PriceContainer = styled.div`
  display: flex;

  flex-grow: 1;
  flex-direction: column;
  span {
    font-weight: 300;
  }
`;
