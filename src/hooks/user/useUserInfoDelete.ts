import React, { useState } from "react";
import { UserInfoDeleteProps } from "types/user/userData.type";
import { toast } from "react-toastify";
import { useDeleteUserInfo } from "query/user/delete.query";

const useUserInfoDelete = () => {
  const [userDeleteInfo, setUserDeleteInfo] = useState<UserInfoDeleteProps>({
    pw: "",
    userId: 0,
  });

  const { useDeleteUserInfoMutation } = useDeleteUserInfo();

  /** 사용자의 정보를 저장하는 함수에요! */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDeleteInfo({ ...userDeleteInfo, [name]: value });
  };

  const deleteUserInfo = () => {
    useDeleteUserInfoMutation.mutateAsync(userDeleteInfo, {
      onSuccess: () => {
        toast.success("유저를 삭제 하였습니다.");
      },
      onError: () => {
        toast.error("오류가 났습니다 다시 시도 해 주세요.");
      },
    });
  };

  return { deleteUserInfo, onChange, setUserDeleteInfo, userDeleteInfo };
};

export default useUserInfoDelete;
