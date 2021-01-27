import React, { createContext, useContext, useState } from "react";

const ItemContext = createContext({});

export const ItemProvider = ({ children }) => {
    const [fotoCapa, setFotoCapa] = useState('');
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0.00);
    const [linkPagamento, setLinkPagamento] = useState('');
    const [descricao, setDescricao] = useState('');
    const [linkVideo, setLinkVideo] = useState('');

    function iniciarVariaveisItem() {
        setFotoCapa();
        setNome();
        setPreco(0.00);
        setLinkPagamento();
        setDescricao();
        setLinkVideo();
    }

    return (
        <ItemContext.Provider
            value={{
                fotoCapa,
                setFotoCapa,
                nome,
                setNome,
                preco,
                setPreco,
                linkPagamento,
                setLinkPagamento,
                descricao,
                setDescricao,
                linkVideo,
                setLinkVideo,
                iniciarVariaveisItem
            }}
        >
            {children}
        </ItemContext.Provider>
    );
};
export function useItem() {
    const context = useContext(ItemContext);
    return context;
}