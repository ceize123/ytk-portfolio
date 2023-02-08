import Card from './Card'

export default function MissionSec({projects}) {
	return (
		<section className='lg:mx-20 md:mx-12 mx-8 py-24' id='mission-sec'>
			<div className='container mx-auto'>
				<h1 className='text-center lg:text-5xl text-4xl'>
					Mission <span className='stroke-white text-primary'>I have</span> Completed
				</h1>
				<div className='grid md:grid-cols-2 gap-x-2 md:gap-x-0 gap-y-10 sm:mt-12 mt-5'>
					{projects.map((item) => {
						return (
							<Card key={item.sys.id} info={item.fields} />
						)
					})}
				</div>
			</div>
		</section>
	)
}