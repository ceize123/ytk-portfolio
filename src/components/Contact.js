export default function Contact() {
	return (
		<section id='contact' className='py-24'>
			<div className='text-center'>
				<h1 className='lg:text-5xl text-4xl stroke-white text-primary'>
					Contact
				</h1>
				<div className='sm:mt-12 mt-5' data-aos='fade-up'>
					<p>
						I am now looking for new <span className='text-yellow'>software developer job</span>
						<br/>
						Feel free to contact me via below button
					</p>
					<button
						onClick={() => {window.location.href ='mailto:yitsokuo19@gmail.com'}}
						className='mt-8 border rounded border-green py-2 px-3 hover:bg-green hover:text-primary transition-all'
					>Say Hello</button>
				</div>
			</div>
		</section>
	)
}