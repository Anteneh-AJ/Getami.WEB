import React from 'react'
import { Register } from "../../../account/pages/register/register"
import { Header } from "../../../shared/components/header/header";
import { Box } from '@material-ui/core';

export function DefaultPage() {
    return (
        <Box bgcolor={"primary"}>
            <Register />
        </Box>
    );
}