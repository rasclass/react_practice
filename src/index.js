import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyForm from './MyForm'

ReactDOM.render(
  <MyForm />,
  document.getElementById('root')
);  

serviceWorker.unregister();
