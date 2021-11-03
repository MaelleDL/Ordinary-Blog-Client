import { combineReducers } from "redux";
import articlesReducer from './ArticlesReducer';

const rootReducer = combineReducers({
    articles: articlesReducer,
});

export default rootReducer;