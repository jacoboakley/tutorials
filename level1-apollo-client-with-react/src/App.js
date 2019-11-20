import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


import Post from './Posts/Post';
import Posts from './Posts/Posts';
import NewPost from './Posts/NewPost';


const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/ck34ue09m0xxn01gq81jiekzi/master'
})



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Link to={'/post/new'}>Add New Post</Link>

          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/post/new" component={NewPost} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
