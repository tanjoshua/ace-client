import { LOGIN, SIGNUP } from "../actions/types";

const initialState = {
  token: null,
  userId: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      break;
    case SIGNUP:
      break;
  }
};

export default authReducer;
