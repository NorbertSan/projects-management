import { CREATE__PROJECT, CREATE__PROJECT__ERROR } from "actions/types";

const initialState = {
  projects: [
    {
      id: 1,
      title: "Help me find peach !",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit.",
      created: "12:36 AM",
    },
    {
      id: 2,
      title: "Help me find peach !",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit.",
      created: "12:36 AM",
    },
    {
      id: 3,
      title: "Help me find peach !",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ulla Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit.m, odit.",
      created: "12:36 AM",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE__PROJECT:
      console.log("create project", action.payload.project);
      return {
        state,
      };

    case CREATE__PROJECT__ERROR:
      console.log("create project error", action.payload.err);
      return {
        state,
      };
    default:
      return state;
  }
};
