import React, { createContext, useContext, useState } from "react";

const CategoryContext = createContext({});

export const CategoryProvider = ({ children }) => {
    const [name, setName] = useState();

    function iniciarVariavelCategory() {
        setName();
    }

    return (
        <CategoryContext.Provider
            value={{
                name,
                setName,
                iniciarVariavelCategory
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
};
export function useCategory() {
    const context = useContext(CategoryContext);
    return context;
}