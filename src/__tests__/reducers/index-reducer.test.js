import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import showFormReducer from '../../reducers/show-form-reducer';
import tapListReducer from '../../reducers/tap-list-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe("rootReducer", () => {
  let store = createStore(rootReducer);

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterList: {},
      showForm: false,
      selectedKeg: null
    });
  });

  test('Check that add keg state of tapListReducer matches root reducer', () => {
    const action = {
      type: 'ADD_KEG',
      name: 'name',
      brand: 'brand',
      price: 'price',
      alcoholContent: 'alcoholContent',
      id: 1,
      whenKegClicked: "whenKegClicked"
    }
    store.dispatch(action);
    expect(store.getState().masterList).toEqual(tapListReducer({}, action));
  });
  
  test('Check that initial state of showFormReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().showForm).toEqual(showFormReducer(false, action));
  });

  test('Check that initial state of selectedKegReducer matches root reducer', () => {
    const action = {
      type: 'SELECT_KEG',
      keg: {name: 'name'}
    }
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(null, action));
  });

});