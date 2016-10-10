import { combineReducers } from 'redux';
import CurrentTabNumber from './currentTabNumber';
import { reducer as formReducer } from 'redux-form';

const appReducer = combineReducers({
  CurrentTabNumber,
  form : formReducer
})

export default appReducer;
