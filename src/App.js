import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import What_we_do from './component/What_we_do/what_we_do';
import Activities from './component/Activities/Activities';
import gallery from './component/gallery/gallery';
import Contact from './component/Contact/Contact';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Arumbugal</title>
            </Helmet>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/what_we_do"component={What_we_do} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/gallery" component={gallery} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
