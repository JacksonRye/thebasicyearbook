
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchAppBar from "./Components/Header";
import SimpleContainer from "./Components/SimpleContainer";
import { StudentDetail } from "./Components/StudentDetail";
import { GlobalProvider } from "./context/GlobalState";

const routes = [
  { path: "/", name: "StudentList", Component: SimpleContainer },
  { path: "/detail/:id", name: "StudentDetail", Component: StudentDetail },
];
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <SearchAppBar />
        <Router>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path} component={Component} />
          ))}
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
