import customAxios from "lib/axios/customAxios";
import {
  UserInfoDeleteProps,
  UserInfoModifyProps,
  UserInfoModifyResponse,
  UserInfoDeletePropsResponse,
} from "types/user/userData.type";

class UserRepository {
  public async PutUserInfoModify(
    userModifyInfoData: UserInfoModifyProps
  ): Promise<UserInfoModifyResponse> {
    const { data } = await customAxios.put("/user", {
      data: userModifyInfoData,
    });
    console.log(data);
    return data;
  }

  public async DeleteUserInfo(
    userDeleteInfoData: UserInfoDeleteProps
  ): Promise<UserInfoDeletePropsResponse> {
    const { data } = await customAxios.delete("/user", {
      data: userDeleteInfoData,
    });

    return data;
  }
}

export default new UserRepository();
