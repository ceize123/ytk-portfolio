import Image from 'next/image'
import Logo from '../image/logo.png'
import MenuIcon from '../image/menu.png'
import { useState } from 'react'

export default function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false)

	const handleMenu = (e) => {
		e.target.classList.add('menu-activate')
		setTimeout(() => {
			e.target.classList.remove('menu-activate')
		}, 300)

		setToggleMenu(!toggleMenu)
	}

	return (
		<header className='sticky top-0 flex justify-center flex-col items-center'>
			<div className='flex justify-between items-center px-8 my-4 container relative z-10'>
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
			<nav className={`bg-yellow w-full container absolute -bottom-12 ${toggleMenu ? 'translate-y-0': 'opacity-0 -translate-y-6'}`}>
				<ul>
					<li>123</li>
					<li>1233</li>
				</ul>
			</nav>
			
		</header>
	)
}