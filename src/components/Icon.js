import Image from 'next/image'

export default function Icon({data}) {
	return (
		<div className='md:w-12 w-8'>
			<Image
				src={data}
				width='0'
				height='0'
				sizes='100vw'
				className='w-full h-auto'
				alt='icon'
			/>
		</div>
	)
}