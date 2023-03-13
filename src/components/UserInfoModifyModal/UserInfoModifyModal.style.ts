import { palette } from "style/palette";
import styled from "styled-components";

export const UserInfoModifyModalContainerBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserInfoModifyModalContainer = styled.div`
  width: 420px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  border-radius: 5px;
  .modalCloseBtn {
    position: absolute;
    top: 7px;
    right: 7px;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      color: ${palette.main};
    }
  }
`;

export const CurrentInput = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  font-size: 0.9rem;
  margin-top: 20px;
  padding-left: 10px;
  border: 1px solid ${palette.gray[300]};
  &:focus {
    border: 1px solid ${palette.gray[500]};
  }
`;

export const UserFieldSelect = styled.select`
  width: 100%;
  height: 30px;
  outline: none;
  font-size: 0.9rem;
  margin-top: 20px;
  padding-left: 10px;
  border: 1px solid ${palette.gray[300]};
  &:focus {
    border: 1px solid ${palette.gray[500]};
  }
`;

export const CompanyRegistrationSubmitBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export const CompanyRegistrationSubmitBtn = styled.button`
  border: none;
  color: white;
  padding: 12px;
  font-size: 0.9rem;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${palette.main};
`;
