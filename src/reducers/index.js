import { combineReducers } from 'redux';
import playersReducer from './playersReducer';
import modalReducer from './modalReducer';
import myPlayersList from './myPlayersList';


export default combineReducers({
  playersData: playersReducer,
  modal: modalReducer,
  myPlayersList
})