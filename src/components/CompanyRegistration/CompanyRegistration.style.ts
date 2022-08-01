import { palette } from "style/palette";
import styled from "styled-components";

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
  box-shadow: 0 3px 1px 0 rgb(0 0 0 / 15%);
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
  position: absolute;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 10;
`;

export const CompanyRegistrationModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  background-color: white;
  padding: 25px;
  border-radius: 5px;
  #modalCloseBtn {
    position: absolute;
    top: 7px;
    right: 7px;
    font-size: 1.5rem;
    cursor: pointer;
  }
  #modalCloseBtn:hover {
    color: ${palette.main};
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

export const CompanyAddressContainer = styled.div`
  width: 100%;
  height: 30px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserIntroduceMent = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  padding-left: 10px;
  border: 1px solid ${palette.gray[300]};
  &:focus {
    border: 1px solid ${palette.gray[500]};
  }
`;

export const CompanyNameInput = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  margin-top: 20px;
  padding-left: 10px;
  border: 1px solid ${palette.gray[300]};
  &:focus {
    border: 1px solid ${palette.gray[500]};
  }
`;

export const CompanyAddressBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${palette.gray[300]};
  &:focus {
    border: 1px solid ${palette.gray[500]};
  }
`;

export const CompanyAddressSearch = styled.button`
  width: 30%;
  height: 100%;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  background-color: ${palette.main};
`;

export const DaumPostSerchContanier = styled.div`
  width: calc(380px - 50px);
`;

export const CompanyRegistrationSubmitBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const CompanyRegistrationSubmitBtn = styled.button`
  border: none;
  color: white;
  padding: 12px;
  border-radius: 4px;
  background-color: ${palette.main};
`;

export const DevPosition = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  margin-top: 20px;
  padding-left: 10px;
  border: 1px solid ${palette.gray[300]};
  &:focus {
    border: 1px solid ${palette.gray[500]};
  }
`;
