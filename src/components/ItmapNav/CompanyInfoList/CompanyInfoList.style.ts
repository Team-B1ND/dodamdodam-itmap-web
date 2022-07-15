import styled from "styled-components";

export const CompanyInfoListWrapper = styled.div`
  position: absolute;
  left: 384px;
  top: 0px;
  min-width: 270px;
  height: 100vh;
  padding: 10px;
  z-index: 10;
  background-color: #fff;
  flex-direction: column;
`;

export const CompanyInfoListContainerWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #c4c4c4;
  padding: 7px;
  color: white;
  border-radius: 5px;
`;

export const CompanyInfoListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const UserNameContainer = styled.div`
  font-size: 1rem;
  font-weight: bold;
  span {
    font-size: 1rem;
  }
`;

export const UserDevPosition = styled.div`
  text-align: center;
  background-color: pink;
  color: white;
  border-radius: 5px;
  span {
    padding: 7px;
  }
`;

export const CloseBtn = styled.div`
  width: 10%;
  height: 20px;
  background-color: none;
  text-align: center;
  cursor: pointer;
`;

export const CloseBtnContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: right;
  align-items: center;
`;

export const UserExplanation = styled.div`
  margin-top: 4px;
  font-size: 0.7rem;
`;
