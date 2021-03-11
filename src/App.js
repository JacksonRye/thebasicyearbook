import "./App.css";
import SearchAppBar from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SimpleContainer from "./Components/SimpleContainer";
import { StudentDetail } from "./Components/StudentDetail";

const routes = [
  { path: "/", name: "StudentList", Component: SimpleContainer },
  { path: "/detail", name: "StudentDetail", Component: StudentDetail },
];
function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Router>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path} component={Component} />
        ))}
      </Router>
    </div>
  );
}

export default App;
