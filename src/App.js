import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/ContactPage/ContactPage";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <ContactPage />

      <Footer />
    </div>
  );
}

export default App;
