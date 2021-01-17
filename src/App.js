import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import AboutPage from "./pages/AboutPage/AboutPage";
import PosesPage from "./pages/PosesPage/PosesPage";
import ContactPage from "./pages/ContactPage/ContactPage";

import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { getYogaPoses } from "./Services/api";

import "./App.css";

function App() {
  const [yogaData, setYogaData] = useState({
    sanskrit_name: "",
    english_name: "",
    img_url: "",
  });

  async function getAppData() {
    const data = await getYogaPoses();
    setYogaData({
      results: data,
    });
    console.log(data);
  }

  useEffect(() => {
    getAppData();
  }, []);

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" render={(props) => <AboutPage />} />

        <Route
          exact
          path="/poses"
          render={(props) => <PosesPage yogaPoses={yogaData} />}
        />

        <Route exact path="/contact" render={(props) => <ContactPage />} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
