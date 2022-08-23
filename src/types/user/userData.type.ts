export interface userDataProps {
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

export interface userDataPropsResponse extends Response {
  data: {
    field: string;
    generation: string;
    githubId: string;
    id: string;
    image: string;
    info: string;
    name: string;
  };
  message: string;
  status: number;
}
