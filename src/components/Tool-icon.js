export default function IconDiv({ component, text }) {
	return (
		<div className='md:p-3 p-2 flex items-center'>
			<div className='text-yellow xl:text-5xl lg:text-4xl sm:text-3xl text-xl md:mr-6 mr-3'>
				{component}
			</div>
			<h3 className='3xl:text-3xl lg:text-2xl sm:text-xl'>{text}</h3>
		</div>
	)
}