import Button from './Button';

function HomeHero() {
	return (
		<section className='lg:relative flex flex-col lg:flex-row'>
			<div className='w-full lg:w-1/2 text-center lg:text-left dark:bg-blue-900'>
				<div className='px-4 py-12 sm:px-8 xl:pr-16'>
					<h2 className='dark:text-white'>Tim Lisiecki</h2>
					<h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
						<span className='block text-indigo-600 dark:text-green-300 xl:inline'>Front End Developer</span>
					</h1>
					<h3 className='dark:text-white'>Based in Boston, MA</h3>
					<p className='mt-3 max-w-md mx-auto text-lg text-gray-500 dark:text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl'>
						I have a passion for all things front end.
					</p>
					<div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
						<Button title='View Portfolio' href='/portfolio' type='primary' size='lg' />
						<div className='mt-3 sm:mt-0 sm:ml-3'>
							<Button title='View Resume' href='/resume' type='secondary' size='lg' />
						</div>
					</div>
				</div>
			</div>
			<div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
				<img className='absolute inset-0 w-full h-full object-cover object-top' src='/images/tim.jpg' alt='' />
			</div>
		</section>
	);
}

export default HomeHero;
