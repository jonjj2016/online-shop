import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './page/shop-page/shop.collection';
import Homepage from './page/homepage/homepage.component';
import Hader from './components/header/header.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Checkout from './page/checkout-page/checkout.component';
import { selectCurrent } from './redux/user/user.selector';
import SignInAndSignOutPage from './page/signin-and-signup-page/signin-and-signup-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
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
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() => {
              console.log(this.props.currenUser);

              return this.props.currenUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignOutPage />
              );
            }}
          />{' '}
        </Switch>{' '}
      </div>
    );
  }
}
const mapStateToPrios = createStructuredSelector({
  currenUser: selectCurrent
});
const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  mapStateToPrios,
  mapDispatchToProps
)(App);
