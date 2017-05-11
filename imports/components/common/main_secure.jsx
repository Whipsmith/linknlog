import React, { Component } from 'react';
import Nav from './nav';
import Footer from './footer';
import { createContainer } from 'meteor/react-meteor-data';


class MainLayout extends Component{

  getContent(){
    return this.props.data.canShow? this.props.content : <div>Please sign in to view this page</div>
  }

  render() {
    return (
      <div>
        <header>
          {this.props.nav || <Nav />}
        </header>
        <main>
          {this.props.data.authInProcess?  <p>Loading...</p> : this.getContent()}

        </main>
        <footer>
          {this.props.footer || <Footer />}
        </footer>
      </div>
    );
  }
}

export default createContainer(() => {
  var data = {
    authInProcess: Meteor.loggingIn(),
    canShow: !!Meteor.user()
  };

  return { data };
}, MainLayout);