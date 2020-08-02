import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from "../../redux/actions/quotes";

import './CatQuote.scss';

export const CatQuote = () => {
    const dispatch = useDispatch();

    const { isLoading, item } = useSelector(state => state.quote);
    const [currentImage, setCurrentImage] = useState('img/1.jpg');

    useEffect(() => {
        dispatch(fetchQuote());
        getRandomImage();
    }, [dispatch]);

    const getRandomImage = () => {
        const dayInMilliseconds = 1000 * 60 * 60 * 24;
         setInterval(() => {
            let imgNumber = Math.floor((Math.random() * 104) + 1);
            setCurrentImage(`img/${imgNumber}.jpg`);
        }, dayInMilliseconds);
    }


    return (
        <div className='cat-quote'>
            <div className='cat-quote__wrapper'>
                <img className='cat-quote__img' src={currentImage}/>
                <p className='cat-quote__text'>{item}</p>
            </div>

        </div>
    );
};
