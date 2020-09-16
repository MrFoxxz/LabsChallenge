import React from "react";
import { Switch, Route } from "react-router-dom"
import Catalog from "./components/catalog.js";
import Details from "./components/details.js";
import Home from "./components/home.js";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route
                path='/details/:id'
                render={({ match }) => <Details id={match.params.id} />}
            />
            
        </Switch>
    )
}

export default Routes;

