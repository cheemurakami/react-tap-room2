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

  it ('selectKeg should create SELECT_KEG action', () => {
    const keg = {name: "chee keg", brand: 'fake brand', price: 20, alcoholContent: 5, id: 1}
    expect(actions.selectKeg(keg)).toEqual({
      type: 'SELECT_KEG',
      keg: keg
    }
    )
  });
  it ('unselectKeg should create UNSELECT_KEG action', () => {  
    expect(actions.unselectKeg()).toEqual({
      type: 'UNSELECT_KEG', 
    }
    )
  });
  it ('deleteKeg should create DELETE_KEG action', () => {  
    const id = 1
    expect(actions.deleteKeg(id)).toEqual({
      type: 'DELETE_KEG',
      id: id 
    }
    )
  });
});