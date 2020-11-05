import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [question, setQuestion] = useState('Qual o modelo do seu primeiro carro?');
    const [response, setResponse] = useState();
    const [phone, setPhone] = useState();
    const [userDistrict, setUserDistrict] = useState();
    const [street, setStreet] = useState();
    const [addressNumber, setAddressNumber] = useState('0');
    const [reference, setReference] = useState('Nenhuma');

    function iniciarVariaveisUser() {
        setName();
        setUsername();
        setPassword();
        setQuestion('Qual o modelo do seu primeiro carro?');
        setResponse();
        setPhone();
        setUserDistrict();
        setStreet();
        setAddressNumber('0');
        setReference('Nenhuma');
    }

    return (
        <UserContext.Provider
            value={{
                name,
                setName,
                username,
                setUsername,
                password,
                setPassword,
                question,
                setQuestion,
                response,
                setResponse,
                phone,
                setPhone,
                userDistrict,
                setUserDistrict,
                street,
                setStreet,
                addressNumber,
                setAddressNumber,
                reference,
                setReference,
                iniciarVariaveisUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
export function useUser() {
    const context = useContext(UserContext);
    return context;
}