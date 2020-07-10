import selectedKegReducer from '../../reducers/selected-keg-reducer'
import * as c from '../../actions/ActionTypes';

describe('selectedKegReducer', () => {
  test ('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer(null, {type:null})).toEqual(null)
  })

  test ('Should return keg state if action type is recognized', () => {
    const keg = {name: 'fake name'}
    expect(selectedKegReducer(null, {type: c.SELECT_KEG, keg: keg})).toEqual(keg)
  })

  test ('Should return null if action type is c.UNSELECT_KEG is recognized', () => {
    const keg = {name: 'fake name'}
    expect(selectedKegReducer(keg, {type: c.UNSELECT_KEG})).toEqual(null)
  })
})