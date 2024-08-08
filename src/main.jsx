import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes/App.jsx'
import ErrorPage from './Components/error-page.jsx'
import Aboutus from './Routes/Aboutus.jsx'
import Departments from './Routes/Departments.jsx'
import Pointcalculator from './Routes/Pointcalculator.jsx'
import { EventProvider } from './Components/Eventcontext.jsx'
import Calendar from './Routes/Calendar.jsx'
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
  },
  {
    path: "/betas/Pointcalculator",
    element: <Pointcalculator />
  },
  {
    path: "/Calendar",
    element: <Calendar />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EventProvider>
    <RouterProvider router={router} />
    </EventProvider>
  </React.StrictMode>,
)
