import { createSlice } from "@reduxjs/toolkit";
import {
  createTuitThunk,
  deleteTuitThunk,
  findTuitsThunk,
  updateTuitThunk,
} from "../../services/tuits-thunks.js";

const currentUser = {
  userName: "Obi-Wan Kenobi",
  handle: "ben_kenobi",
  avatar: "../images/kenobi.jpg",
};

const templateTuit = {
  ...currentUser,
  topic: "Star Wars",
  title: "The Force Awakens",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
  disliked: false,
  dislikes: 0,
};

const initialState = {
  tuits: [],
  loading: false,
  error: null,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState,
  reducers: {},
  extraReducers: {
    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter((t) => t._id !== payload);
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits.unshift({
        ...templateTuit,
        ...payload,
      });
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
      state.tuits[tuitNdx] = {
        ...state.tuits[tuitNdx],
        ...payload,
      };
    },
  },
});

export default tuitsSlice.reducer;
