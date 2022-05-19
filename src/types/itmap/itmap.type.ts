import { Response } from "../util/response.type";

export type ItMapLatLng = {
  lat: number;
  lng: number;
};

export type UserInItMap = {
  address: string;
  idx: number;
  name: string;
};

export type ItMapResponse = Response & {
  data: UserInItMap[];
};
