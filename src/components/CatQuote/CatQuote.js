import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from "../../redux/actions/quotes";

export const CatQuote = () => {
    const dispatch = useDispatch();

    const { isLoading, item } = useSelector(state => state.quote);

    useEffect(() => {
        dispatch(fetchQuote());
    }, [dispatch]);


    return (
        <div>
            {item.quoteText}
        </div>
    );
};
