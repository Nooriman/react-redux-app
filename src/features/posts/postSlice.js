import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things",
  },
  {
    id: "2",
    title: "Silces...",
    content: "The more i slice, the more i want pizza",
  },
];


// createSlice is a Reducer.. is the shop employee
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // Actions stored here
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content
          }
        }
      }
    }
  },
});

// The state.posts should be the same as the one in store.js in reducer
export const selectAllPost = (state) => state.posts;

// Export the action that is from the reducer of postsSlice
export const { postAdded } = postsSlice.actions;

// export the .reducer and then import it in the store
export default postsSlice.reducer;
