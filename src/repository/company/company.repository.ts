import customAxios from "lib/axios/customAxios";
import {
  CompanyDataProps,
  GetCompanyUserListResponse,
} from "types/user/userData.type";

class CompanyRepository {
  public async PostCompanyRegistration(
    userData: CompanyDataProps
  ): Promise<number> {
    const { status } = await customAxios.post("/itmap/user", userData);
    return status;
  }

  public async GetCompanyUserData(
    userId: string
  ): Promise<GetCompanyUserListResponse> {
    const { data } = await customAxios.get(`/itmap/user/company/${userId}`);
    return data;
  }
}

export default new CompanyRepository();
