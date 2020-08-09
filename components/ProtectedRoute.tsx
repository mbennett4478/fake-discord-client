import React, { useEffect } from "react";
import useAuth from "../contexts/AuthContext";
import { useRouter } from "next/router";

function ProtectedRoute(Component) {
  return function () {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated && !loading) router.push("/login");
    }, [loading, isAuthenticated]);

    return <Component {...arguments} />;
  };
}

export default ProtectedRoute;
