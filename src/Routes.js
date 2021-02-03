import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Main from './Components/Main'
import Order from './Components/Order';
import Tab from './Components/Tab';
import Offer from './Components/Offer';
import Services from './Components/Services';
import Cart from './Components/Cart';


function Routes() {
    return (
       <BrowserRouter>
       <Switch>
           <Route path="/" exact component={Main}/>
           <Route path="/Order" exact component={Order}/>
           <Route path="/Tab" exact component={Tab}/>
           <Route path="/Offer" exact component={Offer}/>
           <Route path="/Services" exact component={Services}/>
           <Route path="/Cart" exact component={Cart}/>
           

           {/* <Route path="/pie" exact component={}/> */}
           {/* <Route path="/Order" exact component={Order}/>
           <Route path="/Order" exact component={Order}/> */}


           
       </Switch>
       </BrowserRouter>
    )
}

export default Routes
