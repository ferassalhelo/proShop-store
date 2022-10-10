import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./products/productsReducer";
import themeReducer from "./theme/themeReducer";

const reducers = combineReducers({
  theme: themeReducer,
  products: productReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

// export type AppState = ReturnType<typeof reducers>;
