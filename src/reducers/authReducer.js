import {
  SIGN__IN__SUCCESS,
  SIGN__IN__ERROR,
  LOG__OUT__ERROR,
  LOG__OUT__SUCCESS,
} from "actions/types";
const initialState = {
  authError: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN__IN__ERROR:
      console.log("login failed");
      return {
        ...state,
        authError: "Login failed",
      };

    case SIGN__IN__SUCCESS:
      console.log("login success");
      return {
        ...state,
        authError: null,
      };

    case LOG__OUT__SUCCESS:
      console.log("logout success");
      return state;

    case LOG__OUT__ERROR:
      console.log("logout success");
      return state;
    default:
      return state;
  }
};
