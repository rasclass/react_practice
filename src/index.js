import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyType from './MyType'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <MyType value="山田" />
    <MyType value={'鈴木'} />
    <MyType value={108} />
    <MyType value={true} />
    <MyType value={['うめ','もも', 'さくら']} />
    <MyType value={{name:"山田太郎", age:40}} />
    <MyType value={() => console.log("Hoge")} />
  </div>,
  document.getElementById('root')
);  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
