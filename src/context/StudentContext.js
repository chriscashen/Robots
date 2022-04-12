import React, { createContext, useReducer } from "react";

export const StudentContext = createContext();

export const studentsReducer = (state, action) => {
  switch (action.type) {
    case "GETDATA":
      return { ...state, data: action.payload };

    case "ADDTAG":
      return { ...state };

    default:
      return state;
  }
};

export const StudentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentsReducer, {
    data: null,
  });

  return (
    <StudentContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};
