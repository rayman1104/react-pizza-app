import {
  LOAD_MENU,
  LOAD_MENU_SUCCESS,
  LOAD_MENU_ERROR,
} from './constants';

export function loadMenu() {
  return {
    type: LOAD_MENU,
  };
}

export function menuLoaded(menu) {
  return {
    type: LOAD_MENU_SUCCESS,
    menu,
  };
}

export function menuLoadingError(error) {
  return {
    type: LOAD_MENU_ERROR,
    error,
  };
}

