/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case "UPDATE_STUDENT_LIST":
      return { ...state, studentList: action.payload };

    case "SET_STUDENT":
      return { ...state, student: action.payload };

    case "SET_LAST_STUDENT":
      return { ...state, lastStudent: action.payload };

    case "SET_MORE_STUDENTS":
      return { ...state, moreStudents: action.payload };

    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      break;
  }
};
