import { palette } from "style/palette";
import styled from "styled-components";

export const ShowCompanyInfoListContanier = styled.button`
  width: 90%;
  height: 15%;
  border: none;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  gap: 12px;
  text-align: left;
  transition: 0.3s;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 5px rgba(0 0 0 / 6%);
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
  &:focus {
    background-color: #d1d1d1;
  }
`;

export const CompanyLogo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 50%;
`;

export const TextLogo = styled.div`
  width: 40px;
  height: 40px;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid ${palette.gray[600]};
  font-weight: bold;
`;

export const UserCompanyNameContainer = styled.div`
  font-size: 1.15rem;
  margin-bottom: 4px;
  font-weight: bold;
`;

export const UserCompanyLocationContainer = styled.div`
  font-size: 0.9rem;
  margin-bottom: 4px;
`;
