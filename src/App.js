import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom' ;

import Posts from './components/Posts/index';
import Post from './components/SinglePost/index';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <Router>
        <Switch>
         <Route exact={true} path="/" component={Posts} />
         <Route exact={true} path="/post/:id" component={Post} />
         </Switch>
       </Router>
      </Provider>
    );
  }
}

export default App;
