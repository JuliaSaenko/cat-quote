import axios from 'axios';

export const FETCH_QUOTE_REQUEST = 'FETCH_QUOTES_REQUEST';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTES_SUCCESS';
export const FETCH_QUOTE_ERROR = 'FETCH_QUOTES_ERROR';

const fetchQuoteRequests = () => ({
    type: FETCH_QUOTE_REQUEST
});

const fetchQuoteSuccess = (response) => ({
    type: FETCH_QUOTE_SUCCESS,
    payload: response.data
});


const fetchQuoteError = error => ({
    type: FETCH_QUOTE_ERROR,
    payload: error.response
});



export function fetchQuote() {
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST"
        }
    };

    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

    return dispatch => {
        dispatch(fetchQuoteRequests());
        axios.get(`https://api.forismatic.com/api/1.0/?method=getQuote&format=json&json=parseQuote`, config)
            .then(response => dispatch(fetchQuoteSuccess(response)))
            .catch(error => dispatch(fetchQuoteError(error)))
    }
}
