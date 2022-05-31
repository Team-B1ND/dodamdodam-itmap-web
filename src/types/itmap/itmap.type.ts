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
  id: string;
  name: string;
  generation: string;
  profileImg: string;
  tagImg: string;
  explanation: string;
  companyName: string;
  companyLocation: string;
  position: object;
  devPosition: string;
  isOpen: boolean;
};

export type ItMapDataProps = {
  props: {
    ItMapData: ItMapData;
  };
};
