import React from "react";
import { Switch, Route } from "react-router-dom"
import Home from "./components/home.js";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Products" component={Home}/>
        </Switch>
    )
}

export default Routes;

