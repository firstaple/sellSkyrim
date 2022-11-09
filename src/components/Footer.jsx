import {} from "./css/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li className="pcGame">
          <a
            href="https://store.steampowered.com/app/611670/The_Elder_Scrolls_V_Skyrim_VR/"
            target="_blank"
          >
            <img
              src="https://elderscrolls.bethesda.net/images/pc-icon.svg?ca3d2c01a571b7595c1aac8aef2aab9c"
              alt=""
            />
          </a>
        </li>
        <li className="xBox">
          <a
            href="https://store.playstation.com/en-us/product/UP1003-CUSA09124_00-SKYRIMVR00000000"
            target="_blank"
          >
            <img
              src="https://elderscrolls.bethesda.net/images/xbox-one-icon.svg?3a1c0ff8f0ff7b7a732c5f6698c69de5"
              alt=""
            />
          </a>
        </li>
        <li className="ps4">
          <a
            href="https://www.xbox.com/en-US/games/elder-scrolls-v-skyrim#purchaseoptions"
            target="_blank"
          >
            <img
              src="https://elderscrolls.bethesda.net/images/ps4-icon.svg?88fb0e4722be387eb96b0f5cb777b0ea"
              alt=""
            />
          </a>
        </li>
        <li className="switch">
          <a
            href="https://www.nintendo.com/store/products/the-elder-scrolls-v-skyrim-switch/"
            target="_blank"
          >
            <img
              src="https://elderscrolls.bethesda.net/images/switch-icon.svg?db73602bceca384594dc57b351c858a3"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
