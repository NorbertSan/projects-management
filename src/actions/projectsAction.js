import { CREATE__PROJECT } from "./types";

export const createProject = (project) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  // async code
  dispatch({
    type: CREATE__PROJECT,
    payload: {
      project,
    },
  });
};
