import customAxios from "../lib/axios/customAxios";
import { ItMapResponse } from "../types/itmap/itmap.type";

class itMapRepository {
  public async getItMapData(): Promise<ItMapResponse> {
    const { data } = await customAxios.get<ItMapResponse>("/itmap/companies");
    console.log(data);
    return data;
  }
}

export default new itMapRepository();
