import * as S from "./ItMapNavShowCompanyInfoList.style";
import usePanTo from "hooks/usePanTo";
import useSelectCompany from "hooks/useSelectCompany";
import ItMapNavShowUserInfo from "../ItMapNavShowUserInfo";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface ItMapShowUserInfoProps {
  companyAddress: string,
  id: string,
  companyName: string,
}
interface Props {
  isSubNavToggle: boolean;
  isNavToggle: boolean;
}

const ItMapShowUserInfo = ({
  companyAddress,
  id,
  companyName,
}: ItMapShowUserInfoProps) => {

  const { movePanTo } = usePanTo(companyAddress);
  const { getUserData } = useSelectCompany();

  return (
    <>
      <S.ShowCompanyInfoListContanier onClick={() => {
        movePanTo();
        getUserData(id);
      }}>
        <S.UserCompanyNameContainer>
          {companyName}
        </S.UserCompanyNameContainer>
        <S.UserCompanyLocationContainer>
          {companyAddress}
        </S.UserCompanyLocationContainer>
      </S.ShowCompanyInfoListContanier>
    </>
  );
};

export default ItMapShowUserInfo;
