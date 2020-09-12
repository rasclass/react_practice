import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyRadio from './MyRadio'

ReactDOM.render(
  <MyRadio />,
  document.getElementById('root')
);  

serviceWorker.unregister();
