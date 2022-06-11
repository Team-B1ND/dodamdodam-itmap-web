import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 15%;

  @media screen and (max-width: 500px) {
    height: 60vh;
  }
`;

export const NavContainer = styled.div`
  width: 100%;
`;

export const ShowUserListContainer = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-bottom: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;
  background-color: #fff;
  text-align: left;
  flex-direction: column;
  &:hover {
    background-color: #f1f1f1;
  }
  &:focus {
    background-color: #d1d1d1;
  }
`;

export const UserCompanyNameContainer = styled.div`
  font-size: 1.05rem;
  margin-bottom: 4px;
  font-weight: bold;
  color: blueviolet;
`;

export const UserCompanyLocationContainer = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
`;

// export const UserCompanyNameContainer = styled.section`
//   width: 100%;
// `;

export const CompanyInfoListWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 15%;
  min-width: 270px;
  height: 100vh;
  padding: 10px;
  z-index: 2;
  background-color: #fff;
  flex-direction: column;
`;

export const CompanyInfoListContainerWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #eee;
  padding: 7px;
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
`;

export const UserDevPosition = styled.div`
  text-align: center;
  background-color: pink;
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

export const Div = styled.div`
  margin-top: 4px;
  font-size: 0.7rem;
`;
