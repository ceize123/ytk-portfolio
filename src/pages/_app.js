import '../styles/style.css'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Yi-Tso Kuo Portfolio</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta property='og:title' content='Yi-Tso Kuo Portfolio' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://firebasestorage.googleapis.com/v0/b/yi-tso.appspot.com/o/thumbnail2.png?alt=media&token=a81e5751-94c0-43d3-a40b-e6fc3eb056fa'
        />
        <meta property='og:url' content='https://www.ytkuo.dev/' />
      </Head>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
      />
      <Script strategy='afterInteractive' id='google-analytics'>
        {`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', '${process.env.GA_MEASUREMENT_ID}');
				`}
      </Script>

      <Navbar />
      <Component {...pageProps} />
      <Contact />
      <Footer />
    </>
  )
}
