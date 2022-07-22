import React, {useState} from 'react';
import {BodyOverlay, CurrencyBlock, Input} from "./BodyBlockStyle";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";


const BodyBlock = ({courses}) => {

    const [startCurrencyText, setStartCurrencyText] = useState('USD');
    const [targetCurrencyText, setTargetCurrencyText] = useState('UAH');

    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const ChangeSelectValue1 = (event) => {
        const res = inputValue1 * (courses[event.target.value] / courses[targetCurrencyText])
        setStartCurrencyText(event.target.value);
        setInputValue2(res.toFixed(2))
    };
    const ChangeSelectValue2 = (event) => {
        const res = inputValue2 * (courses[startCurrencyText] / courses[event.target.value])
        setTargetCurrencyText(event.target.value);
        setInputValue1(res.toFixed(2))
    };
    const onChangeInputValue1 = (event) =>{
        const valid = event.target.value;
        //сдедать валидацию только цифры точка цифры
        const res =  valid * ( courses[targetCurrencyText] / courses[startCurrencyText])
        setInputValue1(valid)
        setInputValue2(res.toFixed(2))
    };
    const onChangeInputValue2 = (event) =>{
        const valid = event.target.value;
        //сдедать валидацию только цифры точка цифры
        const res = valid * (courses[startCurrencyText] / courses[targetCurrencyText])
        setInputValue2(valid)
        setInputValue1(res.toFixed(2))
    };

    const validation = (val) =>{return val.match(/^([0-9,]? +(\.[0-9]*)?)/)[0]};


    return (
        <div>
            <BodyOverlay>
                <CurrencyBlock>
                    <FormControl variant="standard" sx={{m: 1, minWidth: 100, maxWidth: 100}}>
                        <InputLabel id="demo-simple-select-standard-label">Currency</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={startCurrencyText}
                            onChange={ChangeSelectValue1}
                            label="Age"
                        >
                            {Object.keys(courses).map((key) => {
                                return <MenuItem value={key} key={key}>{key}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    <Input type="text" value={inputValue1} onChange={(e)=>{onChangeInputValue1(e)}}/>
                </CurrencyBlock>
                <CurrencyBlock>
                    <FormControl variant="standard" sx={{m: 1, minWidth: 100, maxWidth: 100}}>
                        <InputLabel id="demo-simple-select-standard-label">Currency</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={targetCurrencyText}
                            onChange={ChangeSelectValue2}
                            label="Age"
                        >
                            {Object.keys(courses).map((key) => {
                                return <MenuItem value={key} key={key}>{key}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    <Input type="text" value={inputValue2} onChange={(e)=>{onChangeInputValue2(e)}}/>
                </CurrencyBlock>
            </BodyOverlay>
        </div>
    );
};

export default BodyBlock;