import { applyMiddleware, combineReducers, createStore } from "redux";
import { shopReducer } from "./reducers/shopReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";



const middleware = [thunk];

const reducer = combineReducers({
  products: shopReducer
})


const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;