import { configureStore } from "@reduxjs/toolkit";
import ListReducer from "./ListSlice";

const Store=configureStore({
    reducer:{
        list:ListReducer
    }
})

export default Store;