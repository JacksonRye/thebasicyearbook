import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

import firebase from "../firebase";

const initialState = {
  student: {},
  studentList: [],
  loading: true,
  lastStudent: null,
  moreStudents: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const limit = 4;

  const studentQuery = firebase
    .firestore()
    .collection("students")
    .orderBy("name");

  function getStudents() {
    let students;

    studentQuery.limit(limit).onSnapshot((snapshot) => {
      students = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
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

    setLoading(false);
  }

  function setLoading(payload) {
    dispatch({
      type: "SET_LOADING",
      payload,
    });
  }

  function getMoreStudents(snapshot) {

    const last = snapshot.docs[snapshot.docs.length - 1];
    dispatch({ type: "SET_LAST_STUDENT", payload: last });
    const newStudents = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const studentList = [...state.studentList, ...newStudents];

    dispatch({ type: "UPDATE_STUDENT_LIST", payload: studentList });



  }

 

  function nextStudents() {
    studentQuery
      .startAfter(state.lastStudent)
      .limit(limit)
      .onSnapshot((snapshot) => {
        snapshot.empty ? console.log("complete") : getMoreStudents(snapshot);
      });
  }

  return (
    <GlobalContext.Provider
      value={{
        studentList: state.studentList,
        loading: state.loading,
        student: state.student,
        moreStudents: state.moreStudents,
        getStudents,
        getStudentById,
        nextStudents,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
