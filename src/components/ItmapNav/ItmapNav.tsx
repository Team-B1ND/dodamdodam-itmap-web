import * as S from "./ItmapNav.style";
import useUserData from "hooks/useCompanyData";
import ItMapNavShowCompanyInfoList from "./ItMapNavShowCompanyInfoList";
import ItMapNavShowUserInfo from "./ItMapNavShowUserInfo/ItMapNavShowUserInfo";
import { useSelector } from "react-redux";
import { Suspense, useEffect, useState } from "react";
import { FiSearch, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import useMarker from "hooks/useMarker";
import useSelectCompany from "hooks/useSelectCompany";
import { selectCompanyResponse } from "types/company/company.type";
import { useDispatch } from "react-redux";
import { FiX } from "react-icons/fi";
import { isUserToggleAndUserIndex } from "store/reducers";
import useSelectShowCompany from "hooks/useSelectCompany";

interface Props {
  isSubNavToggle: boolean;
  isNavToggle: boolean;
}

interface userInfoProps {
  id: string;
  name: string;
  address: string;
}

const ItmapNav = () => {
  const [isSubNavToggle, setIsSubNavToggle] = useState<boolean>(false);
  const [isNavToggle, setIsNavToggle] = useState<boolean>(true);
  const state = useSelector((state: Props) => state);
  const { getCompanyData, companyData } = useUserData();
  const dispatch = useDispatch();


  useEffect(() => {
    setIsSubNavToggle(state.isSubNavToggle);
    setIsNavToggle(state.isNavToggle);
  }, [state]);

  useEffect(() => {
    getCompanyData();
  }, [])

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
          {/* <Suspense fallback={<p>사용자 정보 로딩중...</p>} > */}
          {companyData.map((item: any, idx: number) => {
            return (
              <ItMapNavShowCompanyInfoList
                id={item.id}
                key={idx}
                companyName={item.name}
                companyAddress={item.address}
              />
            )
          })}
          {/* </Suspense> */}
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
