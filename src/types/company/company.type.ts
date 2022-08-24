export interface selectCompanyResponse extends Response {
  data: [
    {
      field: string;
      generation: number;
      githubId: string;
      id: number;
      image: string;
      info: string;
      name: string;
    }
  ];
  message: string;
  status: number;
}
