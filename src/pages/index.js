import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faItchIo } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faMail} from '@fortawesome/free-solid-svg-icons'
import SEO from "../components/SEO";
import "../sass/main.scss";
import bannerLogo from "../images/icon.png";
import bannerText from "../images/banner-text.png";
import Topbar from "../components/Topbar";

const buttons = [
  {
      name: "Email",
      logo: faEnvelope,
      link: "mailto:contact@hexcaliber.dev"
  },
  {
      name: "Itch.io",
      logo: faItchIo,
      link: "https://hexcaliber.itch.io"
  },
  {
      name: "Twitter",
      logo: faTwitter,
      link: "https://twitter.com/HexcaliberGames"
  },
  {
      name: "Instagram",
      logo: faInstagram,
      link: "https://www.instagram.com/hexcalibergames/"
  },
]

const IndexPage = () => {
  return (
    <main className="main">
      {/* <link rel="stylesheet" href="https://use.typekit.net/jko3pho.css"></link> */}
      <SEO />
      <Topbar />
      <div className="banner-container">
        <img className="banner-logo" src={bannerLogo} alt="Hexcaliber banner" />
        <img className="banner-text" src={bannerText} alt="Hexcaliber banner text" />
      </div>
      <div className="button-container">
          <div className="pad" />
          {buttons.map(btn => (
            <button type="button" text={btn.name} className="home-button" onClick={() => window.open(btn.link, '_blank').focus()}><FontAwesomeIcon icon={btn.logo} size="2x" /></button>
          ))}
          <div className="pad" />
      </div>
    </main>
  );
};

export default IndexPage;
