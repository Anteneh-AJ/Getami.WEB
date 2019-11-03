import React from "react"
import { Button, Typography, Toolbar, AppBar, Box } from "@material-ui/core"
import "./header.scss";
import { history } from "../../../account/configuration/account-routes";

interface INavLinks {

    icon: React.ReactNode,
    linkText: string
    route: string

}
interface IHeaderProps {
    navlinks: INavLinks[]
}

export function Header(props: IHeaderProps) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={"title"}>
                    Getem
                </Typography>
                {props.navlinks.map((nav) =>
                    <Box>
                        <Button color="inherit" onClick={() => history.push(nav.route)}>
                            {nav.icon} &emsp;
                            {nav.linkText}
                        </Button>
                    </Box>
                )}
                &emsp;
            </Toolbar>
        </AppBar>
    )
}