import React from "react"
import { Switch, Route } from "react-router"
import { Index } from "./role-imports"


export function RoleRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={Index} />
        </Switch>
    )
}