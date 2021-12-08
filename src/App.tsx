import Router from "components/router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "auth";
import { Header } from "partials/header";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Header />
        <Router />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
