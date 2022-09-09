import { createStore } from "redux";
import ProductReducer from "./productsReducer/productReducer";


const Store = createStore(ProductReducer)

export default Store