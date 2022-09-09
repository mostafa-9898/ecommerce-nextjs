import { createStore } from "redux";
import ProductReducer from "./productsReducer/ProductReducer";

const Store = createStore(ProductReducer)

export default Store