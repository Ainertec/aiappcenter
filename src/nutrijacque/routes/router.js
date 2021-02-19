import React from "react";

import RotaNutriJacque from "./index";
import { CategoryProvider } from "../contexts/category";
import { ItemProvider } from "../contexts/item";
import { BuscaItemProvider } from "../contexts/buscaItem";
import { AuthProvider } from "../contexts/auth";
import { AlertProvider } from "../contexts/alertN";
import { ProgressoProvider } from "../contexts/prog";
import { ValidationProvider } from '../validation/validation';
import { NavigationControlerProvider } from '../contexts/navigationControler';

export default function RotasMcDonuts() {
    return (
        <AuthProvider>
            <AlertProvider>
                <ProgressoProvider>
                    <ValidationProvider>
                        <CategoryProvider>
                            <ItemProvider>
                                <BuscaItemProvider>
                                    <NavigationControlerProvider>
                                        <RotaNutriJacque />
                                    </NavigationControlerProvider>
                                </BuscaItemProvider>
                            </ItemProvider>
                        </CategoryProvider>
                    </ValidationProvider>
                </ProgressoProvider>
            </AlertProvider>
        </AuthProvider>
    );
}