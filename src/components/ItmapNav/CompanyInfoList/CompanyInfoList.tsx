import * as S from "./CompanyInfoList.style";
import { useDispatch } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
import { isCompanyInUserToggle } from "home/reducers";


interface CompanyInfoListProps {
  userName: string,
  devPosition: string,
  explanation: string,
}

const CompanyInfoList = ({
  userName,
  devPosition,
  explanation,
}: CompanyInfoListProps) => {
  const dispatch = useDispatch();



  return (
    <>
      {/* //전역 상태관리가 필요함 */}
      {/* // 다른 컴포넌트에서 isToggle false로 바꿨지만 false를 이 컴포넌트에서 바뀐지 알아차리지 못해서 컴포넌트로 만들지 못함 */}
      <S.CompanyInfoListWrapper>

        <S.CloseBtnContainer>
          <S.CloseBtn onClick={() => dispatch(isCompanyInUserToggle(false))}><AiFillCloseCircle /></S.CloseBtn>
        </S.CloseBtnContainer>

        <S.CompanyInfoListContainerWrapper>
          <S.CompanyInfoListContainer>

            {/* 자신의 이름 */}
            <S.UserNameContainer>
              <span>
                {userName}
              </span>
            </S.UserNameContainer>

            {/* 자신의 개발 분야 */}
            <S.UserDevPosition>
              <span>
                {/* {devPosition} */}
              </span>
            </S.UserDevPosition>
          </S.CompanyInfoListContainer>

          {/* 간단한 소개 */}
          <S.UserExplanation>
            {/* <span>{selectUserData?.explanation}</span> */}

          </S.UserExplanation>
        </S.CompanyInfoListContainerWrapper >
      </S.CompanyInfoListWrapper >
    </>
  );
};

export default CompanyInfoList;
