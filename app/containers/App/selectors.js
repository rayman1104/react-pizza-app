import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => { console.log(globalState); globalState.get('loading'); }
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectMenu = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'menu'])
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectMenu,
  makeSelectLocation,
};
