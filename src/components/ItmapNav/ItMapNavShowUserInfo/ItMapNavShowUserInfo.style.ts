import { palette } from "style/palette";
import styled from "styled-components";

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
