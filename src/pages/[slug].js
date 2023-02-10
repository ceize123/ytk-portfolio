import { createClient } from 'contentful'
import overviewIcon from '../image/overview.png'
import executionIcon from '../image/execution.png'
import resultIcon from '../image/result.png'
import ImageTemplate from '../components/Image-template'
import Skeleton from '../components/Skeleton'
import Link from 'next/link'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
	useEffect(() => {
		AOS.init({
			offset: 100,
			duration : 1000
		})
	}, [work])
	if (!work) return <Skeleton />

	const { banner, overview, url, time, tools, challenges, solutions, result, mobileSupport, inProgress } = work.fields
	const execution = []
	for (let idx in challenges) {
		execution.push({
			challenge: challenges[idx],
			solution: solutions[idx]
		})
	}
	
	return (
		<section className='work-page max-w-7xl mx-auto pb-24'>
			<div data-aos='fade-down'>
				<ImageTemplate url={`https:${banner.fields.file.url}`} alt={banner.fields.title} />
			</div>

			{/* Sticky Button for small size screen */}
			<div className='md:hidden block sticky sm:top-20 top-12 py-4 text-center bg-primary'>
				<Link href={url} target='_blank'>
					<button
						className='border rounded border-green py-2 px-3 hover:bg-green hover:text-primary transition-all'
						disabled={inProgress}
					>
						{!inProgress ? 'View Work' : 'In Progress'}
					</button>
				</Link>
				{!mobileSupport && <p className='text-sm mt-2 text-center text-red'>Mobile Devices not Supported</p>}
			</div>
			{/* Sticky Button for small size screen */}

			<div className='grid md:grid-cols-8 grid-cols-1 2xl:mx-0 sm:mx-16 mx-8 md:8 lg:mt-16 mt-8'>

				{/* Left Section */}
				<aside className='col-span-2 mt-2'>
					<div className='md:sticky md:top-24 md:block flex justify-around'>
						<div>
							<h2>Time</h2>
							<p className='text-base'>{time}</p>
						</div>
						<div className='md:mt-10 mt-0'>
							<h2>Tool</h2>
							{tools.map((tool, idx) => {
								return (
									<p key={idx} className='mt-2 text-base'>{tool}</p>
								)
							})}
						</div>
						<div className='md:mt-10 hidden md:block'>
							<Link href={url} target='_blank'>
								<button
									className='border rounded border-green py-2 px-3 hover:bg-green hover:text-primary transition-all'
									disabled={inProgress}
								>
									{!inProgress ? 'View Work' : 'In Progress'}
								</button>
							</Link>
							{!mobileSupport && <p className='text-sm w-2/3 mt-2 text-red'>Mobile Devices not Supported</p>}
						</div>
					</div>
				</aside>

				{/* Right Section */}
				<div className='col-span-6 grid grid-cols-1 gap-y-24 mt-16 md:mt-0'>
					{/* Overview */}
					<div data-aos='fade-up'>
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
					{/* Overview */}
					{/* Execution */}
					<div data-aos='fade-up'>
						<div className='flex items-center'>
							<div className='md:w-12 w-8'>
								<ImageTemplate url={executionIcon} alt='icon' />
							</div>
							<h1 className='ml-2'>Execution</h1>
						</div>
						{execution.map((item, idx) => {
							return (
								<div className={`${idx !== 0 ? 'mt-12' : 'mt-4'} border-l pl-5`} key={idx}>
									<div>
										<h2 className='text-yellow'>Challenge</h2>
										<p>{item.challenge}</p>
									</div>
									<div className='mt-4'>
										<h2 className='text-green'>Solution</h2>
										<p>{item.solution}</p>
									</div>
								</div>
							)
						})}
					</div>
					{/* Execution */}
					{/* Result */}
					<div data-aos='fade-up'>
						<div className='flex items-center'>
							<div className='md:w-12 w-8'>
								<ImageTemplate url={resultIcon} alt='icon' />
							</div>
							<h1 className='ml-2'>Result</h1>
						</div>
						<div className='mt-4'>
							{result !== undefined
								?	<video controls muted autoPlay loop>
										<source src={`https:${result[0].fields.file.url}`} type='video/mp4'/>
								</video>
								: <p>In Progress</p>}
						</div>
					</div>
					{/* Result */}
				</div>
			</div>
		</section>
	)
}