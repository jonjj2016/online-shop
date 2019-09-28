import React from 'react';
import './header.style.scss';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/4.4 crown.svg.svg';
import CartIcon from '../cart-icon/cart-icon.component';
const Hader = ({ currenUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currenUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
const mapStateToProps = ({ user: { currenUser }, cart: { hidden } }) => ({
  currenUser,
  hidden
});

export default connect(mapStateToProps)(Hader);
