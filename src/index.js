import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MySelect from './MySelect'

ReactDOM.render(
  <MySelect />,
  document.getElementById('root')
);  

serviceWorker.unregister();
