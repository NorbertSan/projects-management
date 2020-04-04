import { CREATE__PROJECT } from "actions/types";

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
      return {
        ...state,
        projects: [...state.projects, action.payload.project],
      };
    default:
      return state;
  }
};
