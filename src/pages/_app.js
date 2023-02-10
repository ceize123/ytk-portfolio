import '../styles/style.css'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
					<title>Yi-Tso Kuo</title>
					<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<Script
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Script strategy='lazyOnload' id='script'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
						page_path: window.location.pathname,
					});
				`}
			</Script>

			<Navbar />
			<Component {...pageProps} />
			<Contact />
			<Footer />
		</>
  	)
}
