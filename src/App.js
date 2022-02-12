import logo from "./logo.svg";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiHome } from "react-icons/fi";

function App() {
  const navigator = (link) => {
    window.open(link);
  };
  return (
    <div className="App">
      <img className="fullpageImage" src={require("./sanviinfra1.jpg")} />
      <img className="fullpageImage" src={require("./sanviinfra2.jpg")} />
      <img className="fullpageImage" src={require("./sanviinfra3.jpg")} />
      <div className="corouselDiv">
        <Carousel className="corousel" autoPlay infiniteLoop>
          <div>
            <img src={require("./images/slide1.JPG")} />
          </div>
          <div>
            <img src={require("./images/slide2.JPG")} />
          </div>
          <div>
            <img src={require("./images/slide3.JPG")} />
          </div>
          <div>
            <img src={require("./images/slide4.JPG")} />
          </div>
          <div>
            <img src={require("./images/slide5.JPG")} />
          </div>
          <div>
            <img src={require("./images/slide6.JPG")} />
          </div>
        </Carousel>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="button"
          onClick={() => {
            navigator(
              "https://drive.google.com/file/d/1nN74KxzxHVWudJ2buSsvCJwCGRaE8sBt/view?usp=drivesdk"
            );
          }}
        >
          <h3 className="styledlink">Open Broucher</h3>
        </div>
      </div>
      <div className="ContactUsdiv">
        <h1 className="heading">Contact Us</h1>
        <div className="ContactUsData">
          <div className="sameRow">
            <FiMail className="iconStyle" />
            <h2 className="subheading">Mail us</h2>
          </div>
          <b className="data">saanviinfra21@gmail.com</b>
          <div className="sameRow">
            <FiPhoneCall className="iconStyle" />
            <h2 className="subheading">Call us</h2>
          </div>
          <b className="data">Arpit patel - +91 9003084857</b>
          <b className="data">Sanjay patel - +91 97259 04806</b>
          <div className="sameRow">
            <FiHome className="iconStyle" />
            <h2 className="subheading">Meet us</h2>
          </div>
          <b className="data">
            Maple heights, Besides Sparsh Bunglow, Nr, Sardar Patel Ring Rd,
          </b>
          <b className="data">
            New Shahibaugh, Nana Chiloda, Ahmedabad, Gujarat 382330
          </b>
          <div
            className="button"
            onClick={() => {
              navigator("https://maps.app.goo.gl/5Pwq4bvwYamovYKx7");
            }}
          >
            <h3 className="styledlink">Navigate to Maple Heights</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
