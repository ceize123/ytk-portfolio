import Image from 'next/image'

export default function ImageTemplate({url, alt}) {
	return (
		<Image
			src={url}
			width='0'
			height='0'
			sizes='100vw'
			className='w-full h-auto'
			alt={alt}
		/>
	)
}