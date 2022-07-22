import React, {useEffect} from 'react';
import {Page} from './CurrencyPageStyle'
import {connect} from "react-redux";
import {getCountries, getCourses, getEUR, getUAH, getUSD} from "../../Store/Selectors/selectors";
import {setCountriesThunk, setCourseThunk} from "../../Store/exchangeReducer";
import Header from "../Header/Header";
import BodyBlock from "../Body/BodyBlock";


const CurrencyPageContainer = ({courses, countries, setCourseThunk, USD, EUR, UAH}) => {

    let euro = USD / EUR;

    useEffect(() => {
        setCourseThunk();
    }, []);

    const updateData = () => {
        setCourseThunk()
    };

    return (
        <Page>
            <Header updateData={updateData} USD={USD} EUR={euro} UAH={UAH}/>
            <BodyBlock courses={courses}/>
        </Page>
    );
};

const mapStateToProps = (state) => {
    return {
        courses: getCourses(state),
        /*countries: getCountries(state),*/
        USD: getUSD(state),
        EUR: getEUR(state),
        UAH: getUAH(state)
    }
};

export default connect(mapStateToProps, {setCourseThunk})(CurrencyPageContainer);