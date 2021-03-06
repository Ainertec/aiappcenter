import React, { createContext, useContext, useState } from "react";

const ItemContext = createContext({});

export const ItemProvider = ({ children }) => {
    const [id, setId] = useState('');
    const [fotoCapa, setFotoCapa] = useState('');
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0.00);
    const [linkPagamento, setLinkPagamento] = useState('');
    const [descricao, setDescricao] = useState('');
    const [linkVideo, setLinkVideo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [comments, setComments] = useState([]);

    function iniciarVariaveisItem() {
        setId();
        setFotoCapa();
        setNome();
        setPreco(0.00);
        setLinkPagamento();
        setDescricao();
        setLinkVideo();
        setCategoria();
        setCreatedAt();
        setComments([]);
    }

    return (
        <ItemContext.Provider
            value={{
                id,
                setId,
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
                categoria,
                setCategoria,
                createdAt,
                setCreatedAt,
                comments,
                setComments,
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