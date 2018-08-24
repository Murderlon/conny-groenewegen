import React from 'react'
import { Helmet } from 'react-helmet'

const HelmetMetaTags = () => (
  <Helmet>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Conny Groenewegen</title>
    <meta name="description" content="Personal website of Conny Groenewegen" />
    <meta
      name="keywords"
      content="Conny, Groenewegen, fashion, fama, electricco, designer, mediamatic"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="Personal website of Conny Groenewegen" />
    <meta
      property="og:description"
      content="Personal website of Conny Groenewegen"
    />
    {/* Change this!!! */}
    <meta property="og:image" content="" />
    <meta property="og:site_name" content="Conny Groenewegen" />
    {/* Change this!!! */}
    <meta property="og:url" content="" />
    {/* Change this!!! */}
    <link rel="shortcut icon" type="image/png" href="images/favicon32.ico" />
    <link rel="icon" type="image/png" href="images/favicon32.ico" />
    <link
      rel="icon"
      type="image/png"
      href="images/favicon32.png"
      sizes="32x32"
    />
    <link
      rel="icon"
      type="image/png"
      href="images/favicon16.png"
      sizes="16x16"
    />
  </Helmet>
)

export default HelmetMetaTags
