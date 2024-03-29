import cartActionTypes from "./cart.types"

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HEADEN
});
export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})
export const removeItem = item => ({
    type: cartActionTypes.DECREMENT_ITEM,
    payload: item
})
export const clearItemFromCart = item => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})