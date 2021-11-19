import GlobalStyle from "./Components/GlobalStyle";
import Nav from "./Components/Nav";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";
import {Switch, Route, useLocation} from 'react-router-dom';
import MovieDetail from "./Pages/MovieDetail";
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
