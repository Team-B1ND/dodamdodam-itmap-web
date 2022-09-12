import { palette } from "style/palette";
import styled from "styled-components";

export const NavWrapper = styled.div<{ isNavToggle: boolean }>`
  width: 350px;
  position: relative;
  top: 0px;
  left: ${({ isNavToggle }) => (isNavToggle ? 0 : -350)}px;
  z-index: 1;
  background-color: white;
  box-shadow: 3px 0px 10px 0 rgb(0 0 0 / 15%);
  @media screen and (max-width: 500px) {
    position: fixed;
    top: 70%;
    display: grid;
  }
`;

export const NavContainer = styled.div`
  width: 100%;
  height: calc(100% - 75px);
  overflow: auto;
  text-align: center;
  padding-top: 30px;
  border-right: 1px solid ${palette.gray[200]};

  /* 스크롤 바 크기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NavTitleContainer = styled.div`
  width: 100%;
  padding: 15px;
  background-color: ${palette.main};
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const NavTitleMent = styled.div`
  width: 100%;
  color: #fff;
  font-size: 1.3rem;
`;

export const NavCompanySearchContainer = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  background-color: #fff;
  #fiSearch {
    width: 10%;
    float: right;
    padding-right: 10px;
    width: 32px;
    height: 32px;
    cursor: pointer;
    color: ${palette.gray[500]};
    &:hover {
      color: ${palette.gray[800]};
    }
  }
`;

export const NavCompanySearchInput = styled.input`
  float: left;
  width: 90%;
  font-size: 1rem;
  outline: none;
  padding-left: 10px;
  font-weight: bold;
  background-color: transparent;
  border: none;
`;

export const ProfileUpDate = styled.div`
  color: white;
`;

export const NavToggleBtnContainer = styled.div<{
  isNavToggle: boolean;
  isSubNavToggle: boolean;
}>`
  position: relative;
  margin-top: calc((100vh / 2));
  height: 20px;
  left: ${({ isNavToggle, isSubNavToggle }) =>
    isNavToggle ? (isSubNavToggle ? 260 : -1) : -350}px;
  z-index: ${({ isSubNavToggle, isNavToggle }) =>
    isSubNavToggle ? (isNavToggle ? 10 : 0) : 10};
  display: flex;
  align-items: center;
`;

export const NavToggleBtn = styled.button`
  background-color: #fff;
  width: 25px;
  height: 50px;
  border: none;
  outline: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.main};
  cursor: pointer;
  box-shadow: ${palette.boxShadowColor};
`;

export const ShowUserListContainer = styled.div`
  position: absolute;
  left: 384px;
  top: 0px;
  min-width: 270px;
  height: 100%;
  padding: 10px;
  background-color: #fff;
  flex-direction: column;
  box-shadow: ${palette.boxShadowColor};
`;

export const CompanyInfoListContainerWrapper = styled.div`
  width: 100%;
  background-color: ${palette.main};
  color: ${palette.gray[100]};
  padding: 7px;
  border-radius: 5px;
  margin-top: 100px;
`;

export const CompanyInfoListContainer = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`;

export const UserNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
`;

export const UserDevPosition = styled.div`
  text-align: center;
  padding: 1px 3px;
  background-color: ${palette.lightBlue[200]};
  border-radius: 5px;
  height: 25px;
`;

export const CloseBtnContainer = styled.div`
  width: 40px;
  z-index: 10;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  transform: translate(260px, 70px);
  box-shadow: ${palette.boxShadowColor};
  &:hover {
    color: ${palette.main};
  }
`;

export const UserExplanation = styled.div`
  width: 90%;
  font-size: 0.7rem;
`;

export const Generation = styled.div`
  font-size: 0.7rem;
  padding: 0 3px;
`;

export const ProfileImg = styled.img`
  width: 50px;
  border-radius: 50%;
`;
