import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firebase from '../src/firebase/config'
import Namec from './store/name';
import reportWebVitals from './reportWebVitals';
import Context, { firebseContext } from './store/firebasecontext';
import { nameContext } from './store/name';

ReactDOM.render(
  <React.StrictMode>
    <firebseContext.Provider value={{ Firebase }}>
      <Namec>
        <Context>
          <App />
        </Context>
      </Namec>
    </firebseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
