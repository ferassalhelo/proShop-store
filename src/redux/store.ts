import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth&profile/auth&profileReducer";
import { productReducer } from "./products/productsReducer";
import themeReducer from "./theme/themeReducer";

const reducers = combineReducers({
  theme: themeReducer,
  products: productReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

// export type AppState = ReturnType<typeof reducers>;
