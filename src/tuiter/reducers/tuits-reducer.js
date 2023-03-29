import { createSlice } from "@reduxjs/toolkit";
import tuits from "../data/tuits.json";

const currentUser = {
  userName: "Obi Wan Kenobi",
  handle: "ben_kenobi",
  avatar: "../images/kenobi.jpg",
};

const templateTuit = {
  ...currentUser,
  topic: "Star Wars",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: tuits,
  reducers: {
    updateLike(state, action) {
      const index = state.findIndex((tuit) => tuit._id === action.payload._id);
      state[index] = action.payload;
    },
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: new Date().getTime(),
      });
    },
    deleteTuit(state, action) {
      const index = state.findIndex((tuit) => tuit._id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { updateLike, createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
