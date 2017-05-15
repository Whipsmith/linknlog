import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {

    componentDidMount(){
    //    Render Blaze Acc form then find Div and place it inside
        this.view = Blaze.render(Template.loginButtons
            , ReactDOM.findDOMNode(this.refs.container));
    }

    componentWillUnmount(){
    //    Go find forms and destroy them
        Blaze.remove(this.view);
    }


    render() {
        return (
            <div ref="container" className="logincontainer"></div>
        );
    }
}

export default Accounts;