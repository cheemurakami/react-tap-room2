import tapListReducer from '../../reducers/tap-list-reducer'
import * as c from '../../actions/ActionTypes';

let action;

const exampleKeg = {
  name: "chee keg", 
  brand: 'fake brand', 
  price: 20, 
  alcoholContent: 10, 
  id: 1
}

describe ('tapListReducer', () => {
  test('should return default state if there is no action type passed into the reducer', () => {
    expect(tapListReducer({}, {type:null})).toEqual({});
  });

  test('should add keg to the list', () => {
    const { name, brand, price, alcoholContent, id, whenKegClicked } = exampleKeg;
    
    action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      id: id,
      whenKegClicked: whenKegClicked
    }
    expect(tapListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        id: id,
        whenKegClicked: whenKegClicked
      }
    });
  });

})