import * as c from './../actions/ActionTypes';

const selectedKegReducer = (state = null, action) => {
  switch (action.type){
    case c.SELECT_KEG:
      return action.keg
    case c.UNSELECT_KEG:
      return  null
    default:
      return state; //null
  };
};

export default selectedKegReducer