import React, { useEffect } from 'react';

function ContactInfo({ linkedInUrl, githubUrl, freelanceUrl, contactEmailAddress, isContactPage }) {
	return (
		<div className='mt-10'>
			<dl className={`grid grid-cols-1 ${!isContactPage ? 'md:grid-cols-2' : ''} gap-x-4 gap-y-8`}>
				<div className='border-t-2 border-gray-100 dark:border-regal-700 pt-6'>
					<dt className='text-base font-medium text-gray-500 dark:text-gray-300'>LinkedIn</dt>
					<dd className='text-2xl font-extrabold tracking-tight text-indigo-600 dark:text-green-300 hover:text-indigo-800 dark:hover:text-green-400'>
						<a href={linkedInUrl} target='_blank' rel='noopener' className='flex'>
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

				<div className='border-t-2 border-gray-100 dark:border-regal-700 pt-6'>
					<dt className='text-base font-medium text-gray-500 dark:text-gray-300'>Github</dt>
					<dd className='text-2xl font-extrabold tracking-tight text-indigo-600 dark:text-green-300 hover:text-indigo-800 dark:hover:text-green-400'>
						<a href={githubUrl} target='_blank' rel='noopener' className='flex'>
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

				<div className='border-t-2 border-gray-100 dark:border-regal-700 pt-6'>
					<dt className='text-base font-medium text-gray-500 dark:text-gray-300'>Freelance</dt>
					<dd className='text-2xl font-extrabold tracking-tight text-indigo-600 dark:text-green-300 hover:text-indigo-800 dark:hover:text-green-400'>
						<a href={freelanceUrl} target='_blank' rel='noopener' className='flex'>
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

				{!isContactPage && (
					<div className='border-t-2 border-gray-100 dark:border-regal-700 pt-6'>
						<dt className='text-base font-medium text-gray-500 dark:text-gray-300'>Contact</dt>
						<dd className='text-2xl font-extrabold tracking-tight text-indigo-600 dark:text-green-300 hover:text-indigo-800 dark:hover:text-green-400'>
							<a href={`mailto:${contactEmailAddress}`} className='flex'>
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
				)}
			</dl>
			{!isContactPage && (
				<div className='mt-10'>
					<a
						href='/resume'
						className='text-base font-medium text-indigo-600 dark:text-green-300 hover:text-indigo-800 dark:hover:text-green-400'
					>
						{' '}
						Learn more about my experience <span aria-hidden='true'>&rarr;</span>{' '}
					</a>
				</div>
			)}
		</div>
	);
}

export default ContactInfo;
