import React from "react"
import { Switch, Route, Router } from "react-router"
import { Login, Register } from "./account-import";
import { Header } from "../../shared/components/header/header";
import { AccountCircle, PersonAdd } from "@material-ui/icons";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
export function AccountRoutes() {
    const navlinks = [
        {
            icon: <AccountCircle fontSize={"small"} />,
            linkText: "Login",
            route: "/"
        },
        {
            icon: <PersonAdd fontSize={"small"} />,
            linkText: "Regiser",
            route: "/register"
        }
    ]
    return (
        <Switch>
            <Router history={history}>
                <Header navlinks={navlinks} />
                <>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={Register} />
                </>
            </Router>
        </Switch>
    )
}