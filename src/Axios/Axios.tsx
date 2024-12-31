import axios from "axios";

const CustomAxios = (url: any) => {
  const Instance = axios.create({
    baseURL: url,
    timeout: 3000,
  });
  Instance.interceptors.request.use(
    (request) => {
      let ids = document.getElementById("loading");
      if (ids) {
        ids.classList.remove("shows");
        document.body.classList.add("body-blur");
      }
      return request;
    },
    (error) => {
      let ids = document.getElementById("loading");
      if (ids) {
        ids.classList.add("shows");
        document.body.classList.remove("body-blur");
      }
      return Promise.reject(error);
    }
  );
  Instance.interceptors.response.use(
    (response) => {
      let ids = document.getElementById("loading");
      if (ids) {
        ids.classList.add("shows");
        document.body.classList.remove("body-blur");
      }
      return response;
    },
    (error) => {
      let ids = document.getElementById("loading");
      if (ids) {
        ids.classList.add("shows");
        document.body.classList.remove("body-blur");
      }
      return Promise.reject(error);
    }
  );
  return Instance;
};
export default CustomAxios;
