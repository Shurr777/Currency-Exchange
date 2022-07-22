import {applyMiddleware, combineReducers, createStore} from "redux";
import {exchangeReducer} from "./exchangeReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    exchangeData: exchangeReducer,
});

const store = createStore(reducers,(applyMiddleware(thunkMiddleware)
));

export default store