import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyAttrMulti from './MyAttrMulti'
import * as serviceWorker from './serviceWorker';

const data = {
  name: '山田権左衛門',
  age : 18,
  sex:'男',
};

ReactDOM.render(
  <MyAttrMulti {...data} />,
  document.getElementById('root')
);  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
