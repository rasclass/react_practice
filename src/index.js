import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyPool from './MyPool'

ReactDOM.render(
  <MyPool />,
  document.getElementById('root')
);  

serviceWorker.unregister();
