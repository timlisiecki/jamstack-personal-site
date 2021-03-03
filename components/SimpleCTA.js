import Button from './Button';

function SimpleCTA() {
	return (
		<div className='bg-indigo-50 dark:bg-blue-800'>
			<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between'>
				<h2 className='text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-300 md:text-4xl'>
					<span className='block text-2xl dark:text-white'>From Boat Captain to Web Developer.</span>
					<span className='block text-indigo-600 dark:text-green-300'>Learn more about me.</span>
				</h2>
				<div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
					<div className='inline-flex rounded-md shadow'>
						<Button title='Learn more' href='/about' type='primary' size='lg' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SimpleCTA;
