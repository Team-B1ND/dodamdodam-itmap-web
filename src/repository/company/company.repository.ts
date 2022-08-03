import customAxios from "lib/axios/customAxios";

class CompanyRepository {
  public async PostCompanyRegistration() {
    const { data } = await customAxios.post("/itmap");

    return data;
  }
}

export default new CompanyRepository();
