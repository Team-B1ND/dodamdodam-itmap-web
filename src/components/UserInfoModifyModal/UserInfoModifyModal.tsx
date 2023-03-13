import * as UserInfoModifyModalStyle from "./UserInfoModifyModal.style";
import { FiX } from "react-icons/fi";
import { devPositionArray } from "constants/devPosition/devPositionData.constants";
import useUserInfoModify from "hooks/user/useUserInfoModify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { modifyModalState } from "store/modifyModal";

const UserInfoModifyModal = ({
  userId
}: { userId: string }) => {

  const { onChange, setUserModifyData, userModifyData, putModifyUserInfo } = useUserInfoModify();
  const dispatch = useDispatch();

  useEffect(() => {
    setUserModifyData({ ...userModifyData, userId: Number(userId) })
  }, []);

  return (
    <UserInfoModifyModalStyle.UserInfoModifyModalContainerBackground>
      <UserInfoModifyModalStyle.UserInfoModifyModalContainer>
        <FiX className="modalCloseBtn" onClick={() => { dispatch(modifyModalState({ ModifyModal: false, UserId: "" })) }} />
        <UserInfoModifyModalStyle.CurrentInput name="currentPw" type={"password"} onChange={onChange} placeholder="비밀번호" />
        <UserInfoModifyModalStyle.UserFieldSelect onChange={(e) => {
          const { value } = e.target;
          setUserModifyData({ ...userModifyData, field: value });
        }} defaultValue="개발 분야">
          {devPositionArray.map((item, idx) => { return <option key={idx} value={item}>{item}</option> })}
        </UserInfoModifyModalStyle.UserFieldSelect>

        <UserInfoModifyModalStyle.CurrentInput name="githubId" onChange={onChange} placeholder="Github Id" />
        <UserInfoModifyModalStyle.CurrentInput name="info" onChange={onChange} placeholder="소개 말 (ex: 해적왕이 될 사람입니다)" />
        <UserInfoModifyModalStyle.CompanyRegistrationSubmitBtnContainer>
          <UserInfoModifyModalStyle.CompanyRegistrationSubmitBtn onClick={() => {
            putModifyUserInfo();
            dispatch(modifyModalState({ ModifyModal: false, UserId: "" }));
          }}>
            수정하기
          </UserInfoModifyModalStyle.CompanyRegistrationSubmitBtn>
        </UserInfoModifyModalStyle.CompanyRegistrationSubmitBtnContainer>
      </UserInfoModifyModalStyle.UserInfoModifyModalContainer>
    </UserInfoModifyModalStyle.UserInfoModifyModalContainerBackground>
  );
};

export default UserInfoModifyModal;
