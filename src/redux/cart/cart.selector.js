import {
    createSelector
} from 'reselect'
const selectCart = state => state.cart;
export const selectCartProperty = createSelector([selectCart], cart => cart.cartItems)

export const selectCartItemCount = createSelector([selectCartProperty], cartItems => cartItems.reduce((acc, actual) => acc + actual.quantity, 0))