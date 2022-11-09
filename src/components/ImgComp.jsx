import {} from "./css/ImgComp.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo from "./hero.png";
import VideoModal from "./VideoModal";
import logo2 from "./skyrim-logo.png";

function ImgComp() {
  const settings = {
    dots: true,
    dotsClass: "dots",
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div className="position1">
        <img src={logo} alt="" className="img1" />
        <div className="position1-2">
          <img src={logo2} alt="" className="imgPlus" />
        </div>
        <div className="position1-3">
          <VideoModal></VideoModal>
        </div>
      </div>
      <div className="position2">
        <img
          src="https://images.ctfassets.net/rporu91m20dc/5M4RGwncbuO6UcQMuMyiSS/b403128aeb0a30b67cf7714ade278e52/skyrim--blocks--dragonborn-bg.jpg?q=70&&&fm=webp"
          alt=""
          className="img2"
        />
      </div>
      <div className="position3">
        <img
          src="https://images.ctfassets.net/rporu91m20dc/2pKBE5jOOUEkg60gUcqsgE/b7ee34a0bd4e38fe19b10880db8cd91e/skyrim--blocks--dawnguard-bg.jpg?q=70&&&fm=webp"
          alt=""
          className="img3"
        />
      </div>
    </Slider>
  );
}

export default ImgComp;
