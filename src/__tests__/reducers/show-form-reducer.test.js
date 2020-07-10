import showFormReducer from '../../reducers/show-form-reducer'
import * as c from '../../actions/ActionTypes';

describe('showFormReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(showFormReducer(false, {type:null})).toEqual(false);
  });

  test('Should toggle from false to state when action triggered', () => {
    expect(showFormReducer(false, {type: c.TOGGLE_FORM})).toEqual(true);
  });
});