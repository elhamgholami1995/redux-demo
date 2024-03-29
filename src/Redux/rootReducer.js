import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import milkReducer from "./Milk/milkReducer";
import userReducer from "./User/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  milk: milkReducer,
  user: userReducer,
});

export default rootReducer;
