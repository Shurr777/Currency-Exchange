import React, {useEffect} from 'react';
import {Page} from './CurrencyPageStyle'
import {connect} from "react-redux";
import {getCourses, getEUR, getUAH, getUSD} from "../../Store/Selectors/selectors";
import {setCourseThunk} from "../../Store/exchangeReducer";
import Header from "../Header/Header";
import BodyBlockContainer from "../Body/BodyBlockContainer";
import Footer from "../Footer/footer";


const CurrencyPageContainer = ({courses, countries, setCourseThunk, USD, EUR, UAH}) => {

    const euro = (USD / EUR).toFixed(4);
    const usd = (USD).toFixed(4);



    useEffect(() => {
        setCourseThunk();
    }, []);

//  Updating course
    const updateData = () => {
        setCourseThunk()
    };

    return (
        <Page>
            <Header updateData={updateData} USD={usd} EUR={euro}/>
            <BodyBlockContainer courses={courses}/>
            <Footer/>
        </Page>
    );
};

const mapStateToProps = (state) => {
    return {
        courses: getCourses(state),
        USD: getUSD(state),
        EUR: getEUR(state),
        UAH: getUAH(state)
    }
};

export default connect(mapStateToProps, {setCourseThunk})(CurrencyPageContainer);