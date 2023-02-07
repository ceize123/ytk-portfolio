import Image from 'next/image'
import testImg from '../image/test.png'
import Card from './Card'

export default function MissionSec({projects}) {
	return (
		<section className='mx-12'>
			<div className='container mx-auto'>
				<h1 className='text-center'>
					Mission <span className='stroke-white text-primary'>I have</span> Accomplished
				</h1>
				<div className='grid grid-cols-2 gap-x-2 md:gap-x-0 gap-y-8'>
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