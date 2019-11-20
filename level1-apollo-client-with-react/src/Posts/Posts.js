import React, { Component } from 'react'
import { Query } from 'react-apollo';
import {gql} from 'apollo-boost';
import { Link } from 'react-router-dom';

export default class Posts extends Component {
  render() {
    return (
      <div>
      <h1>Post Archive</h1>
      <ul>
        <Query query={POSTS_QUERY}>
          {({loading, data}) => {
            if(loading) return 'Loading...'
            const { posts } = data;
            return posts.map(post => (
              <li key={post.id}>
                <Link to={`/post/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            ))
          }}
        </Query>
      </ul>
      </div>
    )
  }
}

// Queries //
const POSTS_QUERY = gql `
  query allPosts {
    posts(orderBy: createdAt_DESC) {
      id
      title
      postDate
      body
    }
  }
`;
