import { combineReducers } from 'redux';
import { web3 } from './web3.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  web3,
  alert
});

export default rootReducer;