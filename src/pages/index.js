import * as React from "react";
import SEO from "./SEO";
import "../sass/main.scss";
import banner from "../images/banner.png";

const IndexPage = () => {
  return (
    <main>
      <SEO />
      <img className="banner" src={banner} alt="Hexcaliber banner" />
    </main>
  );
};

export default IndexPage;
