import React from 'react'
import {BrowserRouter as Router,Route,
  Redirect,Switch} from 'react-router-dom';
import JikanApp from './Components/JikanApp'
import Home from './Pages/Home'

function App() {
  return (
    
    <Router>
        <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home}>
          
        </Route>
          <Route exact path="/app" component={JikanApp} />
        </Switch>
      
    </Router>
  )
}

export default App
