import React from 'react'
import {BrowserRouter as Router,Route,
  Redirect,Switch} from 'react-router-dom';
import JikanApp from './Components/JikanApp'
import jikanApp from './Pages/jikanApp'
import Home from './Pages/home'

function App() {
  return (
    
    <Router>
        <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home}>
          
        </Route>
          <Route exact path="/app" component={jikanApp} />
        </Switch>
      
    </Router>
  )
}

export default App
