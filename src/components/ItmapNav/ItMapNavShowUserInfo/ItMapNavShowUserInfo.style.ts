import { palette } from "style/palette";
import styled from "styled-components";

export const ShowUserListContainer = styled.div`
  min-width: 330px;
  height: 100%;
  position: absolute;
  left: 350px;
  top: 0px;
  padding: 20px;
  background-color: #fff;
  flex-direction: column;
  z-index: -2;
  box-shadow: ${palette.boxShadowColor};
  @media screen and (max-width: 500px) {
    width: 100%;
    left: 0px;
  }
`;

export const UserInfoListContainerWrap = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 30px;
  transition: 0.5s;
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
  font-size: 1.1rem;
  font-weight: bold;
`;

export const Userfield = styled.div`
  font-size: 1.1rem;
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
  justify-content: center;
  align-items: center;
  background-color: white;
  transform: translate(310px, 70px);
  box-shadow: ${palette.boxShadowColor};
  &:hover {
    color: ${palette.main};
  }
`;

export const UserExplanation = styled.div`
  font-size: 0.9rem;
`;

export const Generation = styled.div`
  font-size: 0.9rem;
  padding: 2px 2px;
`;

export const ProfileImg = styled.img`
  width: 70px;
  border-radius: 30%;
`;
