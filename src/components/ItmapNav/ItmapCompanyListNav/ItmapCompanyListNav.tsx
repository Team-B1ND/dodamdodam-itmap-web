import * as S from "./ItmapCompanyListNav.style";
import useData from "hooks/useData";
import useSelectShowCompany from "hooks/useSelectShowCompany";
// import ItmapCompanyInfoNav from "../ItmapCompanyInfoNav";
import { useEffect, useState } from "react";

const ItmapNav = () => {

  const { testData } = useData();
  const { getUserData, selectUserData, setSelectUserData, isToggle, setIsToggle } = useSelectShowCompany();


  return (
    <S.NavWrapper>
      <S.NavContainer>
        {testData.map((item, idx) => {
          return (
            <S.ShowUserListContainer key={idx} onClick={() => {
              getUserData(idx);
            }}>
              <S.UserCompanyNameContainer>
                {item.companyName}
              </S.UserCompanyNameContainer>
              <S.UserCompanyLocationContainer>
                {item.companyLocation}
              </S.UserCompanyLocationContainer>
            </S.ShowUserListContainer>
          );
        }
        )}
      </S.NavContainer>
      {selectUserData && //전역 상태관리가 필요함
        // 다른 컴포넌트에서 isToggle false로 바꿨지만 false를 이 컴포넌트에서 바뀐지 알아차리지 못해서 컴포넌트로 만들지 못함
        <S.CompanyInfoListWrapper>

          <S.CloseBtnContainer>
            <S.CloseBtn onClick={() => setSelectUserData(null)}>X</S.CloseBtn>
            {/* 나중에 이미지 박아야함 */}
          </S.CloseBtnContainer>

          <S.CompanyInfoListContainerWrapper>
            {/* CompanyInfoListContainerWrapper 이름과 분야를 감쌀 div */}
            <S.CompanyInfoListContainer>
              <S.UserNameContainer>
                <span>
                  {selectUserData?.name}
                </span>
              </S.UserNameContainer>
              <S.UserDevPosition>
                <span>
                  {selectUserData?.devPosition}
                </span>
              </S.UserDevPosition>
            </S.CompanyInfoListContainer>

            <S.Div>
              <span>{selectUserData?.explanation}</span>
            </S.Div>


          </S.CompanyInfoListContainerWrapper >
        </S.CompanyInfoListWrapper >
        // <ItmapCompanyInfoNav props={selectUserData} />
      }

    </S.NavWrapper >
  );
};



export default ItmapNav;
