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
            <img src='img/1.png'/>
            <p>Test text with image</p>
        </div>
    );
};
