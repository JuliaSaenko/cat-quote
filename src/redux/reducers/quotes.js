import {
    FETCH_QUOTE_ERROR,
    FETCH_QUOTE_REQUEST,
    FETCH_QUOTE_SUCCESS,


} from "../actions/quotes";


export default function quoteReducer(state = {
    isLoading: false,
    item: '',
    error: null
}, action) {
    switch(action.type) {
        case FETCH_QUOTE_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case FETCH_QUOTE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                item: action.payload
            };
        case FETCH_QUOTE_ERROR:
            return {
                isLoading: false,
                item: '',
                error: action.payload
            };
        default: return state;
    }
}
