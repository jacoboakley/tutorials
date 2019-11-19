import React from 'react';
import ApolloClient, {gql} from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Query } from 'react-apollo';
import './App.css';

const POSTS_QUERY = gql `
  {
    posts(orderBy: createdAt_DESC) {
      id
      title
      postDate
      body
    }
  }
`;

const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/ck34ue09m0xxn01gq81jiekzi/master'
})



function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hello World</h1>
        <Query query={POSTS_QUERY}>
          {({loading, data}) => {
            if(loading) return 'Loading...'
            const { posts } = data;
            return posts.map(post => (
              <div key={post.id}>
                <h1>{post.title}</h1>
              </div>
            ))
          }}
        </Query>
      </div>
    </ApolloProvider>
  );
}

export default App;
