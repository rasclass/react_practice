import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import MyTop from './MyTop';
import MyHello from './MyHello';
import MyArticle from './MyArticle';

export default class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <ul>
            <li><Link to="/">トップ</Link></li>
            <li><Link to="/hello">Hello</Link></li>
            <li><Link to="/article/13">記事No.13</Link></li>
            <li><Link to="/article/108">記事No.108</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={MyTop} />
            <Route path="/hello" component={MyHello} />
            <Route path="/article/:id" component={MyArticle} />
          </Switch>
        </div>
      </Router>
    );
  }
}