import customAxios from "lib/axios/customAxios";
import { userDataProps, userDataPropsResponse } from "types/user/userData.type";

class CompanyRepository {
  public async PostCompanyRegistration(
    userData: userDataProps
  ): Promise<userDataPropsResponse> {
    const { data } = await customAxios.post("/itmap/user", userData);
    console.log(data);
    return data;
  }
}

export default new CompanyRepository();
