import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import First_Navbar from './component/First_Navbar/First_Navbar';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <First_Navbar />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
