import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyTextarea from './MyTextarea'

ReactDOM.render(
  <MyTextarea />,
  document.getElementById('root')
);  

serviceWorker.unregister();
