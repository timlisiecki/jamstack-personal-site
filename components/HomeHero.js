import Button from './Button';

function HomeHero({ bioPic, firstName, lastName, role, location, headline }) {
	return (
		<section className='lg:relative flex flex-col lg:flex-row'>
			<div className='w-full lg:w-1/2 text-center lg:text-left dark:bg-regal-800'>
				<div className='px-4 py-12 sm:px-8 xl:pr-16'>
					<h1 className='dark:text-white text-5xl'>{`${firstName} ${lastName}`}</h1>
					<h2 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
						<span className='block text-indigo-600 dark:text-green-300 xl:inline'>{role}</span>
					</h2>
					<h3 className='dark:text-white'>{`Based in ${location}`}</h3>
					<p className='mt-3 max-w-md mx-auto text-lg text-gray-500 dark:text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl'>{headline}</p>
					<div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
						<Button title='View Portfolio' href='/portfolio' type='primary' size='lg' />
						<div className='mt-3 sm:mt-0 sm:ml-3'>
							<Button title='View Resume' href='/resume' type='secondary' size='lg' />
						</div>
					</div>
				</div>
			</div>
			<div className='flex lg:w-1/2 lg:h-full'>
				<img
					className='mx-auto'
					alt='Tim Lisiecki headshot'
					height='300'
					width='400'
					srcSet={`https://${bioPic.fields.file.url}?w=400&h=300&fm=webp&q=80 400w, https://${bioPic.fields.file.url}?w=600&h=800&fm=webp&q=80 800w`}
					src={`https://${bioPic.fields.file.url}?w=300&h=400&fm=webp&q=80`}
					alt={bioPic.fields.fileName}
				/>
			</div>
		</section>
	);
}

export default HomeHero;
