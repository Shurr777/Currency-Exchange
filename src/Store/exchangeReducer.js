import {CurrencyExchangeAPI} from '../api/api'

const SET_CURRENT_DATA = 'SET_CURRENT_DATA';

const initState = {
    countries: {},
    courses: {UAH: 0},
    UAH: ['UAH', 0],
    USD: ['USD', 0],
    EUR: ['EUR', 0]
}

export const exchangeReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CURRENT_DATA:
            /*console.log('reducerData', action.payload.courses);*/

            let eur = Object.entries(action.payload.courses).filter((el) => el[0] === 'EUR');
            let uah = Object.entries(action.payload.courses).filter((el) => el[0] === 'UAH');
            let usd = Object.entries(action.payload.courses).filter((el) => el[0] === 'USD');

            /*console.log('eur',eur);
            console.log('usd',usd);
            console.log('uah',uah);*/
            return {
                ...state,
                courses: {...action.payload.courses},
                countries: {...action.payload.courses},
                EUR: [...eur],
                USD: [...uah],
                UAH: [...usd]
            };
        default:
            return state;
    }
};

const setCoursesData = (courses) => ({type: SET_CURRENT_DATA, payload: {courses}});
const setCountriesData = (countries) => ({type: SET_CURRENT_DATA, payload: {countries}});


export const setCourseThunk = () => async (dispatch) => {
    const course = await CurrencyExchangeAPI.getCourse()
    /*console.log('course', course.rates)*/
    dispatch(setCoursesData(course.rates))
};

/*export const setCountriesThunk = () => async (dispatch) => {
    const countries = await CurrencyExchangeAPI.getCountries();
    dispatch(setCountriesData(countries))
};*/
