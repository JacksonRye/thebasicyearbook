import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

import firebase from "../firebase";

const initialState = {
  student: {},
  studentList: [],
  loading: true,
  lastStudent: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const limit = 2;

  const studentQuery = firebase
    .firestore()
    .collection("students")
    .orderBy("name");

  function getStudents() {
    let students;

    studentQuery.onSnapshot((snapshot) => {
      students = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(students);
      dispatch({ type: "UPDATE_STUDENT_LIST", payload: students });
    });
  }

  function getStudentById(id) {
    setLoading(true);

    const student =
      state.studentList.find((student) => id === student.id) || state.student;

    dispatch({
      type: "SET_STUDENT",
      payload: student,
    });

    console.log("id", student);

    setLoading(false);
  }

  function setLoading(payload) {
    dispatch({
      type: "SET_LOADING",
      payload,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        studentList: state.studentList,
        loading: state.loading,
        student: state.student,
        getStudents,
        getStudentById,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
