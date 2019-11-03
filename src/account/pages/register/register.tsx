import React from "react";
import { Container, Box, TextField, Paper, Button, IconButton } from "@material-ui/core";
import "./register.scss";
import { Facebook, Twitter } from '@material-ui/icons';
import Google from "../../../assets/images/google-logo.png";
export function Register() {
    return (
        <Container className={"register-container"}>
            <Paper className={"register-paper"}>
                <Box width={"50%"} display={"inline-block"} className={"register-side-description"}>
                </Box>
                <Box marginBottom={"5%"} width={"50%"} display={"inline-block"}>
                    <form>
                        <Box >
                            <Box marginTop={"10%"} fontSize={36} fontWeight={"light"} textAlign={"center"}>
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
                        <Box textAlign={"center"} margin={"5% 15% 5% 15%"}>
                            <Box fontSize={20}> OR  </Box>
                            <IconButton aria-label="delete">
                                <img src={Google} width={25} height={25} alt={'Google'} />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <Facebook style={{ color: "rgb(0,100,200)" }} />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <Twitter style={{ color: "lightblue" }} />
                            </IconButton>
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