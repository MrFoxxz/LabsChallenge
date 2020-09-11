import React from "react";
import { Switch, Route } from "react-router-dom"
import Home from "./components/home.js";
import catalog from "./components/catalog.js";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/catalogo" component={catalog}/>
        </Switch>
    )
}

export default Routes;

