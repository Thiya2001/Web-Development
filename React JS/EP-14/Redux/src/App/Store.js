import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/UserSlice";
import fruitsReducer from "../Slices/FruitSlice"

const Store = configureStore({
    reducer:{
        usersInfo: userReducer,
        fruitsInfo: fruitsReducer,
    },
});

export default Store;