import React from "react"
import { Switch, Route } from "react-router"
import { DefaultPage } from "../configuration/default-imports";

export function DefaultRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={DefaultPage} />
        </Switch>
    )
}