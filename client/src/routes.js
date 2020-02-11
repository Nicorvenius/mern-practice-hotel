import React from "react";
import {Switch, Route, Redirect} from "react-router-dom/"
import CreatePage from "./pages/CreatePage";
import RoomsList from "./pages/RoomsList";
import AuthPage from "./pages/AuthPage";


export const useRoutes = (isAuthenticated, props) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/list" exact>
                    <RoomsList token = {props.token}/>
                </Route>
                <Route path="/create" exact>
                    <CreatePage token = {props.token}/>
                </Route>
                <Redirect to="/create"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage login = {props.login}/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}
