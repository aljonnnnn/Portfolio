// import './styles/global.scss'
import Header from './components/Header/Header'
import Home from './pages/Home';
import About from './pages/About'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Router>
        <GlobalStyle/>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
