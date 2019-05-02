import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import reducers from './reducers';
import App from './components/App.jsx';

import ListActivities from './components/ListActivities.js';
import PostsNew from './components/PostsNew.js';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      <h1>Weather-ly</h1>
      <Switch>
        <Route path="/posts" component={PostsNew} />
	      <Route path="" component={App} />     
      </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
