import './App.css';
import Login from './components/Login';
import About from './components/About';
import Register from './components/Register';
import Home from './components/Home';
import Request from './components/Request';
import Create from './components/Create';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return ( 
    <Router>
      <Switch>
        <Route path="/About">
          <About/>
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Create">
          <Create />
        </Route>
        <Route path="/Request">
          <Request />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
