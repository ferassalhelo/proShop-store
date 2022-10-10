import axios from "axios";

const URL = "https://prohop-express.herokuapp.com/";

const AxiosSetting = axios.create({
  headers: { token: localStorage.getItem("token") || "" },
  baseURL: URL + "api",
});

// AxiosSetting.get("products").then((data) => {
//   console.log(data.data);
// });

export default class Axios {
  static get = (link: string) => AxiosSetting.get(link);
  static post = (link: string, data: object) => AxiosSetting.post(link, data);
  static put = (link: string, data: object) => AxiosSetting.put(link, data);
  static delet = (link: string) => AxiosSetting.delete(link);
}
