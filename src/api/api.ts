import axios from "axios";

const URL = "https://prohop-express.herokuapp.com/";

const AxiosSetting = axios.create({
  headers: {
    Authorization: `Bearer ${
      localStorage.getItem("authData")
        ? JSON.parse(localStorage.getItem("authData") || "").token
        : ""
    }`,
  },
  baseURL: URL + "api",
});

export default class Axios {
  static get = (link: string) => AxiosSetting.get(link);
  static post = (link: string, data: object) => AxiosSetting.post(link, data);
  static put = (link: string, data: object) => AxiosSetting.put(link, data);
  static delet = (link: string, params?: any) =>
    AxiosSetting.delete(link, params);
}
