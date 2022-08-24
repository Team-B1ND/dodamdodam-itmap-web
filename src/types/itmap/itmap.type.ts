import { Response } from "../util/response.type";

export type ItMapLatLng = {
  lat: number;
  lng: number;
};

export type UserInfo = {
  address: string;
  id: string;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
};

export interface UserInfoResponse extends Response {
  data: UserInfo[];
}

export type ItMapData = {
  companyPlaceId: string;
  name: string;
  info: string;
  field: string;
  generation: string;
  githubId: string;
  companyName: string;
  companyAddress: string;
  pw: string;
};
