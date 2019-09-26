import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './page/shop-page/shop.collection';
import Homepage from './page/homepage/homepage.component';
import Hader from './components/header/header.component';
import SignInAndSignOutPage from './page/signin-and-signup-page/signin-and-signup-page.component';

function App() {
  return (
    <div>
      <Hader />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignOutPage} />
      </Switch>
    </div>
  );
}

export default App;
