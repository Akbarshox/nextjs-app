import React from "react";
import NextNprogress from 'nextjs-progressbar';
import '../styles/globals.css'

function MyApp({Component, pageProps}) {
   return (
      <>
         <NextNprogress
            color="#ffc600"
            startPosition="0"
            stopDelayMs="200"
            height="3"
         />
         <Component {...pageProps} />
      </>
   )
}

export default MyApp
