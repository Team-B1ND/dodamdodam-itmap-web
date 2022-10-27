import { Response } from "types/util/response.type";

export interface CompanyDataProps {
  // 등록 할 때 서버에 보내는 데이터 타입
  companyPlaceId: string;
  name: string;
  info: string;
  field: string;
  generation: number;
  githubId: string;
  companyName: string;
  companyLatitude: number;
  companyLongitude: number;
  pw: string;
  companyAddress: string;
}

export interface CompanyInfoList {
  //회사 전체 조회
  address: string;
  name: string;
  id: number;
  latitude: number;
  longitude: number;
  symbolLogo: string;
  textLogo: string;
}

export interface CompanyInfoListResponse extends Response {
  data: CompanyInfoList[];
}

export interface UserInfoList {
  //회사 id 값으로 유저 리스트를 조회하는 API입니다.
  field: string;
  generation: string;
  githubId: string;
  id: string;
  image: string;
  info: string;
  name: string;
}

export interface GetCompanyUserListResponse extends Response {
  data: UserInfoList[];
}

export interface CompanyPosition extends CompanyInfoList {
  companyPlaceId: string;
  name: string;
  info: string;
  field: string;
  generation: string;
  githubId: string;
  companyName: string;
  companyAddress: string;
  pw: string;
}
