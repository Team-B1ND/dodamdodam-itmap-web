import useUserInfoDelete from "hooks/user/useUserInfoDelete";
import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteModalState } from "store/deleteModal";
import * as UserInfoDeleteModalStyle from "./UserInfoDeleteModal.style";

const UserInfoDeleteModal = ({ userId }: { userId: string }) => {

  const dispatch = useDispatch();
  const { onChange, setUserDeleteInfo, userDeleteInfo, deleteUserInfo } = useUserInfoDelete();

  useEffect(() => {
    setUserDeleteInfo({ ...userDeleteInfo, userId: Number(userId) })
  }, [])


  return (
    <UserInfoDeleteModalStyle.UserInfoDeleteModalBackground>
      <UserInfoDeleteModalStyle.UserInfoDeleteModalContainer>
        <FiX className="modalCloseBtn" onClick={() => { dispatch(deleteModalState({ DeleteModal: false, UserId: "" })) }} />
        <UserInfoDeleteModalStyle.CurrentInput name="pw" type={"password"} onChange={onChange} placeholder="비밀번호" />

        <UserInfoDeleteModalStyle.CompanyRegistrationSubmitBtnContainer>
          <UserInfoDeleteModalStyle.CompanyRegistrationSubmitBtn onClick={() => {
            dispatch(deleteModalState({ DeleteModal: false, UserId: "" }));
            deleteUserInfo();
          }}>
            삭제하기
          </UserInfoDeleteModalStyle.CompanyRegistrationSubmitBtn>
        </UserInfoDeleteModalStyle.CompanyRegistrationSubmitBtnContainer>
      </UserInfoDeleteModalStyle.UserInfoDeleteModalContainer>

    </UserInfoDeleteModalStyle.UserInfoDeleteModalBackground>
  );
};

export default UserInfoDeleteModal;
