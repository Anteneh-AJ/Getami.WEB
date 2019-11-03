import React from "react"
import { Switch, Route } from "react-router"
import { Login, Register } from "./account-import";
import { Header } from "../../shared/components/header/header";
import { AccountCircle, PersonAdd } from "@material-ui/icons";
export function AccountRoutes() {
    const navlinks = [
        {
            icon: <AccountCircle />,
            linkText: "Login"
        },
        {
            icon: <PersonAdd />,
            linkText: "Regiser"
        }
    ]
    return (
        <Switch>
            <>
                <Header navlinks={navlinks} />
                <>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={Register} />
                </>
            </>
        </Switch>
    )
}