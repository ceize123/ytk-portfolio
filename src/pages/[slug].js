import { createClient } from 'contentful'
import Image from 'next/image'
import overviewIcon from '../image/overview.png'
import goalIcon from '../image/goal.png'
import executionIcon from '../image/execution.png'
import resultIcon from '../image/result.png'
import Icon from '../components/Icon'

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID, // id
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: 'ytkProjects'
	})

	const paths = res.items.map((item) => {
		return {
			params: {slug: item.fields.slug}
		}
	})

	return {
		paths,
		fallback: true
	}
}

export async function getStaticProps({params}) {
	const { items } = await client.getEntries({
		content_type: 'ytkProjects',
		'fields.slug': params.slug
	})

	if (!items.length) {
		return {
			redirect: {
				destination: '/',
				permanent: false // not a permanent redirect, because in the future, there might have this url
			}
		}
	}

	return {
		props: { project: items[0] },
		revalidate: 10
	}
}

export default function ProjectDetails({ project }) {
	const {banner, overview, time, tools, goal, challenges, solutions, result} = project.fields
	return (
		<div className='project-page max-w-7xl mx-auto'>
			<div>
				<Image
						src={`https:${banner.fields.file.url}`}
						width='0'
						height='0'
						sizes='100vw'
						className='w-full h-auto'
						alt={banner.fields.title}
					/>
			</div>
			<div className='grid md:grid-cols-8 grid-cols-1 xl:mx-16 mx-8 lg:mt-16 mt-8'>
				<div className='col-span-2 mt-2 sm:flex md:block text-left sm:text-center md:text-left'>
					<div className='grow'>
						<h2>Time</h2>
						<p>{time}</p>
					</div>
					<div className='mt-5 sm:mt-0 md:mt-5 grow'>
						<h2>Tool</h2>
						{tools.map((tool, idx) => {
							return (
								<p key={idx}>{tool}</p>
							)
						})}
					</div>
					<div className='mt-5 sm:mt-0 md:mt-5 grow'>
						<button className='border rounded border-green p-2 hover:bg-green hover:text-primary transition-all'>View Project</button>
					</div>
				</div>
				<div className='col-span-6 grid grid-cols-1 gap-y-24 mt-16 md:mt-0'>
					<div>
						<div className='flex items-center'>
							<Icon data={overviewIcon} />
							<h1 className='ml-2'>Overview</h1>
						</div>
						<div className='mt-4'>
							<p>{overview}</p>
						</div>
					</div>
					<div>
						<div className='flex items-center'>
							<Icon data={goalIcon} />
							<h1 className='ml-2'>Goal</h1>
						</div>
						<div className='mt-4'>
							<p>{goal}</p>
						</div>
					</div>
					<div>
						<div className='flex items-center'>
							<Icon data={executionIcon} />
							<h1 className='ml-2'>Execution</h1>
						</div>
						<div className='mt-4'>
							<h2>Challenges</h2>
							<p>{challenges}</p>
						</div>
						<div className='mt-4'>
							<h2>Solutions</h2>
							<p>{solutions}</p>
						</div>
					</div>
					<div>
						<div className='flex items-center'>
							<Icon data={resultIcon} />
							<h1 className='ml-2'>Result</h1>
						</div>
						<div className='mt-4'>
							<p>{result}</p>
						</div>
					</div>
					
				</div>
			</div>
			
		</div>
	)
}