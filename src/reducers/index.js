import showFormReducer from './show-form-reducer'
import tapListReducer from './tap-list-reducer'
import selectedKegReducer from './selected-keg-reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers ({
  showForm: showFormReducer,
  masterList: tapListReducer,
  selectedKeg: selectedKegReducer
})

export default rootReducer