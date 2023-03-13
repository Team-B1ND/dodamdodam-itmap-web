import { useMutation } from "react-query";
import userInfoModifyRepository from "repository/user/user.repository";
import { UserInfoDeleteProps } from "types/user/userData.type";

export const useDeleteUserInfo = () => {
  const useDeleteUserInfoMutation = useMutation(
    (userInfo: UserInfoDeleteProps) =>
      userInfoModifyRepository.DeleteUserInfo(userInfo)
  );
  return { useDeleteUserInfoMutation };
};
