
import { fromJS } from 'immutable';
import menuPageReducer from '../reducer';

describe('menuPageReducer', () => {
  it('returns the initial state', () => {
    expect(menuPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
