function PageHeader(props) {
	return (
		<section className='bg-white dark:bg-regal-800'>
			<div className='max-w-7xl mx-auto py-16 px-4 sm:pt-24 sm:pb-12 sm:px-6 lg:px-8'>
				<div className='text-center'>
					<h2 className='text-2xl font-semibold text-indigo-600 dark:text-green-300 tracking-wide uppercase'>{props.title}</h2>
					<p className='mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl'>
						{props.phrase}
					</p>
					<p className='max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300'>{props.desc}</p>
				</div>
			</div>
		</section>
	);
}

export default PageHeader;
