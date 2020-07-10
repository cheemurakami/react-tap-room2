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