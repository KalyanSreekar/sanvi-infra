import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="fullpageImage" src={require("./sanviinfra1.jpg")} />
      <img className="fullpageImage" src={require("./sanviinfra2.jpg")} />
      <img className="fullpageImage" src={require("./sanviinfra3.jpg")} />
      <div className="ContactUsdiv">
        <h1>Contact Us</h1>
        <div className="ContactUsData">
          <b className="data">sanviinfra@mapleheights.com</b>
          <b className="data">+91 0123456789</b>
        </div>
      </div>
    </div>
  );
}

export default App;
