import customAxios from "../lib/axios/customAxios";
import { CompanyInfoListResponse } from "../types/user/userData.type";

class itMapRepository {
  public async GetCompanyData(): Promise<CompanyInfoListResponse> {
    const { data } = await customAxios.get("/itmap/companies");
    return data;
  }
}

export default new itMapRepository();
