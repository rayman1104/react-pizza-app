import { createSelector } from 'reselect';

/**
 * Direct selector to the menuPage state domain
 */
const selectMenuPageDomain = (state) => state.get('menuPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MenuPage
 */

const makeSelectMenuPage = () => createSelector(
  selectMenuPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectMenuPage;
export {
  selectMenuPageDomain,
};
