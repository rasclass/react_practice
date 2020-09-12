import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyFile from './MyFile'

ReactDOM.render(
  <MyFile />,
  document.getElementById('root')
);  

serviceWorker.unregister();
