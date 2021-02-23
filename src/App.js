import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Albums from './components/Albums';
import Users from './components/Users';
const App = () => {
  return (
 
     <BrowserRouter>
     <Navbar/>
     <Switch>
     <Route exact path = "/" component = {Posts}/>
     <Route exact path ="/albums" component={Albums}/>
     <Route exact path ="/users" component ={Users}/>
     </Switch>
     </BrowserRouter>
    
  )
}

export default App
