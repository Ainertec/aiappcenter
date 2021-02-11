import React, { createContext, useContext, useState } from "react";

const NavigationControlerContext = createContext({});

export const NavigationControlerProvider = ({ children }) => {
    const [navegacao, setNavegacao] = useState(0);

    return (
        <NavigationControlerContext.Provider
            value={{
                navegacao,
                setNavegacao,
            }}
        >
            {children}
        </NavigationControlerContext.Provider>
    );
};
export function useNavigationControler() {
    const context = useContext(NavigationControlerContext);
    return context;
}
