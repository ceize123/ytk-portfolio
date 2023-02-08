import { createClient } from 'contentful'
import HeroSection from '../components/Hero-sec'
import MissionSec from '../components/Mission-sec'
import WeaponSec from '../components/Weapon-sec'

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
	return (
	<main>
		<HeroSection />
		<WeaponSec />	
		<MissionSec works={works} />
	</main>
	)
}
