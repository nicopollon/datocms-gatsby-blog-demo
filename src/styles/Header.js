import styled from "styled-components";

export const HeaderWrapper = styled.section`
  height: 70px;
  margin-bottom: 1.25rem;
`;
export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
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
