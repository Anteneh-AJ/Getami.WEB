import React from 'react'
import { Login } from "../../../account/pages/login/login"
import { Header } from "../../../shared/components/header/header";
import { Box } from '@material-ui/core';

export function DefaultPage() {
    return (
        <Box bgcolor={"primary"}>
            <Header />
            <Login />
        </Box>
    );
}