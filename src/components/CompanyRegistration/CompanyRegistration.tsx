import * as S from "./CompanyRegistration.style";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import DaumPostcode from "react-daum-postcode";
import { UserNameContainer } from "components/ItmapNav/ItMapNavShowUserInfo/ItMapNavShowUserInfo.style";

interface CompanyRegistrationDataType {
  userName: string;
  IntroduceMent: string;
  devPosition: string;
}


const CompanyRegistration = () => {

  const [isCompanyRegistrationToggleOpen, setIsCompanyRegistrationToggleOpen] = useState<boolean>(false);
  const [isDaumPostOpen, setIsDaumPostOpen] = useState<boolean>(false);
  const [daumSearchResultValue, setDaumSearchResultValue] = useState<string>("");
  const [companyRegistrationData, setCompanyRegistrationData] = useState<CompanyRegistrationDataType>({
    userName: "",
    IntroduceMent: "",
    devPosition: "",
  })



  return (
    <>
      {isCompanyRegistrationToggleOpen &&
        <S.CompanyRegistrationModalBackground>
          <S.CompanyRegistrationModal>
            <FiX id="modalCloseBtn" onClick={() => {
              setIsCompanyRegistrationToggleOpen(false);
              setIsDaumPostOpen(false);
            }} />
            <S.NameInput type="text" placeholder="사용자 이름" onChange={(e) => setCompanyRegistrationData({ ...companyRegistrationData, userName: e.target.value })} />

            <S.UserIntroduceMent type="text" placeholder="소개 말 (ex: 항상 노력하는 개발자입니다)" onChange={(e) => setCompanyRegistrationData({ ...companyRegistrationData, IntroduceMent: e.target.value })} />

            <S.CompanyNameInput type="text" placeholder="회사 이름" />

            <S.DevPosition type="text" placeholder="자신의 분야" onChange={(e) => setCompanyRegistrationData({ ...companyRegistrationData, devPosition: e.target.value })} />


            <S.CompanyAddressContainer>
              {/* 검색 결과가 div의 크기를 넘었을 때 처리해야함 */}
              <S.CompanyAddressBox placeholder="회사 주소" >{daumSearchResultValue ? daumSearchResultValue : "현재 검색 결과가 없습니다"}</S.CompanyAddressBox>
              <S.CompanyAddressSearch onClick={() => setIsDaumPostOpen(!isDaumPostOpen)} >{isDaumPostOpen ? "검색 창 닫기" : "주소 찾기"}</S.CompanyAddressSearch>
            </S.CompanyAddressContainer>
            <S.DaumPostSerchContanier>

              {
                isDaumPostOpen &&
                <DaumPostcode
                  onComplete={(value) => {
                    setDaumSearchResultValue(value.address);
                    setIsDaumPostOpen(false);
                  }}
                  autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                />
              }
            </S.DaumPostSerchContanier>

            <S.CompanyRegistrationSubmitBtnContainer>

              <S.CompanyRegistrationSubmitBtn>
                등록하기
              </S.CompanyRegistrationSubmitBtn>
            </S.CompanyRegistrationSubmitBtnContainer>

          </S.CompanyRegistrationModal>
        </S.CompanyRegistrationModalBackground>
      }


      <S.CompanyRegistrationContanier>
        <S.CompanyRegistrationMent>
          지금 나를 등록하세요!
        </S.CompanyRegistrationMent>

        <S.CompanyRegistrationBtn onClick={() => {
          setIsCompanyRegistrationToggleOpen(true);
        }}>
          <FiPlus />
        </S.CompanyRegistrationBtn>
      </S.CompanyRegistrationContanier>
    </>
  );
};

export default CompanyRegistration;
