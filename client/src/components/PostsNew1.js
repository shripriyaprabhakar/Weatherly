import _ from 'lodash';
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostsNew extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    // this.props.fetchPosts().then((data) => { console.log('resolved')}); 
  }

  renderPosts() {
    return _.map(this.props.posts, (post) => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.suggestions}
        </li>
      );
    });
  }

  render() {
  	console.log('here', this.props.posts);
    return (
      <div>
        <h3>Activities</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return { posts:state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsNew);
