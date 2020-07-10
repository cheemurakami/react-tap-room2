import * as c from './../actions/ActionTypes';

export const addKeg = (keg) => {
  const { name, brand, price, id, alcoholContent, whenKegClicked } = keg
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    id: id,
    whenKegClicked: whenKegClicked
  }
};

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
})
export const selectKeg = (keg) => ({
  type: c.SELECT_KEG,
  keg: keg
})
export const unselectKeg = () => ({
  type: c.UNSELECT_KEG
})
export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id: id
})
