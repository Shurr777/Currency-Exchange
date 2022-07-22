export const getCountries = (state) =>{
    return state.exchangeData.countries
};
export const getCourses = (state) =>{
    return state.exchangeData.courses
};
export const getEUR = (state) =>{
    return state.exchangeData.EUR[0][1]
};
export const getUSD = (state) =>{
    return state.exchangeData.USD[0][1]
};
export const getUAH = (state) =>{
    return state.exchangeData.UAH[0][1]
};