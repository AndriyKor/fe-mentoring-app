// @ts-nocheck
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./constants";
import { Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "auth";

const Router = () => {
  const data = useContext(AuthContext);

  // console.log("data", data);
  const { isAuthorized } = data.state;
  console.log("isAuthorized", isAuthorized);
  return (
    <Switch>
      {/* {PUBLIC_ROUTES.map((route) => {
        const { path, component } = route;
        return <Route key={path} path={path} exact component={component} />;
      })}
      {PRIVATE_ROUTES.map((route) => {
        const { path, component } = route;
        return <Route key={path} path={path} exact component={component} />;
      })}
    */}

      {/* <Redirect from="*" to={isAuthorized ? "/dashboard" : "/sign-in"} /> */}

      {!isAuthorized
        ? PUBLIC_ROUTES.map((route) => {
            const { path, component } = route;
            return <Route key={path} path={path} component={component} exact />;
          })
        : PRIVATE_ROUTES.map((route) => {
            const { path, component, exact = false } = route;
            return <Route key={path} path={path} component={component} />;
          })}

      {/* Note redirect breaks nested routes  */}
      {/* <Redirect from="*" to={isAuthorized ? "/dashboard" : "/sign-in"} /> */}
      {/* {isAuthorized && <Redirect from="/dashboard" to="/sign-in" />} */}
    </Switch>

    //Redirect to sign in
    //Render PRIVATE routes

    //init context
  );
};

export default Router;
