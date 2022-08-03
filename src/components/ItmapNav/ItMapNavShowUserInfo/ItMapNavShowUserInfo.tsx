import * as S from "./ItMapNavShowUserInfo.style";
import { useDispatch, useSelector } from "react-redux";
import { FiX } from "react-icons/fi";
import { isUserToggleAndUserIndex } from "store/reducers";
import useSelectShowCompany from "hooks/useSelectShowCompany";
import { useEffect, useState } from "react";
import { ItMapData } from "types/itmap/itmap.type";


interface Props {
  userDataIndex: number;
}

const ItMapNavShowUserInfo = () => {

  const dispatch = useDispatch();
  const { getUserData } = useSelectShowCompany();
  const [userData, setUserData] = useState<ItMapData>();

  const state = useSelector((s: Props) => s.userDataIndex);

  useEffect(() => {
    setUserData(getUserData(state));
    console.log(state);

  }, [state])

  return (
    <S.ShowUserListContainer>

      <S.CloseBtnContainer onClick={() => dispatch(isUserToggleAndUserIndex(false, 0))} >
        <FiX />
      </S.CloseBtnContainer>

      <S.CompanyInfoListContainerWrapper>
        <S.CompanyInfoListContainer>

          {/* 자신의 이름 */}
          <S.UserNameContainer>
            {userData?.name}
          </S.UserNameContainer>

          {/* 자신의 개발 분야 */}
          <S.UserDevPosition>
            {userData?.devPosition}
          </S.UserDevPosition>
        </S.CompanyInfoListContainer>

        <S.CompanyInfoListContainer>

          {/* 간단한 소개 */}
          <S.UserExplanation>
            {userData?.explanation}
          </S.UserExplanation>

          <S.Generation>
            {userData?.generation}기
          </S.Generation>
        </S.CompanyInfoListContainer>

      </S.CompanyInfoListContainerWrapper >
    </S.ShowUserListContainer >
  );
};

export default ItMapNavShowUserInfo;
