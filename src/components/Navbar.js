import Logo from '../image/logo.png'
import MenuIcon from '../image/menu.png'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ImageTemplate from './Image-template'
import { useRouter } from 'next/router'

export default function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false)
	const router = useRouter()
	const path = router.route !== '/' ? router.asPath : ''

	const handleMenu = (e) => {
		e.target.classList.add('menu-activate')
		setTimeout(() => {
			e.target.classList.remove('menu-activate')
		}, 300)

		setToggleMenu(!toggleMenu)
	}

	useEffect(() => {
		if (toggleMenu) document.body.style.overflow = 'hidden'
		else document.body.style.overflow = 'unset'
  }, [toggleMenu ]);

	return (
		<>
		<header className='sticky top-0 flex justify-center flex-col items-center z-50 bg-primary'>
			<div className='flex justify-between items-center w-full px-6 sm:my-4 my-3 relative z-10'>
				<Link href='/' onClick={() => {setToggleMenu(false)}}>
					<div className='logo cursor-pointer sm:w-12 w-8'>
						<ImageTemplate url={Logo} alt='logo' />
					</div>
				</Link>	
				<div className='menu cursor-pointer sm:w-12 w-8' onClick={(e) => { handleMenu(e) }}>
					<ImageTemplate url={MenuIcon} alt='menu' />
				</div>
			</div>
			</header>
			<nav className={`bg-darkYellow w-full z-20 fixed ${toggleMenu ? 'translate-y-0': '-z-10 opacity-0 -translate-y-10'}`}>
				<ul className='text-2xl text-center'>
					<li className='py-4 leading-normal hover:bg-yellow'>
						<Link href='/#tool-sec' onClick={() => {setToggleMenu(false)}} scroll={false}>
							Tools
						</Link>
					</li>
					<li className='py-4 leading-normal hover:bg-yellow'>
						<Link href='/#work-sec' onClick={() => {setToggleMenu(false)}} scroll={false}>
							Works
						</Link>
					</li>
					<li className='py-4 leading-normal hover:bg-yellow'>
						<Link href={`${path}/#contact`} onClick={() => {setToggleMenu(false)}} scroll={false}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
			<div
				className={`backdrop-blur-sm bg-white/10 fixed top-0 z-10 w-full h-screen ${toggleMenu ? 'block' : 'hidden'}`}
				onClick={() => {setToggleMenu(false)}}
			>
			</div>
		</>
	)
}