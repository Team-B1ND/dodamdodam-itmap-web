import * as S from "./CompanyRegistration.style";
import { FiPlus } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import DaumPostcode from "react-daum-postcode";
import useCompanyRegistration from "hooks/useCompanyRegistration";




const CompanyRegistration = () => {


  const {
    isCompanyRegistrationToggleOpen,
    setIsCompanyRegistrationToggleOpen,
    isDaumPostOpen,
    setIsDaumPostOpen,
    daumSearchResultValue,
    setDaumSearchResultValue,
    companyRegistrationData,
    setCompanyRegistrationData,
    onChange
  } = useCompanyRegistration();


  return (
    <>
      {isCompanyRegistrationToggleOpen &&
        <S.CompanyRegistrationModalBackground>
          <S.CompanyRegistrationModal>
            <FiX id="modalCloseBtn" onClick={() => {
              setIsCompanyRegistrationToggleOpen(false);
              setIsDaumPostOpen(false);

            }} />
            <S.NameInput type="text" name="userName" placeholder="사용자 이름" onChange={onChange} />

            <S.UserIntroduceMent type="text" name="IntroduceMent" placeholder="소개 말 (ex: 항상 노력하는 개발자입니다)" onChange={onChange} />

            <S.CompanyNameInput type="text" placeholder="회사 이름" />

            <S.DevPosition type="text" name="devPosition" placeholder="자신의 분야" onChange={onChange} />


            <S.CompanyAddressContainer>
              {/* 검색 결과가 div의 크기를 넘었을 때 처리해야함 */}
              <S.CompanyAddressBox placeholder="회사 주소" >
                {daumSearchResultValue ? daumSearchResultValue : "현재 검색 결과가 없습니다"}
              </S.CompanyAddressBox>

              <S.CompanyAddressSearch onClick={() => {
                setIsDaumPostOpen((prev) => !prev);
                setDaumSearchResultValue("");
              }} >
                {isDaumPostOpen ? "검색 창 닫기" : "주소 찾기"}
              </S.CompanyAddressSearch>

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
          setDaumSearchResultValue("");
        }}>
          <FiPlus />
        </S.CompanyRegistrationBtn>
      </S.CompanyRegistrationContanier>
    </>
  );
};

export default CompanyRegistration;
