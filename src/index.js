import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyCheckMulti from './MyCheckMulti'

ReactDOM.render(
  <MyCheckMulti />,
  document.getElementById('root')
);  

serviceWorker.unregister();
