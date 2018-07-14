import { initialState } from '../store/initialState';

export const rootReducer = (state = initialState, action) => {
  switch (action) {
    default: return { ...state };
  }
};