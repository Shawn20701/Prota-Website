import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes/App.jsx'
import ErrorPage from './Components/error-page.jsx'
import Aboutus from './Routes/Aboutus.jsx'
import Programming from './Routes/Programming.jsx'
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
    path: "/about-us/Programming",
    element: <Programming />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
