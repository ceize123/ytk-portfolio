import Image from 'next/image'
import Link from 'next/link'

export default function Card({ info }) {
	const { title, slug, thumbnail, tools, description } = info

	return (
		<div className='col-span-1 xl:mx-20 md:mx-6 mx-0'>
			<div className='relative w-full h-0 pb-[65%] overflow-hidden'>
				<Link href={`/${slug}`}>
					<Image
						src={`https:${thumbnail.fields.file.url}`}
						fill
						className='hover:scale-110 transition ease-in-out'
						alt={thumbnail.fields.title}
					/>
				</Link>
			</div>
			<h2 className='3xl:text-3xl lg:text-2xl text-lg'>{title}</h2>
			<p className='3xl:text-2xl lg:text-xl'>{description}</p>
			<div className='flex flex-wrap'>
				{tools.map((tool, idx) => {
					return (
						<div key={idx}
							className='mt-2 mr-3 bg-green rounded py-1 px-2 text-primary hover:bg-yellow transition-all'
						>
							<p className='3xl:text-xl lg:text-base'>{tool}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}