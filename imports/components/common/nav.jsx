import React, { Component } from 'react';
import Accounts from '../login/accounts';
//{this.user().email}
class Nav extends Component{

  user() {
    return Meteor.user();
  }

  navLinks() {
    if (!Meteor.loggingIn() && Meteor.user()) {
      console.log(Meteor.user());
      return (
        <ul className="nav navbar-nav pull-right">
          <li><a href="#profile">{Meteor.user().services.google.given_name}</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      );
    } else {
      return (
        <ul className="nav navbar-nav pull-right">
          <li><Accounts /></li>
        </ul>
      );
    }
  }



  render() {

    return (
      <nav className="navbar navbar-default navbar-static-top" role="navigation">
        <div className="container">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <span className="navbar-brand">
                <div>Link 'n Log</div>
              </span>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/private">Private</a></li>
              </ul>
              {this.navLinks()}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;