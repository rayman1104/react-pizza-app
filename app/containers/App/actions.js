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

export function expandNode(nodeId) {
  return {
    type: EXPAND_NODE,
    nodeId,
  };
}

export function collapseNode(nodeId) {
  return {
    type: COLLAPSE_NODE,
    nodeId,
  };
}

export function addCategory(parentId, name) {
  return {
    type: ADD_CATEGORY,
    parentId,
    name,
  };
}

export function addItem(parentId, name, fillers, price) {
  return {
    type: ADD_ITEM,
    parentId,
    name,
    fillers,
    price,
  };
}

export function editNodeName(nodeId, name) {
  return {
    type: EDIT_NODE_NAME,
    nodeId,
    name,
  };
}

export function editItemFillers(nodeId, fillers) {
  return {
    type: EDIT_ITEM_FILLERS,
    nodeId,
    fillers,
  };
}

export function editItemPrice(nodeId, price) {
  return {
    type: EDIT_ITEM_PRICE,
    nodeId,
    price,
  };
}
