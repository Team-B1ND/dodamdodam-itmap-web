import * as S from "./ItMapNavShowCompanyInfoList.style";
import usePanTo from "hooks/usePanTo";
import useSelectCompany from "hooks/useSelectCompany";
import DEFAULTIMAGE from "assets/companyLogoImg/NoImges.svg";
import { useDispatch } from "react-redux";
import { logo } from "store/Logo";

interface ItMapShowUserInfoProps {
  companyAddress: string,
  symbolLogo: string,
  textLogo: string;
  id: number,
  companyName: string,
}

const ItMapShowUserInfo = ({
  companyAddress,
  id,
  symbolLogo,
  textLogo,
  companyName,
}: ItMapShowUserInfoProps) => {

  const { movePanTo } = usePanTo(companyAddress);
  const { getUserData } = useSelectCompany();

  return (
    <S.ShowCompanyInfoListContanier onClick={() => {
      movePanTo();
      getUserData(id, textLogo);
    }}>
      {
        symbolLogo
          ?
          <S.CompanyLogo src={symbolLogo} alt="logo" />
          :
          <img src={DEFAULTIMAGE} alt="defaultimg" />
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
