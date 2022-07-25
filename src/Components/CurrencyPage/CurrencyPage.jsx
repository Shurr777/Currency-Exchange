import React, {useEffect} from 'react';
import {Page} from './CurrencyPageStyle'
import {connect} from "react-redux";
import {getCourses, getEUR, getUAH, getUSD} from "../../Store/Selectors/selectors";
import {setCourseThunk} from "../../Store/exchangeReducer";
import Header from "../Header/Header";
import BodyBlockContainer from "../Body/BodyBlockContainer";
import Footer from "../Footer/footer";
import {staticData} from "../../Store/staticData"


const CurrencyPageContainer = ({
                                   courses,
                                   countries,
                                   setCourseThunk,
                                   USD,
                                   EUR,
                                   staticData
                               }) => {

    const euro = Number(USD / EUR).toFixed(2);
    const usd = Number(USD).toFixed(2);

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
            <BodyBlockContainer courses={courses} staticData={staticData}/>
            <Footer/>
        </Page>
    );
};

const mapStateToProps = (state) => {
    return {
        staticData:staticData,
        courses: getCourses(state),
        USD: getUSD(state),
        EUR: getEUR(state),
        UAH: getUAH(state)
    }
};

export default connect(mapStateToProps, {setCourseThunk})(CurrencyPageContainer);