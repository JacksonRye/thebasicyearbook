import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchAppBar from "./Components/Header";
import SimpleContainer from "./Components/SimpleContainer";
import { StudentDetail } from "./Components/StudentDetail";
import { GlobalProvider } from "./context/GlobalState";

const routes = [
  { path: "/", name: "StudentList", Component: SimpleContainer },
  { path: "/detail/:id", name: "StudentDetail", Component: StudentDetail },
];

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#63ccff",
      main: "#009be5",
      dark: "#006db3",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffffff",
      main: "#edf0f2",
      dark: "#bbbebf",
      contrastText: "#000000",
    },
  },
});
function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <SearchAppBar />
          <Router>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path} component={Component} />
            ))}
          </Router>
        </div>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
