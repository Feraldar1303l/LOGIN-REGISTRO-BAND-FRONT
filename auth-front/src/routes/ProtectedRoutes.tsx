import { Outlet, Navigate } from "react-router-dom";
// import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";

// Funcion para condicionar si esta autenticado para usar las rutas protegidas
export default function ProtectedRoute(){
    const auth = useAuth();
    return auth.isAuthenticated ? <Outlet/> : <Navigate to="/" /> 
}

