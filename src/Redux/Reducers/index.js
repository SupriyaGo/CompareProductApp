import {combineReducers} from 'redux';
import Reducers from './reducers';

const rootReducer = combineReducers({
  Fav: Reducers,
});

export default rootReducer;
