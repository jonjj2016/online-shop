import cartActionTypes from "./cart.types"

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HEADEN
});
export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})