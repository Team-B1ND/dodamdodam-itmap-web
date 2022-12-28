import * as S from "./ItmapNav.style";
import useCompanyData from "hooks/useCompanyData";
import ItMapNavShowCompanyInfoList from "./ItMapNavShowCompanyInfoList";
import ItMapNavShowUserInfo from "./ItMapNavShowUserInfo/ItMapNavShowUserInfo";
import { useDispatch, useSelector } from "react-redux";
import { FiSearch, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { nav } from "store/nav";
import { RootState } from "store/reducers";
import DODAM_LOGO from "assets/dodam_logo/logo.svg";


const ItmapNav = () => {
  const { isNavToggle, isSubNavToggle } = useSelector((state: RootState) => state.nav);
  const { companyData } = useCompanyData();
  const dispatch = useDispatch()

  return (
    <>
      <S.NavWrapper isNavToggle={isNavToggle}>
        <S.NavTitleContainer>
          {/* <S.NavCompanySearchContainer>
            <S.NavCompanySearchInput type="text" placeholder="회사 검색" />
            <FiSearch id="fiSearch" />
          </S.NavCompanySearchContainer> */}
          <S.DodamLogo src={DODAM_LOGO} alt="도담로고" />
        </S.NavTitleContainer>

        <S.NavContainer>
          {companyData ? companyData.map((item, idx: number) => {
            return (
              <ItMapNavShowCompanyInfoList
                id={item.id}
                key={idx}
                textLogo={item.textLogo}
                symbolLogo={item.symbolLogo}
                companyName={item.name}
                companyAddress={item.address}
              />
            )
          }) : <div>회사가 등록되어 있지 않습니다</div>}
        </S.NavContainer>

        {
          isSubNavToggle &&
          <ItMapNavShowUserInfo />

        }

      </S.NavWrapper >

      <S.NavToggleBtnContainer isNavToggle={isNavToggle} isSubNavToggle={isSubNavToggle}>
        <S.NavToggleBtn onClick={() => {
          dispatch(nav({ isNavToggle: !isNavToggle, isSubNavToggle: false }))
        }
        }>
          {isNavToggle ? <FiChevronLeft /> : <FiChevronRight />}
        </S.NavToggleBtn>
      </S.NavToggleBtnContainer>
    </>
  );
};



export default ItmapNav;
