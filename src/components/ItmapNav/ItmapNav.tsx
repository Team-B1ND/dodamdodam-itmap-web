import * as S from "./ItmapNav.style";
import useData from "hooks/useData";
import ItMapNavShowCompanyInfoList from "./ItMapNavShowCompanyInfoList";
import ItMapNavShowUserInfo from "./ItMapNavShowUserInfo/ItMapNavShowUserInfo";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FiSearch, FiChevronRight, FiChevronLeft } from "react-icons/fi";


interface Props {
  isCompanyInUserToggle: boolean
}

const ItmapNav = () => {
  const { testData } = useData();
  const [isCompanyInUserInfo, setIsCompanyInUserInfo] = useState(false);
  const [isNavToggle, setIsNavToggle] = useState<boolean>(true);
  const state = useSelector((state: Props) => state);

  useEffect(() => {
    setIsCompanyInUserInfo(state.isCompanyInUserToggle);
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
          {testData.map((item, idx) => {
            return (
              <ItMapNavShowCompanyInfoList
                idx={idx}
                key={item.id}
                companyName={item.companyName}
                companyLocation={item.companyLocation}
              />
            )
          })}
        </S.NavContainer>
        {
          isCompanyInUserInfo &&
          <ItMapNavShowUserInfo
          />
        }
      </S.NavWrapper >

      <S.NavToggleBtnContainer isNavToggle={isNavToggle} isCompanyInUserInfo={isCompanyInUserInfo}>
        <S.NavToggleBtn onClick={() =>
          setIsNavToggle(!isNavToggle)
        }>
          {isNavToggle ? <FiChevronLeft /> : <FiChevronRight />}
        </S.NavToggleBtn>
      </S.NavToggleBtnContainer>
    </>
  );
};



export default ItmapNav;
