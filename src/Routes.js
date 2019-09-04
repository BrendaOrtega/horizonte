import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Slide from "./components/Slide"
import WhatWeDo from "./components/WhatWeDo";
import WhatWeThink from "./components/WhatWeThink";
import Contact from "./components/Contact";
import WhatWeAre from "./components/WhatWeAre";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Slide} />
        <Route path="/home" component={Home}/>
        <Route path="/quienes-somos-horizonte" component={WhatWeAre}/>
        <Route path="/que-hacemos-horizonte" component={WhatWeDo}/>
        <Route path="/que-pensamos-horizonte" component={WhatWeThink}/>
        <Route path="/contacto" component={Contact}/>
    </Switch>
);
export default Routes;