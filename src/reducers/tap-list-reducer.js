import * as c from './../actions/ActionTypes';

const tapListReducer = (state = {}, action) => {
  const { name, brand, price, alcoholContent, id, whenKegClicked } = action
  switch (action.type){
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          id: id,
          whenKegClicked: whenKegClicked
        }
      }); //{1: {name: "keg1"}, 2: {name: "keg2"}}
    case c.DELETE_KEG:
      const newState = {...state}
      delete newState[id]
      return newState;
    default:
      return state; //{}
  };
};

export default tapListReducer