import styled from "styled-components";

export const ShowCompanyInfoListContanier = styled.button`
  width: 90%;
  height: 20%;
  border: none;
  margin-bottom: 25px;
  padding: 15px;
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

export const UserCompanyNameContainer = styled.div`
  font-size: 1rem;
  margin-bottom: 4px;
  font-weight: bold;
`;

export const UserCompanyLocationContainer = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
`;
