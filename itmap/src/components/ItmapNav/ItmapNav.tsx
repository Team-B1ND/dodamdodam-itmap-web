import * as S from "./ItmapNav.style";
import styled from "styled-components";

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

  @media screen and (max-width: 500px) {
    height: 60vh;
  }
`;

export default ItmapNav;
