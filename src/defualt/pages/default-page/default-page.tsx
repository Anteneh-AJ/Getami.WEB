import React from 'react'
import { Login } from "../../../account/pages/login/login"
import { Header } from "../../../shared/components/header/header";

export function DefaultPage() {
    return (
        <div>
            <Header />
            <Login />
        </div>
    );
}