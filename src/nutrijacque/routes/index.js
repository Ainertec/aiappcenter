import React from "react";
import AppRoutes from "./nutrijacque.routes";

import { useAuth } from "../contexts/auth";

const Routes = () => {
    const { loading, signed } = useAuth();

    // if (loading) {
    //   return <AppLoading />;
    // }

    return <AppRoutes />;
};

export default Routes;
