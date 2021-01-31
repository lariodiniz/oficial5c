import React from 'react'
import '../../common/dependencies'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../../views/home/home'
import Rules from '../../views/rules/rules'

const main = props => (
    <BrowserRouter>
        <Switch>
            <Route path="/oficial5c" exact > <Home /></Route>
            <Route path="/oficial5c/regras" > <Rules /></Route>
        </Switch>
    </BrowserRouter>
)

export default main