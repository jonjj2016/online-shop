import {
    createSelector
} from 'reselect'
const selectCurrentUser = state => state.user;
export const selectCurrent = createSelector([selectCurrentUser], (user) => user.currentUser);