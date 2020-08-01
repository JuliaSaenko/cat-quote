import { combineReducers } from 'redux';
import quoteReducer from "./quotes";




const rootReducer = combineReducers({
    quote: quoteReducer,
});

export default rootReducer;
