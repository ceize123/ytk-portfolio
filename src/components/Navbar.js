import Image from 'next/image'
import Logo from '../image/logo.png'
import Menu from '../image/menu.png'

export default function Navbar() {

	const handleMenu = (e) => {
		e.target.classList.add('menu-activate')
		setTimeout(() => {
			e.target.classList.remove('menu-activate')
		}, 300)
	}

	return (
		<header className='w-screen sticky top-0 flex justify-center'>
			<nav className='flex justify-between items-center mx-8 my-4 container'>
				<div className='logo'>
					<Image
						src={Logo}
						width={51}
						height={51}
						alt='logo' />
				</div>
				<div className='menu' onClick={(e) => { handleMenu(e)}}>
					<Image
						src={Menu}
						width={48}
						height={48}
						alt='menu' />
				</div>
			</nav>
		</header>
	)
}