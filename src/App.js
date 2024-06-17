// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "../src/Pages/Layout/Header/Header"
// import Registration from "./Pages/Auth/Registration/Registration";
// import Login from "./Pages/Auth/Login/Login";
// import Update_Password from "../src/Pages/Auth/Update_Password/Update_Password"
// import Courses from "../src/Pages/Cms/Courses/Courses"
// import About from "./Pages/Cms/About/About";
// import Home from "./Pages/Cms/Home/Home";
// import Contact from "../src/Pages/Cms/Contact/Contact"
// import Footer from "./Pages/Layout/Footer/Footer";
// import Blog from "./Pages/Cms/Blog/Blog";
// import BlogDetails from "./Pages/Cms/BlogDetails/BlogDetails";
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Header/>
//       <Routes>
//         <Route path="/"  element={<Home/>}/>
//         <Route path="/Registration"  element={<Registration/>}/>
//         <Route path="/Login"  element={<Login/>}/>
//         <Route path="/Update_Password" element={<Update_Password/>}/>
//         <Route path="/Courses" element={<Courses/>}/>
//         <Route  path="/About" element={<About/>}/>
//         <Route path="/Contact"  element={<Contact/>}/>
//         <Route path="/Blog"  element={<Blog/>}/>
//         <Route path="/Blog/:id"  element={<BlogDetails/>}/>
//       </Routes>
//       <Footer/>
//       </BrowserRouter>
   
//     </div>
//   );
// }

// export default App;



import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Component, Suspense, lazy } from "react";
import Footer from "./Pages/Layout/Footer/Footer";
import { toast } from "react-toastify";
import BlogDetails from "./Pages/Cms/BlogDetails/BlogDetails";

const Login = lazy(() => import("./Pages/Auth/Login/Login"));
const Registration = lazy(() =>
  import("./Pages/Auth/Registration/Registration")
);
const Header = lazy(() => import("../src/Pages/Layout/Header/Header"));
const Update_Password = lazy(() => import("../src/Pages/Auth/Update_Password/Update_Password"));
const Home = lazy(() => import("./Pages/Cms/Home/Home"));
const About = lazy(() => import("./Pages/Cms/About/About"));
const Courses = lazy(() => import("../src/Pages/Cms/Courses/Courses"));
const Contact = lazy(() => import("../src/Pages/Cms/Contact/Contact"));

const Blog = lazy(() => import("./Pages/Cms/Blog/Blog"));

function Private({ children }) {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  return token != null || token != undefined ? (
    children
  ) : (
    <>
      <Navigate to={"/"} />
      {toast.error("login First")}
    </>
  );
}

const publicRoutesName = [
  { path: "/Login",
   Component: <Login /> },
  {
    path: "/Registration",
    Component: <Registration />,
  },
  {
    path: "/Update_Password",
    Component: <Update_Password />,
  },
  {
    path: "/",
    Component: <Home />,
  },
];
const privateRoutesName = [
  {
    path: "/About",
    Component: <About />,
  },
  {
    path: "/Contact",
    Component: <Contact />,
  },
  {
    path: "/Courses",
    Component: <Courses />,
  },
  {
    path: "/Blog",
    Component: <Blog />,
  },
  {
    path:"/Blog/:id",
    Component:<BlogDetails/>
  }
];

function App() {
  return (
    <Suspense fallback={<h1>Loading......</h1>}>
      <BrowserRouter>
        <Header />
        <Routes>
          {publicRoutesName.map((item) => (
            <Route path={item.path} element={item.Component} />
          ))}
          {privateRoutesName.map((item) => (
            <Route
              path={item.path}
              element={<Private>{item.Component}</Private>}
            />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
