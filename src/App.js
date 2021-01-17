import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage/AboutPage";
import PosesPage from "./pages/PosesPage/PosesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" render={(props) => <AboutPage />} />

        <Route exact path="/poses" render={(props) => <PosesPage />} />

        <Route exact path="/contact" render={(props) => <ContactPage />} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
