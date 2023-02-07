import Image from 'next/image'
import Link from 'next/link'

export default function Card({ info }) {
	const { title, slug, thumbnail, tools, description } = info
	
	return (
		<div className='col-span-1 xl:mx-20 lg:mx-16 md:mx-10 mx-0'>
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
			{title}
		</div>
	)
}