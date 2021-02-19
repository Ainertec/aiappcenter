import React, { createContext, useContext, useState } from "react";

const AlertContext = createContext({});

export const AlertProvider = ({ children }) => {
    const [abrir, setAbrir] = useState(false);
    const [msg, setMsg] = useState("Testando");
    const [type, setType] = useState("warning");

    return (
        <AlertContext.Provider
            value={{
                abrir,
                setAbrir,
                msg,
                setMsg,
                type,
                setType
            }}
        >
            {children}
        </AlertContext.Provider>
    );
};
export function useAlert() {
    const context = useContext(AlertContext);
    return context;
}
