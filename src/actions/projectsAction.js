import { CREATE__PROJECT, CREATE__PROJECT__ERROR } from "./types";

export const createProject = (project) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  try {
    const firestore = getFirestore();
    await firestore.collection("projects").add({
      ...project,
      authorFirstName: "Jan",
      authorLastName: "Kowalski",
      createdAt: new Date(),
    });
    dispatch({
      type: CREATE__PROJECT,
      payload: {
        project,
      },
    });
  } catch (err) {
    dispatch({
      type: CREATE__PROJECT__ERROR,
      payload: {
        err,
      },
    });
  }
};
