import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Obi-Wan Kenobi",
  handle: "ben_kenobi",
  avatar: "../images/kenobi.jpg",
  banner: "../images/kenobi-poster.jpg",
  bio: "Wise and skilled Jedi Master, known for his bravery and dedication to the Jedi Order.",
  location: "Tatooine",
  birthdate: "1975-12-02",
  joined: "April 2021",
  website: "https://www.starwars.com/databank/obi-wan-kenobi",
  number_of_tuits: 489,
  followingCount: 581,
  followersCount: 942,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    editProfile: (state, action) => {
      const { name, bio, location, website, birthdate } = action.payload;
      state.name = name;
      state.bio = bio;
      state.location = location;
      state.website = website;
      state.birthdate = birthdate;
    },
  },
});

export const { editProfile } = profileSlice.actions;
export default profileSlice.reducer;
