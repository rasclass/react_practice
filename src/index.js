import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyEvent from './MyEvent'

ReactDOM.render(
  <MyEvent greet="Hello" />,
  document.getElementById('root')
);  

serviceWorker.unregister();
