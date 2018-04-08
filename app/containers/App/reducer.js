import { fromJS } from 'immutable';

import {
  LOAD_MENU,
  LOAD_MENU_SUCCESS,
  LOAD_MENU_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
    menu: mockData,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MENU:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', ''], false);
    case LOAD_MENU_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_MENU_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
