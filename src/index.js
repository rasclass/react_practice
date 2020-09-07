import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const str = 'こんにちは、世界!<br/>さようなら、私'
  ReactDOM.render(
    <p dangerouslySetInnerHTML={{__html: str}}></p>,
    document.getElementById('root')
  );  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
