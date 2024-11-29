import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './assets/Components/layout/layout.jsx'
import App from './App.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './assets/Components/Home/Home.jsx'
import Dashboard from './assets/Components/Dashboard/Dashboard.jsx'
import Login from './assets/Components/Login/login.jsx';
import Signup from './assets/Components/SignUp/Signup.jsx'

const router = createBrowserRouter ([
  {
    path : '/',
    element : <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <Signup />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
