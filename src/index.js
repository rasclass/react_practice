import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyLife from './MyLife'

ReactDOM.render(
  <MyLife />,
  document.getElementById('root')
);  

serviceWorker.unregister();
