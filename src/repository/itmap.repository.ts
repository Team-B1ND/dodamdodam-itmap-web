import customAxios from "../lib/axios/customAxios";
import { UserInfoResponse } from "../types/itmap/itmap.type";

class itMapRepository {
  public async getUserData(): Promise<UserInfoResponse> {
    const { data } = await customAxios.get<UserInfoResponse>(
      "/itmap/companies"
    );
    return data;
  }
}

export default new itMapRepository();
