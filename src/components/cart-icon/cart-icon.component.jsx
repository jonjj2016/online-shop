import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCartItemCount } from '../../redux/cart/cart.selector';
import './cart-icon.style.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg';
import { connect } from 'react-redux';
const CartIcon = ({ toggleCartHidden, quantity }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{quantity}</span>
  </div>
);
const mapStateToProps = state => ({
  quantity: selectCartItemCount(state)
});
const mapDispatchToProp = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(
  mapStateToProps,
  mapDispatchToProp
)(CartIcon);
