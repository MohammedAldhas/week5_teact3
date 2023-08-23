// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import Nav from "./components/Nav.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
<>
  <BrowserRouter>
<Nav></Nav>
    <App />
  </BrowserRouter>
</>

);
