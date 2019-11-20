import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class PostForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    post: PropTypes.object
  }

  static defaultProps = {
    post: {}
  }

  state = {
    id: this.props.post.id || '',
    title: this.props.post.title || '',
    body: this.props.post.body || ''
  }

  handleInput = event => {
    const formData = {};
    formData[event.target.name] = event.target.value;
    this.setState({ ...formData})
  }

  render() {
    const { onSubmit } = this.props;
    const { title, body, id } = this.state;
    return (
      <>
        <form onSubmit={event => {
              event.preventDefault();
              onSubmit({
                variables: {
                  title,
                  body,
                  id
                }
              })
                .then(() => {
                  this.setState({
                    title: '',
                    body: ''
                });
              }).catch(error => {
                console.log(error)
              })
            }}>
              <label>Title</label>
              <input onChange={this.handleInput} name="title" type="text" value={title} />
              <label>Body</label>
              <textarea onChange={this.handleInput} name="body" type="text" value={body} />
              <button>Submit</button>
            </form>
      </>
    )
  }
}
