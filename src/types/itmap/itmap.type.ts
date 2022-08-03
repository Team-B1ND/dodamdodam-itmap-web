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

export type ItMapData = {
  id: number;
  name: string;
  generation: string;
  profileImg: string;
  tagImg: string;
  explanation: string;
  companyName: string;
  companyLocation: string;
  devPosition: string;
  position: { lat: number; lng: number };
};
