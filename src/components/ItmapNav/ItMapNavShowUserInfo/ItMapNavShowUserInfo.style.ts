import { palette } from "style/palette";
import styled from "styled-components";

export const ShowUserListContainer = styled.div`
  position: absolute;
  left: 350px;
  top: 0px;
  height: 100%;
  min-width: 260px;
  padding: 10px;
  background-color: #fff;
  flex-direction: column;
  box-shadow: ${palette.boxShadowColor};
`;

export const UserInfoListContainerWrap = styled.div`
  overflow: auto;
  margin-top: 100px;
  display: grid;
  gap: 30px;
`;

export const CompanyInfoListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const UserInfoWrapper = styled.div`
  padding: 7px;
  border-radius: 5px;
  display: grid;
  gap: 5px;
  border: 1px solid ${palette.gray[200]};
`;

export const UserInfoImgAndNameWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserName = styled.div`
  font-size: 0.95rem;
  font-weight: bold;
`;

export const Userfield = styled.div`
  font-size: 0.95rem;
  font-weight: bold;
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
  transform: translate(250px, 70px);
  box-shadow: ${palette.boxShadowColor};
  &:hover {
    color: ${palette.main};
  }
`;

export const UserExplanation = styled.div`
  font-size: 0.7rem;
`;

export const Generation = styled.div`
  font-size: 0.7rem;
  padding: 2px 2px;
  /* padding: 3px 5px; */
`;

export const ProfileImg = styled.img`
  width: 50px;
  border-radius: 30%;
`;
