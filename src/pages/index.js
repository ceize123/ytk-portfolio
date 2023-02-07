import Image from 'next/image'
import { createClient } from 'contentful'
import HeroSection from '../components/Hero-sec'
import MissionSec from '../components/Mission-sec'

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID, // id
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	})

	const res = await client.getEntries({content_type: 'ytkProjects'})

	return {
		props: {
			projects: res.items
		},
		revalidate: 10
	}
}

export default function Home({ projects }) {
	console.log(projects)
	return (
	<>
		<HeroSection />
		<MissionSec projects={projects} />
	</>
	)
}
