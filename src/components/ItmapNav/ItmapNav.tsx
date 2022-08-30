import * as S from "./ItmapNav.style";
import useCompanyData from "hooks/useCompanyData";
import ItMapNavShowCompanyInfoList from "./ItMapNavShowCompanyInfoList";
import ItMapNavShowUserInfo from "./ItMapNavShowUserInfo/ItMapNavShowUserInfo";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { FiSearch, FiChevronRight, FiChevronLeft } from "react-icons/fi";

interface Props {
  isSubNavToggle: boolean;
  isNavToggle: boolean;
}

const ItmapNav = () => {
  const [isSubNavToggle, setIsSubNavToggle] = useState<boolean>(false);
  const [isNavToggle, setIsNavToggle] = useState<boolean>(true);
  const state = useSelector((state: Props) => state);
  const { companyData } = useCompanyData();


  useMemo(() => {
    setIsSubNavToggle(state.isSubNavToggle);
    setIsNavToggle(state.isNavToggle);
  }, [state]);

  return (
    <>
      <S.NavWrapper isNavToggle={isNavToggle}>
        <S.NavTitleContainer>
          <S.NavTitleMent>여기 선배 IT을 지도?</S.NavTitleMent>

          <S.NavCompanySearchContainer>
            <S.NavCompanySearchInput type="text" placeholder="회사 검색" />
            <FiSearch id="fiSearch" />
          </S.NavCompanySearchContainer>
        </S.NavTitleContainer>

        <S.NavContainer>
          {companyData && companyData.map((item, idx: number) => {
            return (
              <ItMapNavShowCompanyInfoList
                id={item.id}
                key={idx}
                companyName={item.name}
                companyAddress={item.address}
              />
            )
          })}
        </S.NavContainer>

        {
          isSubNavToggle &&
          <ItMapNavShowUserInfo />

        }

      </S.NavWrapper >

      <S.NavToggleBtnContainer isNavToggle={isNavToggle} isSubNavToggle={isSubNavToggle}>
        <S.NavToggleBtn onClick={() => {
          if (isNavToggle) {
            setIsSubNavToggle(false);
          }
          setIsNavToggle(!isNavToggle)
        }
        }>
          {isNavToggle ? <FiChevronLeft /> : <FiChevronRight />}
        </S.NavToggleBtn>
      </S.NavToggleBtnContainer>
    </>
  );
};



export default ItmapNav;
