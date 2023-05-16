import axios from 'axios';
const baseUrl =
  'https://services.odata.org/TripPinRESTierService/(S(hespbvdrrmhquk5vqlzcpbro))/';

export const setDefaultAxios = (): void => {
  axios.defaults.baseURL = baseUrl;

  axios.defaults.headers.Accept = 'application/json';
  axios.defaults.headers['Content-Type'] = 'application/json';

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        console.log(error);
      }
      return Promise.reject(error);
    }
  );
};
