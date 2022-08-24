import customAxios from "lib/axios/customAxios";
import { userDataProps, userDataPropsResponse } from "types/user/userData.type";

class CompanyRepository {
  public async PostCompanyRegistration(
    userData: userDataProps
  ): Promise<userDataPropsResponse> {
    const { data } = await customAxios.post("/itmap/user", userData);
    return data;
  }

  public async GetCompanyUserData(userId: string) {
    const { data } = await customAxios.get(`/itmap/user/company/${userId}`);
    return data;
  }
}

export default new CompanyRepository();
