import {
    createSelector
} from 'reselect'
const selectCart = state => state.cart;

export const selectCurrentHidden = createSelector([selectCart], cart => cart.hidden)
export const selectCartProperty = createSelector([selectCart], cart => cart.cartItems)
export const selectCartItemCount = createSelector([selectCartProperty], cartItems => cartItems.reduce((acc, actual) => acc + actual.quantity, 0));
export const selectCartTotal = createSelector([selectCartProperty], cartItems => cartItems.reduce((acc, current) => acc + current.quantity * current.price, 0))