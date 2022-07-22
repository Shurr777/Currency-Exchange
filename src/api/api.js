import * as axios from "axios";

const apiInstance = axios.create({
    withCredentials: false,
    baseURL: "https://cdn.cur.su/api/nbu.json"
});

export const CurrencyExchangeAPI = {
   /* getCountries() {
        return apiInstance.get().then(response => response.data)
    },*/
    getCourse() {
        return apiInstance.get().then(response => response.data)
    },
};