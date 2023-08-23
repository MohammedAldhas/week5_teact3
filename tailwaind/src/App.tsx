import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import Error from "./pages/Error";
// import Card from "./components/Card";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home></Home>}></Route> */}
        {/* <Route path="/about" element={<Aboute></Aboute>}></Route>
        {/* <Route path="/about" element={<Aboute></Aboute>}></Route>
        <Route path="/contact" >
          <Route path="" element={<Contact></Contact>}></Route>
          <Route path="info" element={<Info></Info>}></Route>
        </Route> */}

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </>
  );
}

export default App;
