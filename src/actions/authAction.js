import {
  SIGN__IN__SUCCESS,
  SIGN__IN__ERROR,
  LOG__OUT__SUCCESS,
  LOG__OUT__ERROR,
} from "./types";
import firebase from "firebase";

export const signIn = (credentials) => async (dispatch, getState) => {
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password);
    dispatch({
      type: SIGN__IN__SUCCESS,
      payload: {
        credentials,
      },
    });
  } catch (err) {
    dispatch({
      type: SIGN__IN__ERROR,
      payload: {
        err,
      },
    });
  }
};

export const logOut = () => async (dispatch, getState) => {
  try {
    await firebase.auth().signOut();
    dispatch({
      type: LOG__OUT__SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: LOG__OUT__ERROR,
    });
  }
};
