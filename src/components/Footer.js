import { FiLinkedin, FiGithub } from 'react-icons/fi'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='pt-24 pb-8'>
			<div className='md:fixed md:bottom-0 md:left-6 flex justify-center md:block mb-2 md:mb-0'>
				<div className='icon-block cursor-pointer md:mb-3 p-2'>
					<Link href='https://github.com/ceize123' target='_blank'>
						<FiGithub className='icon text-yellow text-2xl' />
					</Link>
				</div>
				<div className='icon-block cursor-pointer md:mb-3 p-2 mx-2 md:mx-0'>
					<Link href='https://www.linkedin.com/in/yi-tso-kuo/' target='_blank'>
						<FiLinkedin
							className='icon text-yellow text-2xl' />
					</Link>
				</div>
				<div className='h-20 w-px bg-secondary mx-auto hidden md:block'></div>
			</div>
			<div>
				<p className='text-center text-base'>&copy; Copyright 2023, <span className='text-green hover:text-yellow transition'>Yi-Tso Kuo</span>. All Rights Reserved.</p>
			</div>
		</footer>
	)
}