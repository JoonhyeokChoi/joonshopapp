import './App.css'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

// page components
import Home from './pages/Home'
import About from './pages/Register'
import Contact from './pages/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link> */}
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />  
          </Route>
          <Route path="/register">
            <About />  
          </Route>
          <Route path="/login">
            <Contact />  
          </Route>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App
