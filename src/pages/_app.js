import '../styles/style.css'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
					<title>Yi-Tso Kuo</title>
					<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<Contact />
			<Footer />
		</>
  	)
}
