import './dist/css/main.css'
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
