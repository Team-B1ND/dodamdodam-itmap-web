import * as S from "./ItmapCompanyInfoNav.style";
import { ItMapData } from "types/itmap/itmap.type";

import useSelectShowCompany from "hooks/useSelectShowCompany";

const ItmapCompanyInfoNav = ({ props }: any) => {

  const { selectUserData, setSelectUserData } = useSelectShowCompany();

  console.log(props);


  return (
    <S.CompanyInfoListWrapper>
      {/* <Button>close</Button> */}

      <S.CloseBtnContainer>
        <S.CloseBtn >X</S.CloseBtn>
        {/* 나중에 이미지 박아야함 */}
      </S.CloseBtnContainer>


      <S.CompanyInfoListContainerWrapper>
        {/* CompanyInfoListContainerWrapper 이름과 분야를 감쌀 div */}
        <S.CompanyInfoListContainer>
          <S.UserNameContainer>
            <span>
              {props.name}
            </span>
          </S.UserNameContainer>
          <S.UserDevPosition>
            <span>
              {props.devPosition}
            </span>
          </S.UserDevPosition>
        </S.CompanyInfoListContainer>

      </S.CompanyInfoListContainerWrapper>
    </S.CompanyInfoListWrapper>

  );
};

export default ItmapCompanyInfoNav;
