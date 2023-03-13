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

export const TextLogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TextLogo = styled.img`
  width: 90%;
`;

export const NullTextLogo = styled.div`
  height: 63px;
`;

export const UserInfoListContainerWrap = styled.div`
  margin-top: -17px;
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
  padding: 10px;
  border-radius: 5px;
  display: grid;
  gap: 5px;
  border: 1px solid ${palette.gray[200]};
`;

export const UserInfoImgAndNameWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const DetailInfo = styled.div`
  width: 122px;
`;

export const UserName = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  padding: 10px 3px 3px 3px;
`;

export const Userfield = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 5px 0;
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
  width: 100%;
  height: 50px;
  border-radius: 5px;
  padding: 7px;
  word-wrap: break-word;
  overflow: auto;
  background-color: ${palette.gray[100]};
  font-size: 0.9rem;
`;

export const Generation = styled.div`
  font-size: 0.9rem;
  padding: 2px 2px;
  .githubIcon {
    cursor: pointer;
  }
`;

export const ModifyContainer = styled.div`
  display: flex;
  margin: 10px 0 0 40px;
  cursor: pointer;
`;

export const ModifyModal = styled.div`
  position: absolute;
  right: 5px;
  margin-top: 33px;
  width: 70px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 10px 0px rgb(0 0 0 / 30%);
`;

export const ModifyBtn = styled.div`
  padding: 10px 0;
  cursor: pointer;
  color: #333;
  background-color: #fff;
  &:hover {
    color: #fff;
    background-color: ${palette.main};
  }
  &:nth-last-child(2) {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &:nth-last-child(1) {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;

export const ProfileImg = styled.img`
  width: 70px;
  border-radius: 30%;
`;
