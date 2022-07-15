import * as S from "./CompanyRegistration.style";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";


const CompanyRegistration = () => {

  const [isCompanyRegistrationToggle, setIsCompanyRegistrationContanier] = useState<boolean>(false);

  return (
    <>

      {isCompanyRegistrationToggle &&
        <S.CompanyRegistrationModalBackground>
          <S.CompanyRegistrationModal>
            <AiFillCloseCircle id="modalCloseBtn" onClick={() => setIsCompanyRegistrationContanier(false)} />
            <S.NameInput type="text" placeholder="이름" />
            <S.CompanyAddressInput type="text" placeholder="회사 주소" />
          </S.CompanyRegistrationModal>
        </S.CompanyRegistrationModalBackground>
      }


      <S.CompanyRegistrationContanier>
        <S.CompanyRegistrationMent>
          지금 나를 등록하세요!
        </S.CompanyRegistrationMent>

        <S.CompanyRegistrationBtn onClick={() => {
          setIsCompanyRegistrationContanier(true);
        }}>
          <FiPlus />
        </S.CompanyRegistrationBtn>
      </S.CompanyRegistrationContanier>
    </>
  );
};

export default CompanyRegistration;
