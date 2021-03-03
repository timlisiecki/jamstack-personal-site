import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function AboutMe(props) {
	return (
		<div className='relative bg-white dark:bg-blue-900 py-16 sm:py-24'>
			<div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-24 lg:items-start'>
				<div className='relative sm:py-16 lg:py-0'>
					<div aria-hidden='true' className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'>
						<div className='absolute inset-y-0 right-1/2 w-full bg-gray-50 dark:bg-blue-800 rounded-r-3xl lg:right-72'></div>
						<svg
							className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
							width='404'
							height='392'
							fill='none'
							viewBox='0 0 404 392'
						>
							<defs>
								<pattern id='02f20b47-fd69-4224-a62a-4c9de5c763f7' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
									<rect x='0' y='0' width='4' height='4' className='text-gray-200 dark:text-blue-800' fill='currentColor' />
								</pattern>
							</defs>
							<rect width='404' height='392' fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)' />
						</svg>
					</div>
					<div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
						{/* <!-- Testimonial card--> */}
						<div className='relative mb-5 lg:-ml-10 rounded-2xl shadow-xl overflow-hidden'>
							<img className='' src={`https://${props.otherPic.fields.file.url}`} alt='' />
						</div>
						<div className='relative mb-5 lg:-mr-10 lg:-mt-20 rounded-2xl shadow-xl overflow-hidden'>
							<img className='' src={`https://${props.bioPic.fields.file.url}`} alt='' />
						</div>
					</div>
				</div>

				<div className='relative col-span-2 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
					{/* <!-- Content area --> */}
					<div className='pt-12 prose dark:prose-dark prose-md md:prose-lg sm:pt-16 lg:pt-20'>
						{documentToReactComponents(props.longBio)}
					</div>

					{/* <!-- Stats section --> */}
					<div className='mt-10'>
						<dl className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8'>
							<div className='border-t-2 border-gray-100 dark:border-blue-800 pt-6'>
								<dt className='text-base font-medium text-gray-500 dark:text-gray-300'>LinkedIn</dt>
								<dd className='text-2xl font-extrabold tracking-tight text-indigo-600 dark:text-green-300 hover:text-indigo-800 dark:hover:text-green-400'>
									<a href={props.linkedInUrl} target='_blank' rel='noopener' className='flex'>
										Connect with Me
										<span className='ml-2 self-center'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-6 w-6'>
												<path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
												<path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
											</svg>
										</span>
									</a>
								</dd>
							</div>

							<div className='border-t-2 border-gray-100 dark:border-blue-800 pt-6'>
								<dt className='text-base font-medium text-gray-500 dark:text-gray-300'>Github</dt>
								<dd className='text-2xl font-extrabold tracking-tight text-indigo-600 dark:text-green-300 hover:text-indigo-800 dark:hover:text-green-400'>
									<a href={props.githubUrl} target='_blank' rel='noopener' className='flex'>
										Collaborate with Me
										<span className='ml-2 self-center'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-6 w-6'>
												<path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
												<path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
											</svg>
										</span>
									</a>
								</dd>
							</div>

							<div className='border-t-2 border-gray-100 dark:border-blue-800 pt-6'>
								<dt className='text-base font-medium text-gray-500 dark:text-gray-300'>Freelance</dt>
								<dd className='text-2xl font-extrabold tracking-tight text-indigo-600 dark:text-green-300 hover:text-indigo-800 dark:hover:text-green-400'>
									<a href={props.freelanceUrl} target='_blank' rel='noopener' className='flex'>
										Hire Me
										<span className='ml-2 self-center'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-6 w-6'>
												<path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
												<path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
											</svg>
										</span>
									</a>
								</dd>
							</div>

							<div className='border-t-2 border-gray-100 dark:border-blue-800 pt-6'>
								<dt className='text-base font-medium text-gray-500 dark:text-gray-300'>Contact</dt>
								<dd className='text-2xl font-extrabold tracking-tight text-indigo-600 dark:text-green-300 hover:text-indigo-800 dark:hover:text-green-400'>
									<a href={`mailto:${props.contactEmailAddress}`} className='flex'>
										Contact Me
										<span className='ml-2 self-center'>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-6 w-6'>
												<path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
												<path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
											</svg>
										</span>
									</a>
								</dd>
							</div>
						</dl>
						<div className='mt-10'>
							<a
								href='/resume'
								className='text-base font-medium text-indigo-600 dark:text-green-300 hover:text-indigo-800 dark:hover:text-green-400'
							>
								{' '}
								Learn more about my experience <span aria-hidden='true'>&rarr;</span>{' '}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
