import React from "react";

import RotaNutriJacque from "./index";
import { CategoryProvider } from "../contexts/category";
import { ItemProvider } from "../contexts/item";
import { BuscaItemProvider } from "../contexts/buscaItem";
import { AuthProvider } from "../contexts/auth";
import { AlertProvider } from "../contexts/alertN";
//import { UserProvider } from "../contexts/user";
import { ProgressoProvider } from "../contexts/prog";
//import { ValidationProvider } from '../validation/validation';

export default function RotasMcDonuts() {
    return (
        <AuthProvider>
            <AlertProvider>
                <ProgressoProvider>
                    <CategoryProvider>
                        <ItemProvider>
                            <BuscaItemProvider>
                                <RotaNutriJacque />
                            </BuscaItemProvider>
                        </ItemProvider>
                    </CategoryProvider>
                </ProgressoProvider>
            </AlertProvider>
        </AuthProvider>
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