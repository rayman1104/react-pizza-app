import { fromJS } from 'immutable';
import { makeSelectMenuLength } from './selectors';

import {
  LOAD_MENU,
  LOAD_MENU_SUCCESS,
  LOAD_MENU_ERROR,
  EXPAND_NODE,
  COLLAPSE_NODE,
  ADD_CATEGORY,
  ADD_ITEM,
  EDIT_NODE_NAME,
  EDIT_ITEM_FILLERS,
  EDIT_ITEM_PRICE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    menu: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MENU:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'menu'], false);
    case LOAD_MENU_SUCCESS:
      return state
        .setIn(['userData', 'menu'], action.menu)
        .set('loading', false);
    case LOAD_MENU_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case EXPAND_NODE:
      return state
        .setIn(['userData', 'menu', action.nodeId, 'isExpanded'], true);
    case COLLAPSE_NODE:
      return state
        .setIn(['userData', 'menu', action.nodeId, 'isExpanded'], false);
    case ADD_CATEGORY: {
      const newNode = fromJS({ name: action.name, isLeaf: false, children: [] });
      return state
        .setIn(['userData', 'menu', action.parentId, makeSelectMenuLength()], newNode);
    }
    case ADD_ITEM: {
      const newNode = fromJS({ name: action.name, isLeaf: true, fillers: action.fillers, price: action.price });
      return state
        .setIn(['userData', 'menu', action.parentId, makeSelectMenuLength()], newNode);
    }
    case EDIT_NODE_NAME:
      return state
        .setIn(['userData', 'menu', action.nodeId, 'name'], action.name);
    case EDIT_ITEM_FILLERS:
      return state
        .setIn(['userData', 'menu', action.nodeId, 'fillers'], action.fillers);
    case EDIT_ITEM_PRICE:
      return state
        .setIn(['userData', 'menu', action.nodeId, 'price'], action.price);
    default:
      return state;
  }
}

export default appReducer;
