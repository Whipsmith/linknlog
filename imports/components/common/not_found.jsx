import React, { Component } from 'react';

class NotFound extends Component{
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Oops! Nothing here.</h1>
          <a href="/" className="btn btn-primary">Go home</a>
        </div>
      </div>
    );
  }
}

export default NotFound;