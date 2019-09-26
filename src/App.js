import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './page/shop-page/shop.collection';
import Homepage from './page/homepage/homepage.component';
import Hader from './components/header/header.component';
import SignInAndSignOutPage from './page/signin-and-signup-page/signin-and-signup-page.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  //unsubscribeFromAuth=null
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Hader currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />{' '}
          <Route path="/shop" component={ShopPage} />{' '}
          <Route path="/signin" component={SignInAndSignOutPage} />{' '}
        </Switch>{' '}
      </div>
    );
  }
}

export default App;
