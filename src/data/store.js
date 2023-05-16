import { configureStore } from "@reduxjs/toolkit";
import catFactSlice from "./catFactSlice";
import JokeSlice from "./jokeSlice";
import songSlice from "./songSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    songs: songSlice.reducer,
    catFact: catFactSlice.reducer,
    joke: JokeSlice.reducer,
  },
});
