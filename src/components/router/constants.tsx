import Dashboard from "pages/dashboard";
import SignIn from "pages/sign-in";

export const ROUTE_SIGN_IN = "/sign-in";
export const ROUTE_DASHBOARD = "/dashboard";

export const PUBLIC_ROUTES = [{ path: ROUTE_SIGN_IN, component: SignIn }];
export const PRIVATE_ROUTES = [
  { path: ROUTE_DASHBOARD, component: Dashboard, exact: false },
  //   { path: "/dashboard/coins/:name", component: Dashboard },
];
