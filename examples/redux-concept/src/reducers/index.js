import { combineReducers } from "redux";
import postsReducer from "./postsReducer";


const roorReducer = combineReducers({
    posts:postsReducer,
}
)

export default roorReducer