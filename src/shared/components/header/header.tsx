import React from "react"
import { Button, Typography, Toolbar, AppBar, Box } from "@material-ui/core"
import "./header.scss";

interface INavLinks {

    icon: React.ReactNode,
    linkText: string

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
                        <Button color="inherit">
                            {nav.icon} &nbsp;
                            {nav.linkText}
                        </Button>
                    </Box>
                )}
                &emsp;
            </Toolbar>
        </AppBar>
    )
}