import ReactMarkdown from 'react-markdown';

function WorkRole({ title, company, companyURL, location, startDate, endDate, desc, isLastItem }) {
	return (
		<div className='relative pb-8'>
			{!isLastItem && <span className='absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200 dark:bg-blue-500' aria-hidden='true'></span>}
			<div className='relative flex items-start space-x-3'>
				<div>
					<div className='relative px-1'>
						<div className='h-8 w-8 bg-gray-100 dark:bg-blue-800 rounded-full ring-8 ring-white flex items-center justify-center'>
							<svg
								className='h-5 w-5 text-gray-500 dark:text-gray-300'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className='min-w-0 flex-1'>
					<div>
						<div className='text-sm'>
							<span className='text-lg font-bold text-indigo-600 dark:text-green-300'>{title}</span>
						</div>
						<div className='mt-3 text-center md:mt-0 md:flex md:items-center'>
							<div className='text-base font-medium text-gray-900 dark:text-white'>
								<a href={companyURL} target='_blank' rel='noopener'>
									{company}
								</a>
							</div>

							<svg className='hidden md:block mx-1 h-5 w-5 text-indigo-600 dark:text-green-300' fill='currentColor' viewBox='0 0 20 20'>
								<path d='M11 0h3L9 20H6l5-20z'></path>
							</svg>

							<div className='text-base font-medium text-gray-500 dark:text-gray-300'>{location}</div>
						</div>
						<div className='text-base text-gray-700 dark:text-gray-300'>
							{startDate} - {endDate}
						</div>
					</div>
					<div className='mt-2 text-sm text-gray-700 dark:text-gray-300'>
						<ReactMarkdown>{desc}</ReactMarkdown>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WorkRole;
