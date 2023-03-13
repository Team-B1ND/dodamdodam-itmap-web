import customAxios from "lib/axios/customAxios";
import {
  CompanyDataProps,
  GetCompanyUserListResponse,
} from "types/user/userData.type";

class CompanyRepository {
  public async PostCompanyRegistration(
    userData: CompanyDataProps
  ): Promise<Response> {
    const { data } = await customAxios.post("/user", userData);
    return data;
  }

  public async GetCompanyUserData(
    userId: number
  ): Promise<GetCompanyUserListResponse> {
    const { data } = await customAxios.get(`/user/company/${userId}`);
    return data;
  }
}

export default new CompanyRepository();
