import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InteractionState {
  [pageId: string]: {
    likes: number;
    dislikes: number;
    hearts: number;
    comments: string[];
  };
}

const initialState: InteractionState = {};

const postInteractionsSlice = createSlice({
  name: 'postInteractions',
  initialState,
  reducers: {
    like: (state, action: PayloadAction<string>) => {
      const page = state[action.payload] || { likes: 0, dislikes: 0, hearts: 0, comments: [] };
      page.likes += 1;
      state[action.payload] = page;
    },
    dislike: (state, action: PayloadAction<string>) => {
      const page = state[action.payload] || { likes: 0, dislikes: 0, hearts: 0, comments: [] };
      page.dislikes += 1;
      state[action.payload] = page;
    },
    heart: (state, action: PayloadAction<string>) => {
      const page = state[action.payload] || { likes: 0, dislikes: 0, hearts: 0, comments: [] };
      page.hearts += 1;
      state[action.payload] = page;
    },
    addComment: (state, action: PayloadAction<{ pageId: string; comment: string }>) => {
      const { pageId, comment } = action.payload;
      const page = state[pageId] || { likes: 0, dislikes: 0, hearts: 0, comments: [] };
      page.comments.push(comment);
      state[pageId] = page;
    },
  },
});

export const { like, dislike, heart, addComment } = postInteractionsSlice.actions;

export default postInteractionsSlice.reducer;