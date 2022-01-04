import { createStore } from "redux";
import reduceCards from "./reducers/index"

const store = createStore(reduceCards, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store ;