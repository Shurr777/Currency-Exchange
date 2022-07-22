import React from 'react';
import './App.css';
import CurrencyPageContainer from "./Components/CurrencyPage/CurrencyPage";
import {Provider} from "react-redux";
import store from "./Store/store";
import Container from "@mui/material/Container/Container";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Provider store={store}>
                    <Container maxWidth='lg'>
                        <CurrencyPageContainer/>
                    </Container>
                </Provider>
            </header>
        </div>
    );
}

export default App;
