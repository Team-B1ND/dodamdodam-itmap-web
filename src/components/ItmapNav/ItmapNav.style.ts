import { palette } from "style/palette";
import styled from "styled-components";

export const NavWrapper = styled.div<{ isNavToggle: boolean }>`
  width: 384px;
  height: 100%;
  position: relative;
  top: 0px;
  left: ${({ isNavToggle }) => (isNavToggle ? 0 : -384)}px;
  transition: 0.7s;
  z-index: 1;
  background-color: white;
  box-shadow: 3px 0px 10px 0 rgb(0 0 0 / 15%);
`;

export const NavContainer = styled.div`
  width: 100%;
  height: calc(100% - 150px);
  overflow: scroll;
  text-align: center;

  /* 스크롤 바 크기 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  /* 스크롤 꾸미기 */
  &::-webkit-scrollbar-thumb {
    background-color: ${palette.lightBlue[200]};
    border-radius: 10px;
  }

  /* 스크롤 뒷 배경 */
  &::-webkit-scrollbar-track {
    background-color: ${palette.lightBlue[50]};
  }
`;

export const NavTitleContainer = styled.div`
  width: 100%;
  height: 150px;
  padding: 15px;
  background-color: ${palette.main};
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
  margin-top: 40px;
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
  isCompanyInUserInfo: boolean;
}>`
  height: 100%;
  position: relative;
  transition: ${({ isCompanyInUserInfo }) => (isCompanyInUserInfo ? 0 : 0.7)}s;
  left: ${({ isNavToggle }) => (isNavToggle ? 0 : -384)}px;
  z-index: ${({ isCompanyInUserInfo }) => (isCompanyInUserInfo ? 0 : 10)};
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
