import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './App';
function Route1() {
    return (
       <BrowserRouter>
       <Switch>
           <Route path="/" exact component={App}/>
           </Switch>
       </BrowserRouter>
    )
}
export default Route1