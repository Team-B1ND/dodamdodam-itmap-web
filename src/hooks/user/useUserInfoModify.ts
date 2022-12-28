import React, { useState } from "react";
import { UserInfoModifyProps } from "types/user/userData.type";
import { toast } from "react-toastify";
import userInfoModifyRepository from "repository/user/user.repository";

const useUserInfoModify = () => {
  const [userModifyData, setUserModifyData] = useState<UserInfoModifyProps>({
    currentPw: "",
    field: "",
    githubId: "",
    info: "",
    userId: 0,
  });

  /** 사용자의 정보를 저장하는 함수에요! */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserModifyData({ ...userModifyData, [name]: value });
  };

  const putModifyUserInfo = async () => {
    try {
      const { status } = await userInfoModifyRepository.PutUserInfoModify(
        userModifyData
      );

      if (status === 200) {
        toast.success("정보를 수정 하였습니다.");
      }
    } catch (error) {
      toast.error("오류가 났습니다 다시 시도 해 주세요.");
    }
  };
  return { onChange, setUserModifyData, userModifyData, putModifyUserInfo };
};

export default useUserInfoModify;
