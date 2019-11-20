import React, { Component } from 'react';
import { Query } from 'react-apollo';
import {gql} from 'apollo-boost';
import UpdatePost from './UpdatePost';

export default class Post extends Component {
  render() {
    const { match } = this.props;
    return (
      <Query query={POST_QUERY} variables={{id: match.params.id}}>
        {({loading, data}) => {
            if(loading) return 'Loading...'
            const { post } = data;
            return (
              <div>
                <section>
                  <h1>{post.title}</h1>
                  <h3>{post.postDate}</h3>
                  <p>{post.body}</p>
                </section>
                <section>
                  <h1>Edit Post</h1>
                  <UpdatePost post={post} />
                </section>
              </div>
            )
          }}
      </Query>
    )
  }
}

// Queries //
const POST_QUERY = gql `
  query post($id: ID!) {
    post(where: {id: $id}) {
      id
      postDate
      title
      body
    }
  }
`;