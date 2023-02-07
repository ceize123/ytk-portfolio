import { FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Footer() {
	return (
		<footer className='py-10'>
			<div className='md:fixed md:bottom-0 md:right-10 flex justify-center md:block mb-2 md:mb-0'>
				<div className='icon-block cursor-pointer md:mb-3 p-2'>
					<FiGithub className='icon text-yellow text-2xl' />
				</div>
				<div className='icon-block cursor-pointer md:mb-3 p-2 mx-2 md:mx-0'>
					<FiLinkedin
						className='icon text-yellow text-2xl' />
				</div>
				<div className='h-20 w-px bg-secondary mx-auto hidden md:block'></div>
			</div>
			<div>
				<p className='text-center'>Designed & Built by Yi-Tso Kuo</p>
			</div>
		</footer>
	)
}