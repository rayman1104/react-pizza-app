import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_MENU } from 'containers/App/constants';
import { menuLoaded, menuLoadingError } from 'containers/App/actions';
import { fromJS } from 'immutable';

import request from 'utils/request';

export function* getMenu() {
  // Select username from store
  const requestURL = '/api/menu';

  try {
    // Call our request helper (see 'utils/request')
    let fetchedMenu = yield call(request, requestURL);
    yield Object.keys(fetchedMenu).forEach((key) => {
      if (!fetchedMenu[key].isLeaf) {
        fetchedMenu[key].isExpanded = true;
      }
    });
    const menu = yield fromJS(fetchedMenu);
    yield put(menuLoaded(menu));
  } catch (err) {
    yield put(menuLoadingError(err));
  }
}

export default function* menuData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_MENU, getMenu);
}
