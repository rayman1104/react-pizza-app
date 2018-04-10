/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_MENU = 'react-pizza-app/App/LOAD_MENU';
export const LOAD_MENU_SUCCESS = 'react-pizza-app/App/LOAD_MENU_SUCCESS';
export const LOAD_MENU_ERROR = 'react-pizza-app/App/LOAD_MENU_ERROR';

export const EXPAND_NODE = 'react-pizza-app/App/EXPAND_NODE';
export const COLLAPSE_NODE = 'react-pizza-app/App/COLLAPSE_NODE';
export const ADD_CATEGORY = 'react-pizza-app/App/ADD_CATEGORY';
export const ADD_ITEM = 'react-pizza-app/App/ADD_ITEM';
export const EDIT_CATEGORY = 'react-pizza-app/App/EDIT_CATEGORY';
export const EDIT_ITEM = 'react-pizza-app/App/EDIT_ITEM';

export const DEFAULT_LOCALE = 'en';
