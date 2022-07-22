import React from 'react';
import {BodyOverlay, CurrencyBlock, Input, Select} from "./BodyBlockStyle";

const BodyBlock = ({
                       ChangeSelectValue1, ChangeSelectValue2,
                       onChangeInputValue1, onChangeInputValue2,
                       startCurrencyText, targetCurrencyText,
                       inputValue1, inputValue2, courses
                   }) => {
    return (
        <div>
            <BodyOverlay>
                <CurrencyBlock>
                    <Select
                        value={startCurrencyText}
                        onChange={ChangeSelectValue1}>
                        {Object.keys(courses).map((key) => {
                            return <option value={key} key={key}>{key}</option>
                        })}
                    </Select>
                    <Input type="text" value={inputValue1} onChange={(e) => {
                        onChangeInputValue1(e)
                    }}/>
                </CurrencyBlock>
                <CurrencyBlock>
                    <Select
                        value={targetCurrencyText}
                        onChange={ChangeSelectValue2}>
                        {Object.keys(courses).map((key) => {
                            return <option value={key} key={key}>{key}</option>
                        })}
                    </Select>
                    <Input type="text" value={inputValue2} onChange={(e) => {
                        onChangeInputValue2(e)
                    }}/>
                </CurrencyBlock>
            </BodyOverlay>
        </div>
    );
};

export default BodyBlock;