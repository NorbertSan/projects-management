import { combineReducers } from "redux";
import projectsReducer from "./projectsReducer";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
  projects: projectsReducer,
  auth: authReducer,
  firestore: firestoreReducer,
});
