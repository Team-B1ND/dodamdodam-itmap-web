import styled from "styled-components";

export const ShowCompanyInfoListContanier = styled.button`
  width: 90%;
  height: 150px;
  margin-top: 25px;
  padding: 15px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  text-align: left;
  transition: 0.3s;
  box-shadow: 0px 0px 20px 5px rgba(0 0 0 / 6%);
  cursor: pointer;
  font-size: medium;
  &:hover {
    background-color: #f1f1f1;
  }
  &:focus {
    background-color: #d1d1d1;
  }
`;

export const UserCompanyNameContainer = styled.div`
  font-size: 1rem;
  margin-bottom: 4px;
  font-weight: bold;
`;

export const UserCompanyLocationContainer = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
`;
