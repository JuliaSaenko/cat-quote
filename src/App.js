import React from 'react';
import { Provider } from "react-redux";

import store from './redux/store';
import { CatQuote } from './components/CatQuote/CatQuote';

function App() {
  return (
      <Provider store={store}>
        <div>
            <CatQuote />
        </div>
      </Provider>
  );
}

export default App;
