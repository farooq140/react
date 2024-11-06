import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { getHubInfoLoader } from "./components/Github/Github";
import Home from './components/Home/Home';
import "./index.css";
import Layout from './Layout';
// import Contact from '../components/Contact/Contact'
import Github from "./components/Github/Github";
import User from "./components/User/User";
import './index.css';

// const router=createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:[
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route path="" element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:id" element={<User />} />
        <Route
        loader={getHubInfoLoader}
        
        path="github" 
        element={<Github />}
        />
      </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   </React.StrictMode>,
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )