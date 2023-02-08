import Image from 'next/image'
import Link from 'next/link'

export default function Card({ info }) {
	const { title, slug, thumbnail, tools, description } = info

	return (
		<div className='col-span-1 xl:mx-16 md:mx-4 mx-0'>
			<Link href={`/${slug}`}>
				<div className='relative w-full h-0 pb-[65%] overflow-hidden rounded'>
						<Image
							src={`https:${thumbnail.fields.file.url}`}
							fill
							sizes='100%'
							className='hover:scale-110 transition ease-in-out'
							alt={thumbnail.fields.title}
						/>
				</div>
			</Link>
			<div>
				<h2 className='3xl:text-3xl text-2xl mt-3'>{title}</h2>
				<p className='3xl:text-2xl text-xl mt-2'>{description}</p>
				<div className='flex flex-wrap'>
					{tools.slice(0, 4).map((tool, idx) => {
						return (
							<div key={idx}
								className='mt-2 mr-3 bg-green rounded-md py-2 px-3 text-primary'
							>
								<p className='3xl:text-xl md:text-base text-xs'>{tool}</p>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}