import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './page/shop-page/shop.collection';
import Homepage from './page/homepage/homepage.component';
import Hader from './components/header/header.component';
import { connect } from 'react-redux';
import SignInAndSignOutPage from './page/signin-and-signup-page/signin-and-signup-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user.actions';
class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Hader />
        <Switch>
          <Route exact path="/" component={Homepage} />{' '}
          <Route path="/shop" component={ShopPage} />{' '}
          <Route path="/signin" component={SignInAndSignOutPage} />{' '}
        </Switch>{' '}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  null,
  mapDispatchToProps
)(App);
