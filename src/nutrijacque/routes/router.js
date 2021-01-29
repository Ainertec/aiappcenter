import React from "react";

import RotaNutriJacque from "./index";
import { CategoryProvider } from "../contexts/category";
import { ItemProvider } from "../contexts/item";
import { BuscaItemProvider } from "../contexts/buscaItem";
//import { AuthProvider } from "../contexts/auth";
//import { CartProvider } from "../contexts/cart";
//import { AlertProvider } from "../contexts/alertN";
//import { UserProvider } from "../contexts/user";
//import { ProgressoProvider } from "../contexts/prog";
//import { ValidationProvider } from '../validation/validation';
//import { LojaOpenProvider } from '../contexts/openShop';

export default function RotasMcDonuts() {
    return (
        <CategoryProvider>
            <ItemProvider>
                <BuscaItemProvider>
                    <RotaNutriJacque />
                </BuscaItemProvider>
            </ItemProvider>
        </CategoryProvider>
    );
}

/*
        <AuthProvider>
            <CartProvider>
                <AlertProvider>
                    <UserProvider>
                        <ProgressoProvider>
                            <ValidationProvider>
                                <LojaOpenProvider>
                                    <RotaMcDonuts />
                                </LojaOpenProvider>
                            </ValidationProvider>
                        </ProgressoProvider>
                    </UserProvider>
                </AlertProvider>
            </CartProvider>
        </AuthProvider>
*/