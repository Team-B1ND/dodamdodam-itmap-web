import * as S from "./ItmapNav.style";
import styled from "styled-components";

//import {  } from "./ItmapNav.style.ts";
const ItmapNav = () => {
  return (
    <NavWrapper>
      <S.NavContainer>

      </S.NavContainer>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  width: 20%;
  height: 100%;
  background-color: #e6e6e6;

  @media screen and (max-width: 500px) {
    height: 60vh;
  }
`;

export default ItmapNav;
