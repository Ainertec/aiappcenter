import React, { createContext, useContext, useState } from "react";

const CategoryContext = createContext({});

export const CategoryProvider = ({ children }) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [items, setItems] = useState([]);

    function iniciarVariavelCategory() {
        setId();
        setName();
        setItems([]);
    }

    return (
        <CategoryContext.Provider
            value={{
                id,
                setId,
                name,
                setName,
                items,
                setItems,
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