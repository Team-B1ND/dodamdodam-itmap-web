import styled from "styled-components";

export const CompanyInfoListWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 15%;
  min-width: 270px;
  height: 100vh;
  padding: 6px;
  z-index: 2;
  background-color: #fff;
  flex-direction: column;
`;

export const CompanyInfoListContainerWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #eee;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

export const CompanyInfoListContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #eee;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

export const UserNameContainer = styled.div``;

export const UserDevPosition = styled.div`
  text-align: center;
  background-color: pink;
  span {
    padding: 5px;
  }
`;

export const CloseBtn = styled.div`
  width: 10%;
  height: 20px;
  background-color: none;
  text-align: center;
`;

export const CloseBtnContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: right;
  align-items: center;
`;
