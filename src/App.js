import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FormRequest from "./components/FormRequest/FormRequest";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <FormRequest />

      <Footer />
    </div>
  );
}

export default App;
