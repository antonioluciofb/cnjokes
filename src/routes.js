import React from "react"
import { BrowserRouter, Switch , Route} from "react-router-dom"

import Main from "./pages/main/index"
import Jokes from "./pages/allJokes/index"
import Chosen from "./pages/chosen/index"

const Routes = () => (
    <BrowserRouter>
        <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/allJokes" component={Jokes}/>
                <Route path="/chosen/:qtn?" component={Chosen}/>
        </Switch>
    </BrowserRouter>
    
)

export default Routes