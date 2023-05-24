import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ARITCLE_ROUTES } from "./Components/routeConstant";
import SideBar from "./Components/Article/SideBar";

function App() {
  return (
    <body className="flex flex-row">
      <BrowserRouter>
        <SideBar />
        <section className="py-7 px-8 max-h-screen w-full overflow-hidden overflow-y-scroll">
          <Switch>
            <Route exact path="/">
              <Redirect to="/profile" />
            </Route>
            {ARITCLE_ROUTES.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact
                component={route.component}
              />
            ))}
          </Switch>
        </section>
      </BrowserRouter>
    </body>
  );
}

export default App;
