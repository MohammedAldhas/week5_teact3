import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Aboute from "./pages/About";
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
        <Route path="/about" element={<Aboute></Aboute>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      
    </>
  );
}

export default App;


// أنشاء مشروع جديد باسم react-02-lab . -داخل ملف src أنشاء مجلد components , بداخله انشاء مكوّن باستخدام طريقة Function حيت يكون مسؤول navbar وcomponents اخر اعرض بداخله معلومات المعسكر و مكون اخر يعرض صفحة التسجيل .
// قم بأستدعاء جميع المكونات وعرضها في الصفحة الرئسية .
// إجعل مكون navbar ظاهرا في جميع الصفحات , و صفحه محدده لعرض بيانات كل صفحة على حده .
// ضع عنوان مخصص (URL) لكل صفحة .
// ضع خيارات التنقل بين صفحات المشروع في الـnavbar .