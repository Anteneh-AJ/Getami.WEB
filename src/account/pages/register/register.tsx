import React from "react";
import { Container, Box, TextField, Paper, Button } from "@material-ui/core";
import "./register.scss";

export function Register() {
    return (
        <Container className={"register-container"}>
            <Paper className={"register-paper"}>
                <Box width={"50%"} display={"inline-block"} className={"register-side-description"}>
                </Box>
                <Box marginBottom={"5%"} width={"50%"} display={"inline-block"}>
                    <form>
                        <Box margin={"10% 0% 20% 0%"}>
                            <Box fontSize={36} fontWeight={"light"} textAlign={"center"}>
                                Welcome to Getem
                            </Box>
                        </Box>
                        <Box margin={"5% 15% 5% 15%"} >
                            <TextField
                                label={"Full name"}
                                name={"name"}
                                fullWidth
                                required
                            />
                        </Box>
                        <Box margin={"5% 15% 5% 15%"} >
                            <TextField
                                label={"Email address"}
                                name={"email"}
                                fullWidth
                                required
                            />
                        </Box>
                        <Box margin={"5% 15% 10% 15%"}>
                            <TextField
                                label={"Password"}
                                name={"email"}
                                fullWidth
                                required
                            />
                        </Box>

                        <Box margin={"5% 15% 10% 15%"}>
                            <Button fullWidth color={"primary"} variant={'contained'}>
                                Register
                            </Button>
                        </Box>
                        <Box margin={"3%"} borderBottom={"black"} textAlign={"center"}>
                            <Button>
                                Already have an account?
                            </Button>
                        </Box>
                    </form>
                </Box>

            </Paper>
        </Container>
    )
}