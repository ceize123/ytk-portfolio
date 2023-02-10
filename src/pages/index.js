import { createClient } from 'contentful'
import HeroSection from '../components/Hero-sec'
import MissionSec from '../components/Mission-sec'
import WeaponSec from '../components/Weapon-sec'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID, // id
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	})

	const res = await client.getEntries({content_type: 'ytkProjects'})

	return {
		props: {
			works: res.items
		},
		revalidate: 10
	}
}

export default function Home({ works }) {
	console.log(works)

	useEffect(() => {
		AOS.init({
			offset: 150,
			duration : 1000
		})
	}, [works])
	return (
	<main>
		<HeroSection />
		<WeaponSec aos='fade-up'/>	
		<MissionSec works={works} aos='fade-up'/>
	</main>
	)
}
