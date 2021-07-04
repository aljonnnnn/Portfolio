import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { Home, About, Projects, Contact } from "./pages";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Router>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
