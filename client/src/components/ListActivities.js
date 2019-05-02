import _ from 'lodash';
import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';



export default class ListActivities extends Component {
  constructor(props) {
    super(props) 
      this.state= {
        activities: [],
      };
  }


  componentDidMount() {
    axios.get("/posts")
      .then((response) => {
        this.setState({ activities: response.data });
      })
      .catch((error) => {
        console.error(error);
      });   
  }


  render() {
    const product = this.state.activities.map((elem, index) => {
         return {elem};
    });
    return (
      <div>
        <h3>Activities</h3>
        {product}
      </div>
    );
  }
}

  
