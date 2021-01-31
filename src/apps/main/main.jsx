import React from 'react'
import '../../common/dependencies'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from '../../views/home/home'
import Rules from '../../views/rules/rules'

const main = props => (
    <HashRouter >
        <Switch>
            <Route path="/" exact > <Home /></Route>
            <Route path="/regras" > <Rules /></Route>
        </Switch>
    </HashRouter>
)

export default main