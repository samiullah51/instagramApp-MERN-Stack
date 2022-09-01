import { LOG_IN } from "./userActions";

// initial States
const initialState = {
  user: null,
};

// userReducer
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
