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
    <meta property="og:image" content="/OGimage.png" />
    <meta property="og:site_name" content="Conny Groenewegen" />
    {/* Change this!!! */}
    <meta property="og:url" content="" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
  </Helmet>
)

export default HelmetMetaTags
