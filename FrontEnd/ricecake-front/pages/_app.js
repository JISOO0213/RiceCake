import '../styles/globals.css'
import './Calendars.css'
import React, { useState } from "react";
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import LightDark from '../components/Layout/LightDark';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <LightDark /> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp


