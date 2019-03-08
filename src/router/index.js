import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import DefaultLayout from '../layout/default'

export default () => (
    <BrowserRouter>
        <Switch>
            {/*<Route exact path="/login" component={Login}></Route>*/}
            <Route path="/" component={DefaultLayout}></Route>
        </Switch>
    </BrowserRouter>
)
