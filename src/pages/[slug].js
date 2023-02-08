import { createClient } from 'contentful'
import overviewIcon from '../image/overview.png'
import executionIcon from '../image/execution.png'
import resultIcon from '../image/result.png'
import ImageTemplate from '../components/Image-template'
import Skeleton from '../components/Skeleton'

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
		props: { work: items[0] },
		revalidate: 10
	}
}

export default function WorkDetails({ work }) {
	if (!work) return <Skeleton />

	const {banner, overview, time, tools, challenges, solutions, result} = work.fields
	return (
		<section className='work-page max-w-7xl mx-auto pb-24'>
			<div>
				<ImageTemplate url={`https:${banner.fields.file.url}`} alt={banner.fields.title} />
			</div>
			{/* Sticky Button for small size screen */}
			<div className='md:hidden block sticky top-20 py-4 text-center bg-primary'>
				<button className='border rounded border-green py-2 px-3 hover:bg-green hover:text-primary transition-all'>View Work</button>
			</div>

			<div className='grid md:grid-cols-8 grid-cols-1 2xl:mx-0 mx-16 md:8 lg:mt-16 mt-8'>
				<div className='col-span-2 mt-2'>
					<div className='md:sticky md:top-24 md:block flex'>
						<div className='mr-16 md:mr-0'>
							<h2>Time</h2>
							<p>{time}</p>
						</div>
						<div className='md:mt-5 mt-0'>
							<h2>Tool</h2>
							{tools.map((tool, idx) => {
								return (
									<p key={idx} className='mt-2'>{tool}</p>
								)
							})}
						</div>
						<div className='md:mt-5 hidden md:block'>
							<button className='border rounded border-green py-2 px-3 hover:bg-green hover:text-primary transition-all'>View Work</button>
						</div>
					</div>
				</div>
				<div className='col-span-6 grid grid-cols-1 gap-y-24 mt-16 md:mt-0'>
					<div>
						<div className='flex items-center'>
							<div className='md:w-12 w-8'>
								<ImageTemplate url={overviewIcon} alt='icon' />
							</div>
							<h1 className='ml-2'>Overview</h1>
						</div>
						<div className='mt-4'>
							<p>{overview}</p>
						</div>
					</div>
					<div>
						<div className='flex items-center'>
							<div className='md:w-12 w-8'>
								<ImageTemplate url={executionIcon} alt='icon' />
							</div>
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
							<div className='md:w-12 w-8'>
								<ImageTemplate url={resultIcon} alt='icon' />
							</div>
							<h1 className='ml-2'>Result</h1>
						</div>
						<div className='mt-4'>
							<p>{result}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}