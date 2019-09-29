import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectCartProperty } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.style.scss';
import CustomButton from '../custom-button/custom-button.component';
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cart => <CartItem key="cart.id" item={cart} />)
      ) : (
        <span className="empty-message"> Your cart is empty</span>
      )}
    </div>

    <CustomButton
      onClick={() => {
        dispatch(toggleCartHidden());
        history.push('/checkout');
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartProperty
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
