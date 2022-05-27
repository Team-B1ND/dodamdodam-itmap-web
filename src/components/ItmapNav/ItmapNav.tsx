import * as S from "./ItmapNav.style";
import styled from "styled-components";
import useData from "../../hooks/useData";

const ItmapNav = () => {

  const { testData } = useData();
  return (
    <NavWrapper>
      <S.NavContainer>
        {/* {testData.map((item) => {
          return (
            <>
              {item.companyName}
              <br />
            </>
          );
        }
        )} */}
      </S.NavContainer>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  width: 15%;

  @media screen and (max-width: 500px) {
    height: 60vh;
  }
`;

export default ItmapNav;
