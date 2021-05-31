import * as React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import logo from "../images/icon.png";
import banner from "../images/banner.png";

function SEO({
  title = "Hexcaliber Interactive",
  description = "Indie game development studio",
  url = "https://hexcaliber.dev"
}) {
  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <link rel="icon" type="image/png" href={logo}/>
      <meta name="description" content={description} />
      <meta name="image" content={logo} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={banner} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="Hexcaliber Developers" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={banner} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default SEO;
