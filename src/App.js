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
      <div className="corouselDiv">
        <Carousel
          autoPlay
          infiniteLoop
          transitionTime={1000}
          interval={3000}
          showThumbs={false}
          dynamicHeight={false}
        >
          <img src={require("./images/slide11.jpg")} />
          <img src={require("./images/slide13.jpg")} />
          <img src={require("./images/slide14.jpg")} />
          <img src={require("./images/slide15.jpg")} />
        </Carousel>
        <Carousel
          className="corousel"
          autoPlay
          infiniteLoop
          transitionTime={1000}
          interval={3000}
          showArrows
          showStatus
          showIndicators
        >
          <img src={require("./images/slide1.JPG")} />
          <img src={require("./images/slide2.JPG")} />
          <img src={require("./images/slide3.JPG")} />
          <img src={require("./images/slide4.JPG")} />
          <img src={require("./images/slide5.JPG")} />
          <img src={require("./images/slide6.JPG")} />
        </Carousel>
        <Carousel
          className="corousel"
          autoPlay
          infiniteLoop
          transitionTime={1000}
          interval={3000}
          showArrows
          showStatus
          showIndicators
        >
          <img src={require("./images/slide31.jpg")} />
          <img src={require("./images/slide32.jpg")} />
          <img src={require("./images/slide33.jpg")} />
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
          className="button margin-right"
          style={{ marginRight: "15px" }}
          onClick={() => {
            navigator(
              "https://drive.google.com/file/d/1nN74KxzxHVWudJ2buSsvCJwCGRaE8sBt/view?usp=drivesdk"
            );
          }}
        >
          <h3 className="styledlink">Open Broucher</h3>
        </div>
        <div
          className="button margin-left"
          style={{ marginLeft: "15px" }}
          onClick={() => {
            navigator("https://youtu.be/U19OZn2r5Yw");
          }}
        >
          <h3 className="styledlink">preview project</h3>
        </div>
      </div>
      <div className="ContactUsdiv">
        <h1 className="heading">Contact Us</h1>
        <div className="ContactUsData">
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
          <div className="sameRow">
            <FiPhoneCall className="iconStyle" />
            <h2 className="subheading">Call us</h2>
          </div>
          <b className="data">Sanjay patel - +91 97259 04806</b>
          <b className="data">Arpit patel - +91 9003084857</b>
          <div className="sameRow">
            <FiMail className="iconStyle" />
            <h2 className="subheading">Mail us</h2>
          </div>
          <b className="data">saanviinfra21@gmail.com</b>
          <div
            className="button button-left"
            style={{ marginLeft: "8px" }}
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
