import * as S from "./ItmapNav.style";
import useData from "hooks/useData";
import ItMapShowUserInfo from "./ItMapNavShowUserInfo";
import CompanyInfoList from "./CompanyInfoList/index";
import { useSelector } from "react-redux";
import useSelectShowCompany from "hooks/useSelectShowCompany";
import { useEffect, useState } from "react";

const ItmapNav = () => {
  const { testData } = useData();
  const [isCompanyInUserInfo, setIsCompanyInUserInfo] = useState(false);
  const state = useSelector((state: any) => {
    return state;
  });

  useEffect(() => {
    setIsCompanyInUserInfo(state.isCompanyInUserToggle)
  }, [state]);

  return (
    <S.NavWrapper>
      <>
        <S.NavTitle>
          <S.NavTitleMent>여기 선배 IT을 지도?</S.NavTitleMent>
        </S.NavTitle>

        <S.NavContainer>
          {testData.map((item, idx) => {
            return (
              <ItMapShowUserInfo
                companyLocation={item.companyLocation}
                idx={idx}
                companyName={item.companyName}
              />
            )
          })}
        </S.NavContainer>
        {
          isCompanyInUserInfo &&
          <CompanyInfoList />
        }
      </>
    </S.NavWrapper >
  );
};



export default ItmapNav;
