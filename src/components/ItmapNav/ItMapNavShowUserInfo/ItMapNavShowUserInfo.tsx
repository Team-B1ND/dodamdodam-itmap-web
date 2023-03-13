import * as NavShowUserInfoStyle from "./ItMapNavShowUserInfo.style";
import { useDispatch, useSelector } from "react-redux";
import { FiX } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { UserInfoList } from "types/user/userData.type";
import { nav } from "store/nav";
import { RootState } from "store/reducers";
import { modifyModalState } from "store/modifyModal";
import { useState } from "react";
import { deleteModalState } from "store/deleteModal";

const ItMapNavShowUserInfo = () => {

  const [isModifyid, setIsModifyid] = useState<string>("");
  const dispatch = useDispatch();
  const { user, logo } = useSelector((state: RootState) => state);

  return (
    <NavShowUserInfoStyle.ShowUserListContainer>
      {logo.textLogo ?
        <NavShowUserInfoStyle.TextLogoContainer>
          <NavShowUserInfoStyle.TextLogo src={logo.textLogo} alt="textLogo" />
        </NavShowUserInfoStyle.TextLogoContainer>
        :
        <NavShowUserInfoStyle.NullTextLogo />
      }
      <NavShowUserInfoStyle.CloseBtnContainer onClick={() => dispatch(nav({ isNavToggle: true, isSubNavToggle: false }))} >
        <FiX />
      </NavShowUserInfoStyle.CloseBtnContainer>

      <NavShowUserInfoStyle.UserInfoListContainerWrap>
        {user.userData && user.userData.map((item: UserInfoList, idx: number) => {

          return (
            <NavShowUserInfoStyle.UserInfoWrapper key={idx}>

              <NavShowUserInfoStyle.UserInfoImgAndNameWrap>
                <NavShowUserInfoStyle.ProfileImg src={item.image} alt="프로필" />
                <NavShowUserInfoStyle.DetailInfo>
                  <NavShowUserInfoStyle.UserName>
                    {item.name}
                  </NavShowUserInfoStyle.UserName>
                  <NavShowUserInfoStyle.Generation>
                    {item.generation}기
                  </NavShowUserInfoStyle.Generation>
                  <AiFillGithub className="githubIcon" onClick={() => window.open(`https://github.com/${item.githubId}`)} />
                </NavShowUserInfoStyle.DetailInfo>

                <NavShowUserInfoStyle.ModifyContainer>
                  <BsThreeDotsVertical onClick={() => {
                    setIsModifyid(item.id)
                  }} />
                </NavShowUserInfoStyle.ModifyContainer>

                {isModifyid === item.id &&
                  <NavShowUserInfoStyle.ModifyModal>
                    <NavShowUserInfoStyle.ModifyBtn
                      onClick={() => {
                        dispatch(modifyModalState({ ModifyModal: true, UserId: item.id }));
                        setIsModifyid("");
                      }} >
                      수정하기
                    </NavShowUserInfoStyle.ModifyBtn>
                    <NavShowUserInfoStyle.ModifyBtn onClick={() => {
                      dispatch(deleteModalState({ DeleteModal: true, UserId: item.id }));
                      setIsModifyid("");
                    }}>
                      삭제하기
                    </NavShowUserInfoStyle.ModifyBtn>
                  </NavShowUserInfoStyle.ModifyModal>
                }

              </NavShowUserInfoStyle.UserInfoImgAndNameWrap>
              <NavShowUserInfoStyle.Userfield>
                {item.field}
              </NavShowUserInfoStyle.Userfield>
              <NavShowUserInfoStyle.UserExplanation>
                {item.info}
              </NavShowUserInfoStyle.UserExplanation>
            </NavShowUserInfoStyle.UserInfoWrapper >
          )
        })
        }
      </NavShowUserInfoStyle.UserInfoListContainerWrap>

    </NavShowUserInfoStyle.ShowUserListContainer >
  );
};

export default ItMapNavShowUserInfo;
