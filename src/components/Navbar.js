import Image from 'next/image'
import Logo from '../image/logo.png'
import MenuIcon from '../image/menu.png'
import { useState, useEffect } from 'react'

export default function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false)

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
			<div className='flex justify-between items-center w-full px-10 my-4 relative z-10'>
				<div className='logo cursor-pointer'>
					<Image
						src={Logo}
						width={51}
						height={51}
						alt='logo' />
				</div>
				<div className='menu cursor-pointer' onClick={(e) => { handleMenu(e)}}>
					<Image
						src={MenuIcon}
						width={48}
						height={48}
						alt='menu' />
				</div>
			</div>
			</header>
			<nav className={`bg-yellow w-full z-20 fixed ${toggleMenu ? 'translate-y-0': '-z-10 opacity-0 -translate-y-10'}`}>
				<ul className='text-2xl py-10 text-center'>
					<li className='py-4 leading-normal'>Tools</li>
					<li className='py-4 leading-normal'>Projects</li>
					<li className='py-4 leading-normal'>Contact</li>
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