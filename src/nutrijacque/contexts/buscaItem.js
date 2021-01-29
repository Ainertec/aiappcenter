import React, { createContext, useContext, useState } from "react";

const BuscaItemContext = createContext({});

export const BuscaItemProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    function iniciarVariavelBuscaItem() {
        setItems([]);
    }

    return (
        <BuscaItemContext.Provider
            value={{
                items,
                setItems,
                iniciarVariavelBuscaItem
            }}
        >
            {children}
        </BuscaItemContext.Provider>
    );
};
export function useBuscaItem() {
    const context = useContext(BuscaItemContext);
    return context;
}