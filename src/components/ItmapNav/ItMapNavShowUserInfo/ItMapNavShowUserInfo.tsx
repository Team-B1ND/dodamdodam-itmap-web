import * as S from "./ItMapNavShowUserInfo.style";
import { useDispatch, useSelector } from "react-redux";
import { FiX } from "react-icons/fi";
import { UserInfoList } from "types/user/userData.type";
import { nav } from "store/nav";
import { RootState } from "store/reducers";
import { AiFillGithub } from "react-icons/ai";

const ItMapNavShowUserInfo = () => {

  const dispatch = useDispatch();
  const { userData } = useSelector((state: RootState) => state.user);

  return (
    <S.ShowUserListContainer>

      <S.CloseBtnContainer onClick={() => dispatch(nav({ isNavToggle: true, isSubNavToggle: false }))} >
        <FiX />
      </S.CloseBtnContainer>

      <S.UserInfoListContainerWrap>
        {userData && userData.map((item: UserInfoList, idx: number) => {
          return (
            <S.UserInfoWrapper key={idx}>
              <S.UserInfoImgAndNameWrap>
                <S.ProfileImg src={item.image} alt="프로필 이미지" />
                <div>
                  <S.UserName>{item.name}</S.UserName>
                  <S.Generation>
                    {item.generation}기
                    <AiFillGithub className="githubIcon" onClick={() => window.open(`https://github.com/${item.githubId}`)} />
                  </S.Generation>
                </div>
              </S.UserInfoImgAndNameWrap>

              <S.Userfield>
                {item.field}
              </S.Userfield>

              <S.UserExplanation>
                {item.info}
              </S.UserExplanation>

            </S.UserInfoWrapper >
          )
        })
        }
      </S.UserInfoListContainerWrap>
    </S.ShowUserListContainer >
  );
};

export default ItMapNavShowUserInfo;
