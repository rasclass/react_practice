import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyCheck from './MyCheck'

ReactDOM.render(
  <MyCheck />,
  document.getElementById('root')
);  

serviceWorker.unregister();
