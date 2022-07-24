// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
// import Nav from './Components/nav'
import Home from "./Components/Home";
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Policy from './Components/Policy';
import Error from './Components/Error';
import List from './Components/List';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <List/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/policy" component={Policy} />
        <Route component={Error}/>
        </Switch>

      
    </div>
  );
}

export default App;



