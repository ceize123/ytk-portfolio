import '../styles/style.css'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Script async strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS}`}></Script>
			<Script strategy='lazyOnload' id='script'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', ${process.env.NEXT_PUBLIC_ANALYTICS});
				`}
			</Script>

			<Head>
					<title>Yi-Tso Kuo</title>
					<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<Contact />
			<Footer />
		</>
  	)
}
