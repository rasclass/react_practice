import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyList from './MyList'

ReactDOM.render(
  <MyList />,
  document.getElementById('root')
);  

serviceWorker.unregister();
