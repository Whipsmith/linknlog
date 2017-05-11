import React from 'react';
import { mount } from 'react-mounter'
import Private from '../components/private';
import Home from '../components/home';
import NotFound from '../components/common/not_found';
import MainLayout from '../components/common/main_secure';
import MainRegisterLayout from '../components/common/main_register';
//import Accounts from '../components/login/accounts';


FlowRouter.route("/", {
  name: "home",
  action() {
    mount(MainLayout, { content: <Home /> });
  }
});
//
//FlowRouter.route("/sign-up", {
//name: "register",
//action()
//{
//  mount(MainRegisterLayout, { content: <Accounts />})
//}
//});
//
//FlowRouter.route("/signIn", {
//  name: "login",
//  action()
//  {
//    mount(MainLayout, { content: <Accounts />})
//  }
//});

// Or optionally overwrite the default nav/footer with custom components

// FlowRouter.route("/", {
//   name: "home",
//   action() {
//     ReactLayout.render(MainLayout, {
//       nav: <CustomNav />,
//       content: <Home />,
//       footer: <CustomFooter />
//     });
//   }
// });

FlowRouter.route("/private", {
  name: "private",
  //triggersEnter: [AccountsTemplates.ensureSignedIn], // force login
  action() {
    mount(MainLayout, { content: <Private /> });
  }
});

//FlowRouter.route("/logout", {
//  name: "logout",
//  action() {
//    Meteor.logout(() => {
//      FlowRouter.redirect("/");
//    });
//  }
//});

FlowRouter.notFound = {
  action() {
    mount(MainLayout, { content: <NotFound /> });
  }
};

// UserAccounts Routes

//AccountsTemplates.configureRoute('signIn');
//
//AccountsTemplates.configureRoute('signUp');
