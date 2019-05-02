import { combineReducers } from 'redux';
import weatherReducer from './reducer_weather';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  weather: weatherReducer,
  posts: PostsReducer
});

export default rootReducer;
