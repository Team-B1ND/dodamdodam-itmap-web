import * as S from "./ItMapNavShowCompanyInfoList.style";
import usePanTo from "hooks/usePanTo";
import useSelectCompany from "hooks/useSelectCompany";
import useLogo from "hooks/useLogo";

interface ItMapShowUserInfoProps {
  companyAddress: string,
  id: number,
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

      {/* <S.CompanyDefaultLogo src={ || basicImg} /> */}

      {
        logoLists[idx]
          ?
          <S.CompanyLogo src={logoLists[idx]} alt="logo" />
          :
          //default 로고임
          <S.TextLogo>
            {companyName.split("").splice(0, 1)}
          </S.TextLogo>
      }

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
