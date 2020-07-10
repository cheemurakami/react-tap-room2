import * as actions from './../../actions';

describe('tap room actions', () => {
  it ('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: "chee keg", brand: 'fake brand', price: 20, alcoholContent: 5, id: 1})).toEqual({
      type: 'ADD_KEG',
      name: "chee keg", 
      brand: 'fake brand', 
      price: 20, 
      alcoholContent: 5, 
      id: 1
    }
    )
  });

  it ('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    }
    )
  });
});