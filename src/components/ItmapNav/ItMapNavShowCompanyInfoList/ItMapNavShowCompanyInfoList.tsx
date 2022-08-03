import * as S from "./ItMapNavShowCompanyInfoList.style";
import useCoord from "hooks/useCoord";
import { useMap } from "react-kakao-maps-sdk";
import { useDispatch } from "react-redux";
import { isUserToggleAndUserIndex } from "store/reducers";
import usePanTo from "hooks/usePanTo";

interface ItMapShowUserInfoProps {
  companyLocation: string,
  idx: number,
  companyName: string,
}

const ItMapShowUserInfo = ({
  companyLocation,
  idx,
  companyName,
}: ItMapShowUserInfoProps) => {




  const { movePanTo } = usePanTo(companyLocation, idx);


  return (
    <S.ShowCompanyInfoListContanier onClick={() => {
      movePanTo();
    }}>
      <S.UserCompanyNameContainer>
        {companyName}
      </S.UserCompanyNameContainer>
      <S.UserCompanyLocationContainer>
        {companyLocation}
      </S.UserCompanyLocationContainer>
    </S.ShowCompanyInfoListContanier>
  );
};

export default ItMapShowUserInfo;
