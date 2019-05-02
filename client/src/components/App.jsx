
import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts">
          Dashboard
          </Link>
        </div>
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}
