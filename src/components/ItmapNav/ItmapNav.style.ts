import { palette } from "style/palette";
import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 384px;
  height: 100%;
  position: fixed;
  top: 0px;
  z-index: 1;
  background-color: white;
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

export const NavTitle = styled.div`
  width: 100%;
  height: 150px;
  padding: 15px;
  background-color: ${palette.main};
  display: flex;
  justify-content: space-between;
`;

export const NavTitleMent = styled.div`
  color: #fff;
  font-size: 1.3rem;
`;

export const ProfileUpDate = styled.div`
  color: white;
`;
