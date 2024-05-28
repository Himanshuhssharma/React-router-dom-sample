import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./index.css"
import Layout from "./components/Layout";
import Homes from "./components/Homes";
import About from "./components/About"
import Contact from "./components/Contact"
import User from "./components/User";


function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Homes/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="user/:id" element={<User/>} />
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
