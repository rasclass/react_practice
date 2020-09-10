import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyState from './MyState'

ReactDOM.render(
  <MyState />,
  document.getElementById('root')
);  

serviceWorker.unregister();
