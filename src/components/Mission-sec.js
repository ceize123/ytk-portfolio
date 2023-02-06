import Image from 'next/image'
import testImg from '../image/test.png'

export default function MissionSec() {
	return (
		<section className='mx-12'>
			<div className='container mx-auto'>
				<h1 className='text-center'>
					Mission <span className='stroke-white text-primary'>I have</span> Accomplished
				</h1>
				<div className='grid grid-cols-2 gap-x-2 gap-y-8'>
					<div className='col-span-1'>
						<div className='relative w-full h-0 pb-[65%] overflow-hidden'>
							<Image
								src={testImg}
								fill
								className='hover:scale-110 transition ease-in-out'
								alt='test'
							/>
						</div>
						123
					</div>
				</div>
			</div>
		</section>
	)
}