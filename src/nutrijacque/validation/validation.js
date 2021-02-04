import React, { createContext, useContext, useState } from "react";

const ValidationContext = createContext({});

export const ValidationProvider = ({ children }) => {

    function validaCampoNumber(dado) {
        let result = true;
        for (let item of dado) {
            if (item <= 0) {
                result = false;
            }
        }
        return result;
    }

    function validaCampoText(dado) {
        let result = true;
        for (let item of dado) {
            if (item == '' || item == null) {
                result = false;
            }
        }
        console.log('entre' + dado)
        return result;
    }

    return (
        <ValidationContext.Provider
            value={{
                validaCampoNumber,
                validaCampoText,
            }}
        >
            {children}
        </ValidationContext.Provider>
    );

}

export function useValidation() {
    const context = useContext(ValidationContext);
    return context;
}