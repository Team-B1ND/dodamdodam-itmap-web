import axios from "axios";
// import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "constants/token.constants";
// import token from "../token";
// import { requestHandler } from "./requestHandler";
import config from "../../config/config.json";
// import { getBearer } from "util/getBearer";

const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// customAxios.interceptors.request.use(requestHandler);

export default customAxios;
