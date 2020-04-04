import { combineReducers } from "redux";
import projectsReducer from "./projectsReducer";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  projects: projectsReducer,
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
