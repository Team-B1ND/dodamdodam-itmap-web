import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 15%;

  @media screen and (max-width: 500px) {
    height: 60vh;
  }
`;

export const NavContainer = styled.div`
  width: 100%;
`;

export const ShowUserListContainer = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;
  background-color: #fff;
  text-align: left;
  flex-direction: column;
  &:hover {
    background-color: #f1f1f1;
  }
  &:focus {
    background-color: #d1d1d1;
  }
`;

export const UserCompanyNameContainer = styled.div`
  font-size: 1.05rem;
  margin-bottom: 4px;
  font-weight: bold;
  color: blue;
`;

export const UserCompanyLocationContainer = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
`;

// export const UserCompanyNameContainer = styled.section`
//   width: 100%;
// `;
