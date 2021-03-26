import React, { useEffect } from 'react';

function ContactForm() {
	return (
		<form
			name='contact'
			className='space-y-6'
			method='POST'
			action='/'
			data-netlify='true'
			netlify-honeypot='bot-field'
			// data-netlify-recaptcha='true'
		>
			<input type='hidden' name='form-name' value='contact' />
			<div className='hidden'>
				<label>
					Don’t fill this out if you’re human: <input name='bot-field' />
				</label>
			</div>
			<div>
				<div className='flex justify-between'>
					<label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
						Your Name
					</label>
				</div>
				<div className='mt-1 relative rounded-md shadow-sm'>
					<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
						<svg
							className='h-5 w-5 text-gray-400 dark:text-gray-200'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
						</svg>
					</div>
					<input
						type='text'
						name='name'
						id='name'
						className='dark:bg-regal-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-500 rounded-md'
						placeholder='Please enter your full name'
						required
					/>
				</div>
			</div>

			<div>
				<div className='flex justify-between'>
					<label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
						Email
					</label>
					<span className='text-sm text-gray-500 dark:text-gray-400' id='email-optional'>
						Required
					</span>
				</div>
				<div className='mt-1 relative rounded-md shadow-sm'>
					<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
						<svg
							className='h-5 w-5 text-gray-400 dark:text-gray-200'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							aria-hidden='true'
						>
							<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
							<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
						</svg>
					</div>
					<input
						type='text'
						name='email'
						id='email'
						className='dark:bg-regal-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-500 rounded-md'
						placeholder='you@example.com'
						required
					/>
				</div>
			</div>
			<div>
				<div className='flex justify-between'>
					<label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
						Subject
					</label>
				</div>
				<div className='mt-1 relative rounded-md shadow-sm'>
					<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
						<svg
							className='h-5 w-5 text-gray-400 dark:text-gray-200'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
								clipRule='evenodd'
							/>
						</svg>
					</div>
					<input
						type='text'
						name='subject'
						id='subject'
						className='dark:bg-regal-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-500 rounded-md'
						placeholder='Please enter the subject of your message'
						required
					/>
				</div>
			</div>
			<div>
				<label htmlFor='about' className='block text-sm font-medium text-gray-700 dark:text-gray-300 sm:mt-px sm:pt-2'>
					Message
				</label>
				<div className='mt-1 sm:mt-0'>
					<p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>Please ensure that your message is as descriptive as possible.</p>
					<textarea
						id='about'
						name='about'
						rows={3}
						className='max-w-lg shadow-sm block w-full dark:bg-regal-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 dark:border-gray-500 rounded-md'
						defaultValue={''}
						required
					/>
				</div>
			</div>
			{/* <div data-netlify-recaptcha='true'></div> */}
			<div>
				<button
					type='submit'
					className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 dark:bg-green-300 hover:bg-indigo-700 dark:hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:text-regal-900 focus:ring-indigo-500'
				>
					Submit
				</button>
			</div>
		</form>
	);
}

export default ContactForm;
