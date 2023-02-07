import knightGif from '../image/knight.gif'
import Image from 'next/image'
import {useEffect, useState} from 'react';

export default function HeroSection() {
	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
	}, []);
	
	return (
		<section className='hero-section relative flex justify-center items-center flex-col lg:flex-row overflow-hidden'>
			<div
				className='text-yellow lg:absolute 3xl:mr-[35%] xl:mr-[45%] lg:mr-[50%] xl:mb-24 lg:mb-[40%] md:mb-8 mb-4'
				style={{
					transform: `translateX(-${scrollTop / 10}px)`,
					opacity: `${(100 - scrollTop / 6) / 100}`
				}}
			>
				<h1 className='md:text-6xl sm:text-5xl text-4xl'>
					<span className='stroke-yellow text-primary'>Hi! I&#39;m</span> Yi-Tso
				</h1>
			</div>
			<div
				className='text-green lg:absolute 3xl:ml-[40%] xl:ml-[55%] lg:ml-[30%] xl:mt-24 lg:mt-[40%] text-right lg:mb-0 md:mb-8 mb-4'
				style={{
					transform: `translateX(${scrollTop / 10}px)`,
					opacity: `${(100 - scrollTop / 6) / 100}`
				}}
			>
				<h1 className='leading-tight'>
					a Full-Stack developer
				</h1>
				<h1 className='text-2xl'>
					<span className='stroke-green text-primary'>and a powerful</span> knight
				</h1>
			</div>
			<div className='knight bg-white flex justify-center items-center mx-auto'>
				<Image
					className='sm:w-auto w-full'
					src={knightGif}
					width={371}
					height={360}
					alt='Knight Gif'
				/>
			</div>
		</section>
	)
}