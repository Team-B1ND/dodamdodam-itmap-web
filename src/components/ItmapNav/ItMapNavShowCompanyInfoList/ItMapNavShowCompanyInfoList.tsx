import * as S from "./ItMapNavShowCompanyInfoList.style";
import usePanTo from "hooks/usePanTo";
import useSelectCompany from "hooks/useSelectCompany";
import useLogo from "hooks/useLogo";
import basicImg from "assets/companyLogoImg/basics.png";

interface ItMapShowUserInfoProps {
  companyAddress: string,
  id: string,
  idx: number,
  companyName: string,
}

const ItMapShowUserInfo = ({
  companyAddress,
  id,
  idx,
  companyName,
}: ItMapShowUserInfoProps) => {

  const { movePanTo } = usePanTo(companyAddress);
  const { getUserData } = useSelectCompany();
  const { logoLists } = useLogo();

  return (
    <S.ShowCompanyInfoListContanier onClick={() => {
      movePanTo();
      getUserData(id);
    }}>

      <S.CompanyDefaultLogo src={logoLists[idx] || basicImg} />

      <div>
        <S.UserCompanyNameContainer>
          {companyName}
        </S.UserCompanyNameContainer>
        <S.UserCompanyLocationContainer>
          {companyAddress}
        </S.UserCompanyLocationContainer>
      </div>
    </S.ShowCompanyInfoListContanier>
  );
};

export default ItMapShowUserInfo;
