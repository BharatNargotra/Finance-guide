import '../styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://cairasearch.grapinelabs.com/caira-search.min.js"
        data-caira-site="cs_9mz4m1ee00k96yxt43wzya39"
        strategy="afterInteractive"
      />
    </>
  )
}