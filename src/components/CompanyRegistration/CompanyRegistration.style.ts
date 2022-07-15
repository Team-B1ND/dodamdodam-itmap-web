import { palette } from "style/palette";
import styled, { keyframes } from "styled-components";

export const CompanyRegistrationContanier = styled.div`
  width: 240px;
  height: 50px;
  border-radius: 50px;
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

export const CompanyRegistrationMent = styled.div`
  width: 176px;
  display: flex;
  justify-content: right;
  align-items: center;
  font-weight: 600;
`;

export const CompanyRegistrationBtn = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${palette.boxShadowColor};
  background-color: ${palette.main};
  transition: 0.4s;
  cursor: pointer;
  transform: scale(1.15);
  &:hover {
    transform: scale(1.2) rotate(90deg);
  }
`;

export const CompanyRegistrationModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 10;
`;

export const CompanyRegistrationModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 400px;
  background-color: white;
  padding: 24px;
  border-radius: 5px;
  #modalCloseBtn {
    position: absolute;
    top: 7px;
    right: 7px;
    cursor: pointer;
  }
`;

export const NameInput = styled.input`
  width: 100%;
  height: 30px;
  margin: 20px 0;
  padding-left: 10px;
  outline: none;
  border: 1px solid ${palette.gray[300]};

  &:focus {
    border: 1px solid ${palette.gray[500]};
  }
`;

export const CompanyAddressInput = styled.input`
  width: 100%;
  height: 30px;
  margin: 20px 0;
  padding-left: 10px;
  outline: none;
  border: 1px solid ${palette.gray[300]};

  &:focus {
    border: 1px solid ${palette.gray[500]};
  }
`;
