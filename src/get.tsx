import Axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  Method
} from "axios";
/** GETメソッド */
export const requestGet = (path: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    Axios.request(requestConfig("GET", path, {}))
      .then((response: AxiosResponse) => {
        return resolve(response);
      })
      .catch((error: AxiosError) => {
        return reject(error);
      });
  });
};
