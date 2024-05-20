import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './routes/login.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './routes/signup.tsx';
import Dashboard from './routes/dashboard.tsx';
import ProtectedRoute from './routes/ProtectedRoutes.tsx';
import { AuthProvider } from './auth/AuthProvider.tsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  // rutas protegidas
  {
    path: "/",
    element: <ProtectedRoute/>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard/>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
