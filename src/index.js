import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const name = '山田'
  ReactDOM.render(
    <div>
      <p>名前は、{'$' + name + '$'}</p>
      <p>現在の日時は、{new Date().toLocaleString()}です。</p>
      <p>2の3乗は、{2 **3 }</p>
    </div>,
    document.getElementById('root')
  );  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
