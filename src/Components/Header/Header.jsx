import React from 'react';
import {Button, ButtonContainer, H1, H2, H5, HeaderContainer, HeaderItem} from "./HeaderContainerStyle";

const Header = ({updateData, USD, EUR, UAH}) => {

    return (
        <div>
            <H1>Currency exchange</H1>
            <H2>Today's exchange rate</H2>
            <H5>Data taken from  "https://cdn.cur.su"</H5>
            <HeaderContainer>
                <HeaderItem>Dollar {USD}</HeaderItem>
                <HeaderItem>Euro {EUR}</HeaderItem>
                {/*<HeaderItem>Hryvnya {UAH}</HeaderItem>*/}
            </HeaderContainer>
            <ButtonContainer>
                <Button onClick={() => updateData()}>update course</Button>
            </ButtonContainer>
        </div>
    );
};

export default Header;

