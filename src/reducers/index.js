import showFormReducer from './show-form-reducer'
import tapListReducer from './tap-list-reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers ({
  showForm: showFormReducer,
  masterList: tapListReducer
})

export default rootReducer