import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes/App.jsx'
import ErrorPage from './Components/error-page.jsx'
import Aboutus from './Routes/Aboutus.jsx'
import Departments from './Routes/Departments.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, 
  },
  {
    path: "/about-us",
    element: <Aboutus />
  },
  {
    path: "/about-us/Departments",
    element: <Departments />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
