import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyParent from './MyParent'

ReactDOM.render(
  <MyParent />,
  document.getElementById('root')
);  

serviceWorker.unregister();
