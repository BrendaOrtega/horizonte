import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Slide from "./components/Slide"

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Slide} />
        <Route path="/home" component={Home}/>
    </Switch>
);
export default Routes;