import React from 'react';
import { Provider } from "react-redux";

import { CatQuote } from './components/CatQuote/CatQuote';

import store from './redux/store';

import './App.scss';


function App() {
  return (
      <Provider store={store}>
        <div className='main'>
            <CatQuote />
        </div>
      </Provider>
  );
}

export default App;
