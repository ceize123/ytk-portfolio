import { FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Footer() {
	return (
		<footer className='fixed bottom-0 right-10'>
			<div className='cursor-pointer mb-4 p-2'>
				<FiLinkedin
					className='icon text-yellow text-2xl'
				/>
			</div>
			<div className='cursor-pointer mb-4 p-2'>
				<FiGithub className='icon text-yellow text-2xl' />
			</div>
			<div className='h-20 w-0.5 bg-secondary mx-auto'></div>
		</footer>
	)
}