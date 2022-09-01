import * as S from "./CompanyRegistration.style";
import { FiPlus } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import useCompanyRegistration from "hooks/companyRegistration/useCompanyRegistration";
import { useState } from "react";
import useCompanyInfo from "hooks/companyRegistration/useConpanyInfo";

const CompanyRegistration = () => {


  const {
    isCompanyRegistrationToggleOpen,
    setIsCompanyRegistrationToggleOpen,
    companyRegistrationData,
    setCompanyRegistrationData,
    isCompanySerach,
    setIsCompanySerach,
    devPositionArray, //나중에 map 돌리셈
    onChange,
    postUserData,
  } = useCompanyRegistration();

  const { getCompanyInfo, companyInfo } = useCompanyInfo();
  const [companySearchValue, setCompanySearchValue] = useState<string>("");


  return (
    <>
      <S.CompanyRegistrationContanier>
        <S.CompanyRegistrationMent>
          지금 나를 등록하세요!
        </S.CompanyRegistrationMent>

        <S.CompanyRegistrationBtn onClick={() => {
          setIsCompanyRegistrationToggleOpen(true);
          setIsCompanySerach(false);
        }}>
          <FiPlus />
        </S.CompanyRegistrationBtn>
      </S.CompanyRegistrationContanier>

      {isCompanyRegistrationToggleOpen &&

        <S.CompanyRegistrationModalBackground>
          <S.CompanyRegistrationModal>
            <FiX id="modalCloseBtn" onClick={() => {
              setIsCompanyRegistrationToggleOpen(false);
            }} />

            <S.UserInfoInput type="text" name="name" placeholder="사용자 이름" onChange={onChange} />
            <S.UserInfoInput type="text" name="pw" placeholder="비밀번호 (정보 수정할 때 필요해요!)" onChange={onChange} />
            <S.UserInfoInput type="text" name="githubId" placeholder="Github Id" onChange={onChange} />
            <S.UserInfoInput type="text" name="info" placeholder="소개 말 (ex: 항상 노력하는 개발자입니다)" onChange={onChange} />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <S.UserInfoGeneration type="number" name="generation" placeholder="기수 (숫자만 입력해 주세요)" onChange={onChange} />
              <S.UserInfoSelect defaultValue="개발 분야" name="field" onChange={(e) => {
                setCompanyRegistrationData({ ...companyRegistrationData, field: e.target.value });
              }}>
                {devPositionArray.map((item, idx) => { return <option key={idx} value={item}>{item}</option> })}
              </S.UserInfoSelect>
            </div>

            <S.CompanyAddressContainer>
              <S.CompanyAddressBox placeholder="회사명" onChange={(e) => setCompanySearchValue(e.target.value)} />

              <S.CompanyAddressSearch
                onClick={() => {
                  if (!companySearchValue) {
                    alert("회사 이름 입력해 시빠려나");
                    return;
                  }
                  getCompanyInfo(companySearchValue);
                  setIsCompanySerach(true);
                }}>
                회사 검색
              </S.CompanyAddressSearch>
            </S.CompanyAddressContainer>
            {(isCompanySerach && companyInfo) &&
              <S.CompanySelectContainer>
                {
                  companyInfo.map((item: any) => {
                    return (
                      <S.CompanySelect onClick={() => {
                        setCompanyRegistrationData(
                          {
                            ...companyRegistrationData,
                            companyPlaceId: item.id,
                            companyName: item.place_name,
                            companyAddress: item.road_address_name
                          }
                        );
                        setIsCompanySerach(false);
                      }} key={item.id}>
                        <S.CompanyAddressTitle>
                          <S.CompanyPlaceName>{item.place_name}</S.CompanyPlaceName>
                        </S.CompanyAddressTitle>

                        <S.CompanyAddressTitle>
                          <S.CompanyAddress>지번</S.CompanyAddress>
                          <S.CompanyAddressName>{item.road_address_name}</S.CompanyAddressName>
                        </S.CompanyAddressTitle>

                        <S.CompanyAddressTitle>
                          <S.CompanyAddress>도로명</S.CompanyAddress>
                          <S.CompanyAddressName>{item.address_name}</S.CompanyAddressName>
                        </S.CompanyAddressTitle>
                        <S.CompanyInFoPageMove onClick={() => window.open(item.place_url)}>더 보기</S.CompanyInFoPageMove>
                      </S.CompanySelect>
                    )
                  })
                }
              </S.CompanySelectContainer>
            }

            <S.CompanyRegistrationSubmitBtnContainer>
              <S.CompanyRegistrationSubmitBtn onClick={() => {
                setIsCompanyRegistrationToggleOpen(false);
                postUserData();
              }}>
                등록하기
              </S.CompanyRegistrationSubmitBtn>
            </S.CompanyRegistrationSubmitBtnContainer>
          </S.CompanyRegistrationModal>
        </S.CompanyRegistrationModalBackground >
      }

    </>
  );
};

export default CompanyRegistration;
