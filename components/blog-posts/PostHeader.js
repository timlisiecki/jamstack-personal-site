function PostHeader(props) {
	const d = new Date(props.date);
	const formattedDate = d.toLocaleString('en-US', { dateStyle: 'long' });
	return (
		<div className='bg-white dark:bg-regal-800'>
			<div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
				<div className='text-center'>
					<p className='text-2xl font-semibold text-indigo-600 dark:text-green-300 tracking-wide uppercase'>{formattedDate}</p>
					<h1 className='mt-1 text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl'>
						{props.title}
					</h1>
					<p className='max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300'>By Tim Lisiecki</p>
				</div>
			</div>
		</div>
	);
}

export default PostHeader;
