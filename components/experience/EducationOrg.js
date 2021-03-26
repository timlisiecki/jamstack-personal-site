import uuid from 'react-uuid';

function EducationOrg({ title, org, link, endDate, location, courses }) {
	return (
		<div className='relative pb-8'>
			<div className='relative flex items-start space-x-3'>
				<div>
					<div className='relative px-1'>
						<div className='h-8 w-8 bg-gray-100 dark:bg-regal-700 rounded-full ring-1 ring-white flex items-center justify-center'>
							<svg
								className='h-5 w-5 text-gray-500 dark:text-gray-300'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z' />
							</svg>
						</div>
					</div>
				</div>
				<div className='min-w-0 flex-1'>
					<div>
						<div className='text-sm text-center md:text-left'>
							<span className='text-lg font-bold text-indigo-600 dark:text-green-300'>{title}</span>
						</div>
						<div className='mt-3 text-center md:mt-0 md:flex md:items-center'>
							<div className='text-base font-medium text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-200'>
								<a href={link} target='_blank' rel='noopener'>
									{org}
								</a>
							</div>

							<svg className='hidden md:block mx-1 h-5 w-5 text-indigo-600 dark:text-green-300' fill='currentColor' viewBox='0 0 20 20'>
								<path d='M11 0h3L9 20H6l5-20z'></path>
							</svg>

							<div className='text-base font-medium text-gray-500 dark:text-gray-300'>{location}</div>
							<div className='text-base font-medium text-gray-700 dark:text-gray-300'>{endDate}</div>
						</div>
						{courses && (
							<div className='flex flex-wrap mt-3'>
								{courses.map((course) => {
									return (
										<span
											key={uuid()}
											className='p-1 mb-1 ml-1 bg-gray-100 dark:bg-regal-700 hover:bg-gray-200 dark:hover:bg-regal-600 cursor-pointer rounded-sm'
										>
											<small>
												<a href={course.fields.link} target='_blank' rel='noopener'>
													{course.fields.title}
												</a>
											</small>
										</span>
									);
								})}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default EducationOrg;
